# Supabase Secrets and Secure Handling

## Supabase Project Secrets

### Project URL (`SUPABASE_URL`)

- **What it is:** The URL of your Supabase project.
- **Usage:** Used to connect to your Supabase instance.
- **Handling:** Safe to use in frontend, but don't hardcode.

### Anon Key (`SUPABASE_ANON_KEY`)

- **What it is:** Public API key for anonymous access.
- **Usage:** Used for unauthenticated operations.
- **Handling:** Safe to use in frontend, but don't hardcode.

### Service Role Key (`SUPABASE_SERVICE_ROLE_KEY`)

- **What it is:** Bypasses Row Level Security (RLS).
- **Usage:** For server-side operations only.
- **Handling:** Never expose in frontend or public repositories.

### JWT Secret (`JWT_SECRET`)

- **What it is:** Used to encode/decode JWTs.
- **Usage:** Server-side authentication.
- **Handling:** Keep strictly server-side, never expose.

### Database Password (`DB_PASSWORD`)

- **What it is:** Password for the default Postgres user.
- **Usage:** Direct database access.
- **Handling:** Keep strictly server-side, never expose.

## 2. How to Handle These Secrets

### Frontend (React app)

- Use only `SUPABASE_URL` and `SUPABASE_ANON_KEY`

