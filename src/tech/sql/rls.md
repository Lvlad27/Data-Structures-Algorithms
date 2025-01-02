RLS really seems to be a pain point for people. Confessionally, I have 20+ page document of my notes when I learned it over a year ago. It's legitimately hard.

**PART 1: BASIC STRUCTURE**

An RLS policy has the following structure:

```sql
CREATE POLICY <policy name> ON <table name>
AS PERMISSIVE|RESTRICTIVE
FOR ALL|SELECT|INSERT|UPDATE|DELETE
TO <role_name1, role_name2, role_name3>
USING (
  <some condition>
)
WITH CHECK (
  <some condition>
)
```

Let's break it down:

**Line 1 (required):** `CREATE POLICY <policy name> ON <table name>`

You are specifying the name of the policy and the table it applies to

**Line 2:** `AS PERMISSIVE|RESTRICTIVE`

> Defaults to PERMISSIVE if the line is omitted

You can have multiple policies that target the same roles and the same actions (SELECT, INSERT, etc.).

For instance, you can have two contradictory policies like this:

```sql
CREATE POLICY "always allow selects" ON <table name>
AS PERMISSIVE
FOR SELECT
TO anon
USING (
  true -- <--------------------always allow SELECTs
);

CREATE POLICY "never allow selects" ON <table name>
AS PERMISSIVE
FOR SELECT
TO anon
USING (
  false -- <--------------------never allow SELECTs
);
```

The PERMISSIVE keyword means that if any relevant policy permits access to a row, it will be allowed even if another policy rejects access.

In the example, even though the bottom policy is false, because it is permissive, the top policy will still allow access to the rows. PERMISSIVE is really an OR statement that takes all the conditions from the policies and puts them into a giant if statement:

```sql
IF condition1 OR condition2 OR condition3...
  give access to tested row
```

The RESTRICTIVE keyword states that "the condition in this policy must be passed for access even if other policies permit". It's like an AND statement:

```sql
IF (permissive policies... con1 OR cond2) AND (restrictive policies... cond1 AND cond2)
  give access to tested row
```

**Line 3:** `FOR ALL|SELECT|INSERT|UPDATE|DELETE`

> Defaults to `FOR ALL` if the line is not included

This is the method that the policy is activated on. For instance, if you had the below RLS, the condition will only be checked for DELETE queries:

```sql
CREATE POLICY "allow deletes for anon" ON <table name>
AS PERMISSIVE
FOR DELETE
TO anon
USING (
  true -- <--------------------always allow DELETEs
);
```

**Line 4 (required):** TO <role_name1, role_name2, role_name3>

Just like how an app has different users with permissions, so too does Postgres. When you use the database API, your requests are actually managed by an API server called [PostgREST](https://docs.postgrest.org/en/v12/).

It will check the app user's authentication credentials to decide whether to log into the database as a guest (anon), a regular user (authenticated), or an administrator (service_role).

You can have a single RLS policy apply to multiple roles if you would like:

```sql
TO anon, authenticated
```

The `service_role` has a [BYPASSRLS](https://supabase.com/blog/postgres-roles-and-privileges#role-attributes) modifier in its definition, so it's immune to RLS policies.

**Part 2: CONDITIONS** `(USING|WITH CHECK)`

**Part 2.1: JWTs and Transaction variables**

This requires a bit of a detour because you can't write conditions without knowing a bit about auth

**JWTs:**

What is a JWT? It is a JSON object that encrypted and signed. This guarantees that it is "authentic".

If a someone has their password and email, or other credentials, they can prove they are a certain user in your system. After logging in, they're minted a JWT. It looks like this:
`eyJhbGciOiJIUzI1NiIsImtpZCI6Ill0Zm4xV2NRb21DR2dET00iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL25lbmJmZmVibHBvaHhzcXdzbGRpLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIwNzlkNWJkOC1kZDQ4LTQwZjktOTRmNi0wZmI1N2E2MGM5YTIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIyMDE0MDE2LCJpYXQiOjE3MjIwMTA0MTYsImVtYWlsIjoibmFtZUBkaWQteW91ci1yZWFsbHktdGhpbmstaWQtbGVhay1teS1lbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyMjAxMDQxNn1dLCJzZXNzaW9uX2lkIjoiOGNkNGMzZGYtNGZhOC00ZWY2LWEyZjAtZjkyZTM1YzI1M2NiIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.vMImnp0gfLEZbLOtUa_xBHWOJ7ffyt0rRM7Rjo3zLpw`

When it's decrypted with the right algorithm (plug it into [jwt.io](http://jwt.io/) to see), it becomes readable JSON:

```json
{
  "iss": "https://nenbffeblpoaxsqwsldi.supabase.co/auth/v1",
  "sub": "079d5bd8-dd48-40f9-94f6-0fb57a60c9a2",
  "aud": "authenticated",
  "exp": 1722014016,
  "iat": 1722010416,
  "email": "name@did-your-really-think-id-leak-my-email.com",
  "phone": "",
  "app_metadata": {
    "provider": "email",
    "providers": ["email"]
  },
  "user_metadata": {},
  "role": "authenticated",
  "aal": "aal1",
  "amr": [
    {
      "method": "password",
      "timestamp": 1722010416
    }
  ],
  "session_id": "8cd4c3df-4fa8-4ef6-a2f0-f92e35c253cb",
  "is_anonymous": false
}
```

A user cannot change the JWT - doing so would invalidate the signature, so it acts as an unforgable passport for your users to enter your app.

The values on this JWT may seem a bit convoluted, so I'll break down the most important ones:

- **sub**: this is the user's unique id. The same one in the auth.users table
- **exp:** when the JWT expires in [unix time](https://www.epochconverter.com/)
- **iat:** issued at in [unix time](https://www.epochconverter.com/)
- **email:** the user's email
- **phone:** the user's phone number
- **role:** their database role level

There are two more variables that matter (user_metadata and app_metadata), but I'll leave those for the end.

**Part 2.1 Cont.: JWTs and Transaction variables**

PostgREST (DB API), will create postgres variables that exist just for the single request. It does this by executing the following SQL behind the scenes:

```sql
select set_config('request.jwt.claims', $5, true),
```

This gives you access to the JWT's JSON object. It can be accessed with the Postgres's built-in `current_setting` function:

```sql
-- Get the user's id
current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub'
```

If you ever wondered what the `auth.uid()` function in Supabase looks like under-the-hood, well, it looks like this:

```sql
select
 coalesce(
   nullif(current_setting('request.jwt.claim.sub', true), ''),
   (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
 )::uuid
```

Supabase provides the auth.uid() and the auth.jwt() functions as convenience functions to extract JWT transaction variables in RLS.

With this data, you can get a users information to use in RLS policies. For instance, you can make a rule that in-order to UPDATE, the row's user_id column must contain a reference to the user id in the JWT:

```sql
create policy "Allow user to edit their stuff"
on "public"."<SOME TABLE NAME>"
as RESTRICTIVE
for UPDATE
to authenticated
using (
  (select auth.uid()) = user_id
)
with check(
  (select auth.uid()) = user_id
);
```

**Part 2.2 Conditions:**

**USING:**  
The using keyword inspects the value of row to see if it should be made visible to the query.

When you SELECT, UPDATE, or DELETE, you have to use a WHERE statement to search for specific rows:

```sql
--select
SELECT * FROM some_table
WHERE id = 5;

--update
UPDATE some_table
SET id = 6
WHERE id = 5;

--delete
DELETE FROM some_table
WHERE id = 6;

Even when you don't use a `WHERE` statement, there's still an implicit one:

...your query
WHERE true;
```

The `USING` clause appends more to the `WHERE` statement:

```sql
-- Your Using condition
USING (
(
  select auth.uid()) = user_id
);

-- Your query without RLS:
SELECT * FROM some_table
WHERE id = 5 OR id = 6;

-- Your query after RLS
SELECT * FROM some_table
WHERE
  (id = 5 OR id = 6)
    AND
  (select auth.uid()) = user_id);
```

**WITH CHECK:**

Let's say you have a profile table. Well, you don't want user's to be able to modify their user_id, balance, or subscription status in the table, do you?

The WITH CHECK condition inspects values that are being added or modified. For `INSERT` you'd use it by itself. There's no need for a using clause:

```sql
-- Allow users to add to table, but make sure their user_id matches the one in their JWT:

create policy "Allow user to add posts"
on "public"."posts"
as PERMISSIVE
for INSERT
to authenticated
with check(
  (select auth.uid()) = user_id
);

-- Example: failing insert
INSERT INTO posts
VALUES (<false id>, <comment>);

-- Example: successful insert
INSERT INTO posts
VALUES (<real id>, <comment>);
```

**UPDATEs:**

`UPDATE` both filters for rows to change and then adds new values to the table, so it requires both `USING` and `WITH CHECK` conditions:

```sql
create policy "Allow user to edit their stuff"
on "public"."<SOME TABLE NAME>"
as RESTRICTIVE
for UPDATE
to authenticated
using (
  (select auth.uid()) = user_id
)
with check(
  (select auth.uid()) = user_id
);
```
