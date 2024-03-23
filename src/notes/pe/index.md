Internet Revolution arrived at maturation of popular programming languages with twin goals of power/flexibility (e.g. Lisp) and readability/maintainability\*. Until 2000, many new languages arrived and became popular. Perl (born 1989) and Python (born 1991) battled until Java (born 1995) dominated. Despite attacks from BigTech (IBM, Microsoft, Google, etc.), Java is still most popular platform.\*\*

In 2000, Java finally won. Used barely a couple years. Had few tools. No framework\*\*\*.

In 1999, I worked on dozens programming languages, and chose Java as my next focus realizing IBM was intentionally killing my IBM product current focus.

New project:
Do we need C?
If no, any good reason not to use Java?

- I referred to JavaScript as "readable Lisp" until the 2015 additions added confusion.

\*\* Microsoft platform is used at failing companies where executives equate "computers" with "Microsoft Windows".

- PHP with its unskilled development community and disorganized files/entry points will never be knowingly chosen for large projects.

\*\*\* Struts 1 became top level project in 2000. Spring was 2002. Struts 2 was 2006. Spring did not dominate until Spring Boot (2014) dumbed down to PHP level, probably killing Java's dominance.

20240323

---

1. "Result objects" are why C has struct so functions return a single object.
2. Process each boolean decision only once, of possible.
3. "Early return" is opposite of "single exit" (violated by throwing Exceptions, you decide.)
4. Enum were cool in C. Since C++, use constants.
5. Custom Exceptions require extra Classes/code so create as few as possible, preferably none. Provide custom Message when throwing Exceptions, if you can add details. Half Exceptions require original Message to not lose details, but you can concatenate: DatabaseException("Failed to finish transaction. " + dbe.message). Decide if original stacktrace might be useful. Better: prefer handling in application instead of crashing.
6. Avoid/remove LINQ and EF, guaranteed sources of errors.
7. Yes, use constants. See #4.
8. No. Add methods to avoid code triplication. Do not add code jumps/complexity to avoid boolean expressions. 40% of programming is boolean expressions (output, input, branch, loop, actions).

Good Developers can spot the code smells recommended in this Post with one glance.

"Clean Code" book contained alternate ideas for C++, not very good and mostly obsolete when first published in 2008. Very catchy marketing brand.

20240321

---

Arrogance is treating others as if you are better (e.g. more knowledgeable) than them. Arrogance is caused by lack of empathy.

Many people are insecure/clueless and pretend others having self-confidence/competence/knowledge is a negative.

Most people in software development complaining that someone is arrogant is because that someone proved the complainer is clueless. The "arrogant" person may have been as diplomatic as is possible, but the clueless person is still offended at having their ignorance made public, even though their loud insistence on proving their ignorance was the (only) cause of their shame.

I do not worry about Modern Software Engineers. Everyone knows I am better at software development than them. I play nice as much as I can without harming my work. Usually easiest to send them for coffee, preferably hand-carrying from Brazil or Jamaica without using airplanes.

PR do not belong in professional software development.

The company may have been better removing everyone except the "Engineer" who ignored PR. Code quality may have soared.

20240320

---

1. Devs define their tasks, ask for clarification if fail to grok old process. This is standard.
2. Devs decide when current task blocks, switch to next task. This is standard.
3. No such think as a "too big" task. Architect divides into pieces for each Dev. "Takes time" is standard.
4. Devs have second-fastest desktops, after 3D animators. Compiling is most processor-intensive activity after rendering. If Dev is waiting, check build process to verify incremental and nobody added Automated Tests.
5. CD (Customer Debugging) does not affect Devs. No Real Programmer is bad enough at math to do CI (Constant Interruptions).
6. No professional Real Programmers accept PR (Public Revilement).
7. Devs do not care about QA. Admins expect QA to do thorough manual tests, else much screaming.
8. External dependencies are mandatory if exist so no improvement possible.
9. Real Developers constantly improve code, so "technical debt" cannot exist. "Legacy code" is anything in production, proven good code, not a problem.
10. I probably automatically fix "complicated" if encountered. May not understand "problem".

Management needs to hire a Real Software Developer Architect. I never missed a deadline, never released a bug or "slow".

20240319

---

You use TDD as originally defined as design method. Most LinkedIn writers incorrectly believe TDD means Automated Tests.

- TDD (Test Driven Development) is equivalent to TDD (Top Down Design). First you write caller, then you make it work.
- With BUD (Bottom Up Design), caller does not exist so you can write a caller first as a Test, then after integrating your function with actual calling code, delete your fake calling tests. Whether you created a fake caller or not, expect to adjust your function signature as you create actual callers. I often rename functions and rearrange parameters as I discover the natural name, parameters order, and move optional parameters later.
  Silly example:
  sortPortionOfArray(first, last, direction, array)
  sort(array, direction = ASCENDING, first = 0, last = lastEntry)
  // last is last to avoid calculating Length‐1 as default. Try to move function into Array class.

TDD is fine as long as you delete all temporary code (fake calling tests) before committing.

You can identify non-programmers when they talk about increasing Code Coverage. For applications, correct Code Coverage is 0%. Otherwise a programmer accidentally did not clean their code before merging into DEV trunk.

20240319

---

Please try to think like a Real Programmer (or have one review your writing) before publishing bad advice.

1. Classes are nouns. If need second noun which could be a verb (validate, process), design is likely too complex.
   2A. Methods are verbs. If need a noun, Method is in wrong Class.
   2B. Functions are probably verbs, maybe with nouns, whatever you need. Noun.verb() pattern only applies to OOP and similar paradigms.
2. Booleans may use "is" prefix. Check design for why booleans are needed. isMSIE variable was needed everywhere because MSIE did not follow any standards (even Microsoft's).

// You do not need distinct Classes
Email.validate()
Payment.process()
JSON.parse()
Product.get() // get() decides whether to retrieve from Internet or local cache.

isEnabled? What is enabled? Why not "on" or "state"?
Light.on
(FIRST == Car.gear)

isAdmin
// If Admins do not have AdminAccess, start over. Someone clueless was involved creating the design. Hire a Real Software Developer Architect (evolved from Real Software Developer, evolved from Real Programmer).

Might be good interview question to find Real Programmer show code using "hasAdminAccess" variable and ask for suggestions.

"has" prefix means "contains".

20240314

Tim Ottinger Because he offers bad advice (obvious from experience or logic) as amazing instructions. In the time needed to read his Post, I saw and documented its flaws. I believe I corrected the same Post when it was published a month or two ago, meaning he could not be bothered to read, learn, update his Post, teach best material he can. He publishes to gain LinkedIn fame by distributing misinformation, uncaring he harms careers and society. If the previous Post was not his, then he copied someone else's misinformation, and still does not have Programmer brain which forces us to see its many flaws.

I keep the discussion between Real Programmers making good software and money-grubbing Modern Software Engineer impostors destroying society. That keeps personal attacks within broad strokes of my industry, instead of suggesting any one person is selfishly evil.

I am willing to frame the conversation about intentionally distributing misinformation however you want:
‐ What names do you prefer we use for him?

- Does it depend whether he wrote the original Post or stole it from someone else?

Not about superiority. Programmer is what we are, like Salesperson. Is Green superior to Blue?

He is not a Programmer.

20240314b

Tim Ottinger I do not use term "fake programmer". Modern Software Engineers do not hide their uselessness. They do not want to become useful, because it does not affect them. My "framing" is not targeting them. I am targeting executives, hoping they become aware of the problem, assuming they might like to stop wasting money on people making everything worse. Once they care about the existence of imposters, identifying them is easy.

Then problem is how executives can hire Real Programmers when their HR, IT management, and all current software writers are working against the company and implemented processes to protect imposters.

Clinical Trial Services hired me. On first day, I wasted hours trying to teach IT Director why his long code never worked, and my 3-line replacement did everything desired. Next day, IT Director and entire IT department had been terminated (except one woman). I fixed all software systems while changing all security locks.

I believe bad software will destroy our society. I am fighting for my family and friends. I do not care if my language upsets the destroyers. I need my thoughts to reach people with authority to stop the apocalypse.

20240314

numRecords, numEmployees, numProducts. My collections have no prefix or suffix: records, employees, products; so they match well. If only one iterator is used inside short loop, single letter (r, e, p), but the moment confusion is possible, rename to an explicit name (employee, boss, officeAssistant).

Beginners use recordsList and recordsCount (or recordsTotal), recordCurrent. And everything is "record" instead of more specific names so they can copy the code for handling databases.

My habits are shorter, consistent. and (despite my using single-letter names) easier to understand.

30240315b

---

Acting skills and flexible ethics are important for Modern Software Engineers They learned how to use those annoying buzzwords in sentences to attain high-compensation jobs, so they are going to keep their high compensation despite no ability to do the work. They want immediate gratification, receiving rewards without wasting time on acquiring skills; seems opposite of patience.

Patience is not important for Real Software Developers. We want to know everything, so we constantly impatiently learn. We want everything to work perfectly; so we impatiently keep working on software code until the software is perfect. We cannot tolerate bugs, so we impatiently remove bugs and improve all code in a system, regardless of our current assignment.

When is patience important? Useful? Not the opposite of a good trait in workers?

20240315

---

Beware of judging developers for poor practices.

They are doing what they can. Try to understand instead.

I once encountered a ‘horrible’ dev team:

- They fixed errors in production directly, without telling anybody, and not push changes back to the repo

- They used to have important files and scripts on their computers, not pushing them to a repo

- They had two repos, but no one knew which one was correct, so both had to be used.

- They did not have any documentation

- They did not use any planning tool. Whatever was said at the meeting was done. And maybe not.

Dismissing the team and putting them down for working like this would be a mistake.

Yes, they tried to improve in the past.

They were doing the best they could. They were just doing their jobs.

It was a small team, working for one client for years.

And the old management didn’t require any process. They wanted things to be done and fixed.

Even the management refused to document.

Yes, all of that caused many problems.

Changing a team like that is tricky, sometimes impossible.

Management support is essential. I’d start by understanding the team’s ways first.

P.S. What one thing would you do first?

REPLY:

1. Teach collaboration.
2. Freeze repos. Create new repo. Add everything important. Create "Promote" button. Admin locks production to require using button.

Planning is a few text files in source control.

1. As Manager, I have Team file: UnassigndTasks -> Assigned marked with assignee -> Finished.
2. Each Dev has Tasks: Priorities/Progress with (cryptic) notes -> Finished.
3. I (or my assistant) merges Dev Finished tasks into team Finished.

- If current work file is too large, copy version to Old without current work, then delete obsolete tasks from current file.

"Modern" people cannot complain about Devs playing in production, defines their Bad Fad™ called DevOps.

Create QA when possible. Finished -> AddToScripts -> ReleaseCandidate -> Released.

Marketing: Finished/Released-> (nontechnical) ReleaseNotes.

External documentation is always obsolete, usually before being saved. Only needed external documentation is how to reach internal stuff / source code / Promote button, so...

- We create Image / written instructions for creating working Dev machine.

"Modern" Planning is anti-collaboration micromanaging deadline-based complexity (e.g. JIRA). Bad.

Am I hired? Or you just wanted tutorial "How To Manage Devs"?

20240314

---

I managed over thousand Software Developers. I never fired anyone. I cannot imagine a programmer not wanting to "fix bugs and debug complex issues" as that is what we Programmers consider the most fun (better than... ).

Why would you grant "Great Developer" title to someone who could only create shiny new code? I attained the title for quickly fixing bugs in millions lines of code. I understand good design, required to recognize bad designs.

This does not make sense, requires some combination of bad management and nonprogramming worker. Modern Software Engineers copy-pasta, then run away because they cannot read code and have no clue why the code they copied seems to produce the desired results.

I found a 100‐line function with 3 useful lines and ~50 bugs. Most bugs were avoided because other bugs made the code unreachable. The Modern Software Engineer admitted he copied 4 functions to "get it to work", then was afraid to touch it to avoid breaking it.

I do not understand how he was a "great developer". If he was useful, you should have used him. Our system is "employees work to get paid". Refusing to work means no pay. He quit.

20240311

Garry Hurley Jr I can name 5 game designers: 4 famous in 1990s, Patrick Barrett III is my cousin. Famous game programmers? Creators of Doom and Unreal engines?

- Yes, we all want to create games. Then we learn game publishers treat game programmers much worse than corporate America abuses me.

I had fun creating new software (games, startup, consulting). Then I improved popular email system from IBM twice. I scaled up existing CertaPro Painters software to more than one server. While Vanguard had me create new software, my boss had me helping dozens of other projects; even if the project was new software, my contributions were bug fixes or design changes because current design could not fulfill current specifications.

After working on best business software platform, creating another security system is tedious. In 2000, I created 5 message queues (different languages/purposes) when MQ Series/LEI/DECS were unavailable; by 2005, ActiveMQ prevented creating more.

I enjoyed fixing software for Comcast, Zendesk, IQVIA, Bracket. (Looking at last decade, I am surprised half my big projects were new software.)

I love challenge of fixing/improving software more than tedium of starting from scratch.

I am weird.

---

You cannot learn good system design by studying the largest Internet applications. Good system design allows for migration to large scale. Many currently huge programs (Facebook, Twitter) were first created using Ruby before discovery Ruby was terrible for middle scale (100K concurrent visitors.) 2008‐2011 was blitz to migrate platforms to handle larger scale, then keep optimizing for insane scale.

If not on that list, you do not need those techniques. Startups need working software. Huge companies need good software optimizing business processes for 30K employees. Half software development is maintenance, minor changes, not migrating to unnecessary new architecture. Almost nobody needs software able to handle insane scale.

Those may be fun to read, and pretend you understand Software Design. Like studying useless DSA and pretending to understand programming. Or watching "Raiders of the Lost Ark" and pretending to understand archeology.

I am a great Software Developer Architect, having designed a couple hundred large corporate software systems, and improved a couple hundred more. I worked on a few very large scale software systems. Despite knowing I would be useful, I have yet to work on an insane scale system.

20240314

---

The metaphor is racecar drivers putting nose into curb to make car spin, flip, burn, and explode?
Only alternative is nontechnical people staring at screens for long hours pretending to be Software Developers until the stress of faking it leads to burnout?

Burn up or burn out?

What about us Real Software Developers who relax until our subconscious demands our hands on a keyboard to write some code?

I have been responsible for projects summing to tens of millions of dollars with insanely-short arbitrary deadlines and not been stressed. Not because I did not care. Because stress is not helpful, would not make anything be completed earlier. I never missed a deadline. Maybe because I assumed I would never miss a deadline. Or because I assumed the deadline was part of the challenge, and I solved every challenge.

Work is life.
Perfectly balanced.
Except currently the completely broken work assignment system is not assigning work to me.

But that is bad recruiters, HR, etc.
And companies not caring about business or software. When companies start caring about business, they will call me to fix their business, processes, and software.

20240313

---

If you're a software developer, remember:

1. Don't over think the solution
2. Write ugly code to solve the problem first, refactor second
3. Get feedback from others

Coding is complex enough as it is.

At least keep the process simple.

---

Company/teams doing "Agile" tend to use 5 of 21 Agile practices. Fewer is better. All Agile practices are extremely counter-productive. For easy improvement, do opposite of Agile practices. Tell executives that your processes are based on Agile.

Talk to executives so they feel involved, adding yellow. Do not ask about actual Agile practices. Executives know nothing about Agile; we want to maintain their ignorance to avoid executives noticing our processes do not match actual Agile. Except improved metrics (from doing the opposite.)

The Post is about implementing Agile practices to make executives happy, unrelated to Agie Manifesto/Principles.

Choose 5 Agile practices which take little effort, so do not break your team, yet can be shown to executives.

Backlog is good, as long as it is not used by Devs. Create tickets with weird specifications. Add silly tickets you will never implement. Have a nontechnical assistant (Manager, Project Manager, Business Analyst, any leech with Agile or Scrum in their title) change dates (or recreate tickets) to maintain good metrics, and create happy-making reports for executives.

When the executive leaves, delete Backlog and stop all Agile practices. Do not pretend forever.

20240310

---

Wikipedia - Agile software development (page) - Agile software development methods (section) - Agile software development practices (title): Table lists 21 practices, seems to include every awful popular software development practice (more than my usual list of all Scrum practices plus 6 bad practices of 12 XP practices.)

Why does everyone assume I had bad experiences? If I am involved with a project, there are no bad experiences. I easily work around bad management, making fun for everyone.

Applying tiniest bit of logical thought/common sense shows why each Agile practice is opposite of good software development. Proof does not require using good practices. Stop using any Agile practice for immediate\* improvement.

- May take 2-4 months for everyone\*\* to stop applying bad processes. Improvement is immediately obvious as they do.

\*\* Real Programmers stop immediately, if they ever applied counter-productive systems. Modern Software Engineers need to be taught a better system because they cannot think of anything on their own. Manager should go with the flow, allow Devs to work well. Nontechnical leeches with "Agile" or "Scrum" in title need to be removed (transfer to Antarctica, no phones or Internet.)

20240311

---

This misaligns causes and effects. Modern Software Engineers/Implementation Partners follow the described system to optimize compensation. Agile is not needed to never finish Waterfall project specifications. Agile kills productivity while constantly creating excuses for needing extensions.

A large software project needed standard software development team [6 Real Programmers plus 6 assistants (Project Manager/gofer, Visual Artists, Admins] for ~2 years. After a decade, Implementation Partner has hundreds employees doing little. Significant number are Agilist leeches (e.g. Scrum Managers) adding billable hours while delaying Modern Software Engineers. Preventing Modern Software Engineers from touching code is good, but someone should be productive. Management is very interested in implementing an incredibly bad recommendation, would require millions dollars maintenance annually forever, if system survived.

CD (Customer Debugging) is an Agile practice, although Microsoft always used CD, starting long before Agile was born.

PHP was the new language so Visual Artists could poorly access a nonfunctional database.

For Real Programmers, Java organized software code well, conquering Perl, which had almost beaten Python.

20240310

---

Should you use cloud services (Like AWS, GCP, Azure) or physical dedicated hardware?

hashtag#hosting
The cloud usually helps you get started, as renting compute resources is cheaper than buying dedicated hardware when you are a startup looking for market validation and working towards product-market fit.

There are ways to use your own compute resource, and they could save you money as well. Therefore, we should have no reason to pay a cloud service provider more than $100 a month (this must be treated as the maximum limit).

From my observation, cloud services price their virtual resources such that a year of continuous usage will cost you the same money it takes to purchase the part of the underlying hardware resource used in emulating the virtual resource you have used. So the price you pay in a year will be the same amount needed to purchase a similar hardware.

As the business grows, using dedicated physical hardware is the cheaper option. This transition can only happen smoothly if people don't use any fancy vendor-specific services and stick to open source software, VMs, and bare-metal servers running freely available Linux distributions.

Only workloads with unpredictable resource demands, exhibiting significant fluctuations in the traffic they receive, benefit from cloud resources. Especially when high traffic is only expected occasionally (like a scheduled event, for example).

The other situation were cloud will be helpful is when you train ML models. For this, you will temporarily need expensive GPUs until the training is done.

A SIMPLE HACK TO PUT YOUR HARDWARE TO USE QUICKLY:

You could create a ssh tunnel and forward a local port to a cheap VM rented out from a hosting provider like AWS or GCP. This rented VM acts as a load-balancer with installed NGINX that accepts and load-balances requests randomly to one of the forwarded ports.

A MORE ROBUST AND PERFORMANT SOLUTION:

Use OpenVPN to configure static VPN-IPs for each of your clients in the OpenVPN server. The OpenVPN clients will be your own hardware in your home network. You can install the OpenVPN server in a cheap compute instance provided by AWS. This setup will work even if your home network blocks in-bound public connections at the firewall level and your ISP does not support setting port-forwarding at the router level (which is usually needed if you want your home network to receive HTTP/HTTPS requests directly).

OpenVPN creates an encrypted tunnel (which is better than ssh at forwarding heavy network traffic) giving you an IP which a server can listen-to from your hardware. By listening to the given ip-port combination on your local machine, your server will be listening to the same ip and port on the OpenVPN server, which will be on a cheap EC2 instance or a DigitalOcean droplet or any other general purpose VM (that preferably runs Ubuntu. Don't use Windows or a proprietary distribution like Red Hat, or something specific to the cloud provider like Amazon Linux).

---

I approve this Post. When I designed AWS, I assumed our customers would rent database space for short-term emergencies. Remember AWS was fourth part of my business, generating supplementary income from activities/hardware we needed for primary business.

I am averse to givng another company control over our critical business functions. Every external company is a vendor adding their own profit margin. I often underestimate how others think poorly.

- "We use their service so we can blame them when systems are down." I heard this justification many times from many executives at many companies.
- Which is better: tell your Admins to fix problems, or ask Support at another company to please fix the problems soon because your company is unable to do business so the vendor might lose s customer when you go bankrupt.

I have read "suggested startup business plans" which start "1. Create AWS account." Startups should keep costs low, and control/flexibility high.

20340310

---

To be a great Software Developer:

- Never need frameworks. Always learn to do everything vanilla, on every platform. Then when needed, only takes almost an hour to master Angular, Bootstrap, Django, Drupal, Ember, Flask, Laravel, Next, Play, React, Swing, Symfony, Tailwind, and any framework/library not from Microsoft.

Learn data structures early so using correct one is instinctive. Know how to find formulas, and convert them to code. Real Programmers cannot memorize anything so do not try. Assume companies including trivia quizzes in their hiring process do not want good software and reject Real Programmers (and evolved versions like Software Developer) either during their torture systems or as soon as they notice they accidentally hired someone who understands software.

Try. Document everything you tried, everything you considered, then research and try everything you considered. Then explain all that to a rubber duck. If still not solved, ask for help, and include everything in the first request. Never make someone helping you work to get information from you.

Never denigrate anyone. Make one comment why a statement is mistaken, then run away and do not look back.

20240305

---

People are challenges. Learn their system. Usually terrible, have fun. Take notes until they recognize I am best Software Developer. Move slowly, improving for yourself, share with trusted teammates, not group working for your boss.

If no build process exists, make. Will save much time durung second week. Of course it only deploys to your local machine/private development server. If building takes 10 minutes, your build process is terrible. Switch from make to ant or maven, with conditions to only build changed parts.

A team should all commit to one source control, looks like trunk-based development. Until they ask you to work on old branches. Just look at them as if they are insane because they are.

- Then learn they are trying to use git with multiple branches. Which is like asking Santa about his flying penguins. Uncertain which problem is worse: git or multiple branches. Probably git. Migrate to mature source control (svn).
- Delete any tests interfering with your work. When you gain authority (Senior, Lead, Manager), delete the rest.

If asked, give your build/deploy to QA. They can pass deploy to Admins.

Always complete a feature or patch. Fix problems immediately when noticed. Commit when done.

20230305

---

Someone referenced a blog by Erik Dietrich (daedtech dot com) who discusses how poorly skilled people become expert authority in local groups, and ignore globally recognized practices. I agree with his thoughts, within his stated context.

My perspective is many current "globally recognized practices" are terrible, obvious from a little thought or experiencing the results. To make certain my beliefs are correct, I needed to prove to myself that each is not wrong because The Expert Authority (myself) declared it.

An easy one is the corruption of TDD where Automated Tests / Unit Tests are retained. I did uncorrupted TDD 20 years ago: write failing test, make it work. When the test interferes with development, or before finishing/committing the assignment, delete the Unit Tests. Over the last decade, I worked on systems with a decade of the corrupted version, with exactly (or worse) my predicted results. Improvement was discouraged to retain Unit Tests, enforced by PR (Public Revilement). My belief was supported by my instincts and proven bad by its strongest supporters.

- The argument that Automated Tests should be Behavioral demonstrates poor understanding of programming. We Programmers must prove Units (the feature we are creating/modifying) work. We cannot easily create Behavioral Tests. QA (responsible for Behavioral Testing) cannot easily Automate Behavioral Tests. Proving submitting these values in those fields gives correct result is not enough if the Submit button is invisible or unclickable.

Other obviously bad "recognized practices" are that chopping code into Functions or Microservices makes it simpler/better, when often the resulting codebase is more complex and more difficult to maintain. I demonstrate by pulling all the dispersed code into single procedure, optimize my way (using OOP Inheritance or code-suggested Functions), replacing many thousands of lines of code with a couple hundred.

- And then have the Local Authority use PR (Public Revilement) to tell me to "put it back". None gave a reason beyond "Because I said so."

My book may need more "proof": how to identify that your codebase is suffering these problems caused by terrible "globally recognized practices".

20240303

---

Ouch. You give me a reading assignment, and base for another chapter. Yay. More procrastination. Wait. Am I ever supposed to publish? Thank you.

Should my book include "Go read _Your Code As A Crimescene_ by Adam Tornhill for techniques. Here is what you should be researching/proving" instead of providing detailed instructions.

Are those statistics relevant? My case is "development slows", not "more lines change".

I allow others to use profilers and linters to make them feel good about finding/making improvements. I have an extra sensory organ which quickly identifies easy high-impact design changes. I believe it is same organ allowing me to see bugs without reading code. Might be just noticing which code smells pervade a codebase:

- Needing to jump through many files/Classes for minor change.
- Seeing many features use same template without inheriting/sharing common code.

I often start "fixing" something, then decide it does not matter. Or finish a change, then decide the improvement is not worth losing trust in code which has survived in production.
(Yes, I know QA and other Programmers treat my code as golden perfection, but I never want to start thinking code is better just because I wrote it.)

20240304

---

Most companies do not employ one Real Software Developer. If smart/lucky to have one, do not need another. One of us can handle the software needs of all but hugest companies.

Putting two of us on one team is wasteful.

Give us several Real Programmers to guide with experience to become a Software Developer. Great investment if treating Programmers well so they never leave.

"Junior Developer" means corrupted, useless, difficult to renovate into Real Programmer. Junior Developers are wannabe Modern Software Engineers expecting to be "trained".

My preferred team is:

- Me,
- Assistant (Gofer, called Project Manager)
- Visual Artist (not called Front-end Engineer, never expected to read code),
- Admin (hardware, software installation)

Add Real Programmers or uncorrupted people to test if they can become Real Programmers. Easier to train anyone besides Modern Software Engineers.

--
Yes, Real Programmers should apprentice under several Real Software Developer Architects to learn different approaches. But not multiple Masters at the same time.

- Mid-level role was called Journeyman because they journeyed to work under different Masters for 1-2 years each (after 4‐10 year apprenticeship under first Master.)

20240303

---

What is bad about supporting production software? More than half my work has been improving production software.

- Great fun finding bugs in 5M LOC, can take an hour. Fix so bugs cannot return.
- Great fun adding features without disturbing audience. Sometimes providing improved interface as an alternative so hidebound audience may keep using the old interface; always just executives underestimating employees, who all switch to new interface within 2 months.
- Great fun improving performance. Rearrange insane database designs carefully with many Go/NoGo points to prevent data loss. Remove "Design Patterns" misapplied adding unnecessary complexity.

New software development is great fun because requires everything: business analysis, interface design, database design, programming, customer acceptance, etc.

Production support is great fun because requires everything to remedy the lacks in original development team, plus figuring how to make improvements without interrupting or annoying business.

No professional Software Developer could dislike maintenance work. We cannot gain enough professional experience to create new software well without working on old software. Or learn from mistake if unaware of them.

20240301

---

Again, purpose. If other humans decide to use my signature to discover when my Comment was written, they can learn to read ISO 8601 Basic Format.

My distinguishers are inconsistent, always lowercase, hopefully higher/later than previous entries. "a" (65) is after null/space/CR/NL (0, 10, 13, 32).

20240301b

---

I know what is B+ Tree. I doubt I ever cared in professional work. Building software applications does not require understanding B+ Tree (obsolete as Red-Black Tree is used by Java's HashMap and TreeMap, and C++ STL set and map.) Application Developers do not need to understand data structures beyond choosing the best by answering:
Values or Key-Values?
Nulls?
Duplicates?
Sorted? How?

We do not care if data structure is balanced, all leaf nodes are at same level, or specific m in m-ary?

Your sentence confuses definitions.

- Real Software Engineers easily explain differences between B Tree, B+ Tree, 2-3 Tree, 2-4 Tree, Red-Black Tree, etc. They program PostgreSQL. They may not build good Web apps.
- Modern Software Engineers try to build Web apps. We are lucky if they know differences between HTML ID and CLASS properties, CSS display and visibility properties, and anything about JavaScript besides where to copy from the Web. They think B Trees grow outside.
- Real Software Developers build applications. We are Real Programmers, understand everything needed to build good application, including interface design, usability, accessibility, business processes, etc. unneeded by Real Software Engineers.

20240301

---

2013! Web Developers forced to use JavaScript are (always) incapable of learning to program. jQuery helped use JavaScript without understanding CSS, solving wrong problem. Ember is Web Components framework reducing need for JavaScript. Google made attempt, quickly aborted as everyone saw terrible design. Facebook tried with technically great framework using Virtual DOM and evil license:
"If you use React, all your base are belong to us."

Every change to DOM immediately rewrote screen, killing performance when changing multiple elements. Virtual DOM allowed deciding all changes before updating the DOM/screen. Huge improvement. Ember immediate redesigned to use Virtual DOM, released in 2014.

2015: Google released Polymer, making very easy for Widgets to become Web Components
2016: Google tried again with new framework marketed to Microsofties, without Virtual DOM.
2017: Facebook fixed React license to be viable.
2018: Every popular browser except Safari had native Web Components. [WebComponents.org states Safari is now compliant.] All Web Components shim libraries are obsolete.

Official implementation of Web Components includes Shadow DOM, an internal Virtual DOM, for same reason.

20240301

---

Backlogs are fun! They provide list to review after I perfect software. Typical session:
"Request: Change button to green"
"I deleted the screen containing that button"
"Request: Add location"
"I added addresses allowing multiples and history of changes."
"Request: Delete people"
"I added action to remove access. We cannot delete people without destroying historical data."
"Request: Indent a field label"
"All field labels are right-justified unless above a textbox. Small screens left-justify everything, no indents."

Standard 2-year Backlog may contain couple minor requests which might make an executive happy and everyone else slightly less happy. Manager has conversation:
"We found your request to make a paragraph bold We will push the change into production next week."
EXECUTIVE: "Oh. That was a while ago. I really like the new screens so you can cancel that request."

Every Dev should have personal ToDo list of current, planned work, discussion topics, or tasks for other Devs to handle. The last two categories should be emailed to Architect Manager (me) to add to the Tuesday At Two™ agenda.

My teams do not have Backlogs. Changes are assigned, or my responsibility (explain why not, or hold until requester leaves.)

20240301

---

Software Developer job:

1. Learn business process.
2. Improve business process.
3. Enforce improved process using software.
   If you are doing what business people request, you are failure as Software Developer, might as well be a Modern Software Engineer, providing negative value.

20240228

---

Someone complained candidates complained about a 4-week test project. I assume he was requesting unpaid work. People should not complain. People should ignore him.

If you want unpaid work, ask friends, family, or (for software) the freeware / Open Source community. Do not take advantage of people hoping to work for you. You are creating a poor relationship if you hire them (unless you want everyone to know you are a terrible person who exploits others.) You are creating badwill with people in your area/industry (unless you are trying to go out of business.)

If you want a trial to test potential candidates, pay for probationary project/period. At market rates. Do not suggest they should accept low compensation during the trial. You should not expect cheap work by dangling a job offer in front of candidates.

- You can end the trial the moment you realize you will not be hiring them. Or when they deliver what you want. In the professional world, we call this "contracting", a very common "try before you buy" method for human resources.

Please understand:

- Programming should never be part of hiring programmers,
- Math should not be part of hiring accountants ("What is 233,671 minus 587,744?")
- Managing people should not be part of hiring managers ("Go fire Bob.")

Obviously those skills will be used once you start paying. Terminate if skills are lacking.

Evaluating candidates is from talking about their experience, skills, accomplishments.

Can you imagine a company suggesting "Create our end-of-year financial statements" to get free work from an accountant? Repeat every December; never pay for accounting reports.

If you must test skills, ask them to READ something relevant.
For Programmers, "What does this function do?"
For Accountants, "Here is a Balance Sheet. What is the value of our Intellectual Property?"\*
For Managers, "Read from 'Green Eggs and Ham'."

- For non-Accountants, the trick is that Accountants put Intellectual Property under the category "Intangible Assets" because... why not? Better than "Imaginary Items", "Conceptual Belongings" or "Abstract Commodities".

20240227

Miguel Cortes One take-home project, I wrote solution in 10 minutes Spent an hour installing software to test; ran perfectly. Stared at it for a couple hours, stressed because writing code normally includes several nights of dreams. Hiring Manager said I passed when he read first 3 lines of my comments, so my code was irrelevant, but best seen, better than ever expected. I noticed and provided a solution for a bug which he, his 4 Senior Software Engineers, and all previous candidates, had not noticed.

Another take-home project was for SheKnows.com. I created a server handling all specified needs, and everything I knew would be needed in next several years. They loved my solution, and no longer needed an employee because they had my solution. They did not bother compensating me.
(Which would have been smart in case my software ever needed maintenance. Most companies doubt my code is perfect, until after running for years, someone notices my software had no bugs, because first Support call was after someone added a bug.)

Take-home projects have become torturous, free work with no chance of employment, or both. I can accurately evaluate anyone without making them work for free: required skill for good Managers.

20240227b

---

A team of "elite Software Engineers" was Modern: used Modern Framework with Modern\* Microservices\*\*. I created a new top-level screen layout which displayed current visitor's name (in case they forgot?) To get their name, I was required to use getCurrentUser().getName(); Leaving any page returned an OutOfOffice error. The application had nothing related to calendars.

Problem was the Person object was created by a shared library used by several applications: 3MB including everything needed by any of the applications, including OutOfOffice data from an application with workflow including delegation of approval tasks when not available. Most applications had worldwide usage so an extra 3 MB per page load was significant.

- OutOfOffice dates were translated from backend into JavaScript, then compared when leaving to detect changes. The date strings in different formats were not "equal", triggering the Framework's Save function. Since this was not an OutOfOffice form, no OutOfOffice Start date was included, defaulting to long ago. Validation required the Start date to be later than the Current date, throwing an error.

My solution was to add getCurrentUsername(), or a function returning a mini-Person object of only data relevant to this application. This would avoid transferring 3MB of unneeded data from server to browser and back to server. No calendar information meant no OutOfOffice errors. As this application could not change the Username or affect any Person data for anyone, Person data should never be checked for changes, or sent to the server as Person, mini-Person, or Name objects.

The "elite Senior Software Engineers"\*\*\* deemed my solution to be too "complex", adding a "duplicate" function for data already available. (Taken to extreme, have only one function dumping entire datastore to every page?)

Their solution was fix comparison of dates so the text strings matched, avoiding saving/validating the OutOfOffice data.

I agree the date comparison should be fixed. I still believe having a getPerson() returning an object without administration or calendar data would be good, saving 3 MB per page load, for a dozen applications used worldwide. Not everyone has unlimited Internet bandwidth.

--

- I invented Microservices so Intranet Applications could get data from server without refreshing the page. Modern usage violates most of my warnings.

\*\* Should be called "Macroservices" because the system passes all the data every time?

\*\*\* I was hired because I am more senior to almost everyone in IT: more projects, more platforms, more impossible challenges, perfect history of success. Rejecting my technical ideas for "that is not how we like to do things" invalidates my purpose. Please do not hire me as a top IT Expert and Master Software Developer, then reject my advice as not "what we do".

20240227

I have been every role in IT so typically think holistically, using every perspective. Database design is fully normalized. Except I almost always use a one-to-one relationship between basic information for login and common use (SSN, nameLogin, password, nameFull, nameNick), and the full person record depending on person (addresses, Employee titles/salaries, Customer orders, etc.)

The example in my Post demonstrates why I have this habit. Getting the current visitor's name should never require transferring 3MB.

20240227a

---

It's been almost 3 years since I started at Amazon.

10 software engineering golden rules I learned:

0. Tackle complex tasks early. Don't leave hard problems for later.
1. Don't overlook CI/CD, it's your biggest ally. Fight for it if you have to.
2. There are no universal solutions. Evaluate tradeoffs for each context.
3. Persist data first, then build up the UI. Don't do top-down development.
4. Reduce friction in code and systems. Spend time to minimize complexity.
5. Keep coupled components together. Don't break dependencies across repos.
6. Requirements drive development. Nail them down before coding.
7. Take shortcuts only as deadlines approach. Clean them up after.
8. There are no silver bullets in coding. Focus on readability.
9. Use Java. Java is not sexy, but it's good, fast, and scales.

What did I miss?

So close. Please play again. 0. Identify difficulties. Think about solutions while working on the easy stuff.

1. CI is bad math. CD is bad business. Avoid.
2. Software is Art: every solution is unique.
3. Software is for people. UI first. Datastore second. Connect them.
4. Always target Minimum Required Complexity.
5. Monorepo.
6. Figuring requirements is synchronous with programming.
7. "Shortcuts" are never better. Avoid.
8. My 5 Software Goals:
   Useful Usable Fast Secure Maintainable
   Readability is #5. Readable code does not matter if the software is not useful.
9. Java is fine and most popular. Any language is fine as long as Microsoft was not involved in its creation.

Helps to have experience more than 3 years at more than 1 company.

- But I am a Software Developer.
- Modern Software Engineers have different standards, and many rules which make no sense.

20240226

---

Basic good programming, being sold as "clean", with nice bad examples and bad "good" examples. Functions/Methods are named "get", "set", and sometimes call constructors with "new". Avoid other verbs for singular objects/records.

add(value) and put(key, value) are Methods for Containers. Last time I encountered "insert" was for externally sorted lists using "insertBefore" and "insertAfter"; rare as almost all lists are FIFO, FILO, or sorted using value/formula.

I often avoid having variety of functions by having creation automatically add to appropriate list, or vice versa:
// Products may be list for Server, Store, Order, etc.
p1 = Products.get(); // creates new Product
p2 = Products.get(idProduct); // get old Product
new Product(data); // automatically added to Products

"edit" is UI command showing a form, for new record if no id is provided, changing data if id is provided.

Good data management never Updates or Deletes. Create records, Create more records, Read from Views filtering obsolete records.

I have difficulty imaging professional Software Writers needing this advice. If you found this Post useful, please do not touch corporate software code.

20240226

---

Nice try at "You don't own code","Discard anything unneeded", and "Discard everything you can replace with simpler/better code", but that is only during development or when working on code others wrote.

- In last decade: One codebase required adding/changing 23‐41 files per feature addition; I improved to only need 3 files; optimal would be 1 file but required much more effort. Another codebase had security holes everywhere; I discarded ~800 lines of code in a meeting while being watched by executives of 2 companies, managers of several departments, and a bunch of IT workers (meeting had over 40 participants).

When I commit, I expect my elegant code to survive for a decade, until the company is bought, and the new executives ruin the business processes I perfected, so my perfect code does not satisfy them because they can no longer tolerate perfection.

- Iterations mean you didn't do it correctly the first time.
- Prototype means you showed the Front-end before you finished making it work.
- My favorite code is what works; do not discard.

LinkedIn showed me this Post because Jean-Philippe Paradis wrote some wonderful arguments against its phrasing. With which I agree . Everyone should read his Comments.

20240224

---

We Software Developers award Senior title when other Software Developers go to them for advice . Senior Software Developers must have useful knowledge or skills, or their advice would be as useless as asking Modern Software Engineers. Senior Software Developers must be nice enough so others prefer asking over struggling. Those are the only two requirements.

Modern Software Engineers can do everything mentioned in the Post, teaching clean code from actionable solutions with huge impacts. When their employer hires a Software Developer to make software do something useful.

20240223

---

You missed the point. Brigette Hyacinth said to hire professionals. Assign tasks. Expect them to finish in reasonable time.

- Do not assign deadlines. Do not have progress reports or frequent meetings. Know they will tell you when they discover obstacles. Know they will tell you if they are overwhelmed or underutilized.

If you do not hire professionals, try to use a micromanagement methodology like Scrum. You will not get results, but you will feel good about knowing why you are not getting results.

I never had a boss who did not know every task given to me could be considered done. The very few issues were because I finished a project in a month, while boss was trying to hire score of people to create a department to spend years on the project. Bosses need to be explicit if they assign a task to me that they do not want completed soon.

I had a subordinate disappear. Weekly meeting day, I received an email that he would miss the meeting, and might not be working much. A week later received an email that he was missing the meeting and his wife was home from hospital. A week later, he was at the meeting, suggested not assigning new work to him so he could catch up on his unfinished assignments. Professional.

20240223

I have written how giving deadlines to professionals is always harmful. I think the logic is obvious. If you do not, and do not want to wait for my book, search my old Comments.

My career is incredible/insane. Does not matter which project or the expected budget, my taking more than 3 months means the client/employer failed to provide resources properly. Everyone "gives me a chance" hoping I might be one-tenth as good as advertised, then discovers I am much better than advertised. Which harms me because nobody pays appropriately.

I grow people: mentor/teach my subordinates, teammates, colleagues, executives, etc. I am happy to have everyone test to become a programmer, as long as they do not mind making coffee if they cannot (used to transfer to Admins, but no longer viable since DevOps destroyed that career path.)

Except for emergencies, companies reject all competence in IT. I expect many to crash soon.

Do you know anyone open-minded enough to hire a Real Software Developer to develop software? Or a Software Developer Architect Manager to have a friendly productive software division (as Manager, VP Software, or whichever C-level title they prefer)?

20240223

---

Software Programmers program, write software code which works.

- Software Developers/Application Developers develop software applications for nontechnical people, who cannot handle command line options, need to be guided with questions, and like pretty graphical interfaces. Applications may be developed using NoCode platforms by non-programming Software Developers. Web Developers are Software Developers incapable of learning to program yet develop applications using WordPress, etc. (Nobody suggests they create good software.)

Software Engineer is bad term.

- Real Software Engineers work on lowest level code (Assembler, C) creating dependencies (OS, drivers, PostgreSQL). They do not use this title, preferring titles like System Analyst.
- Modern Software Engineers are Web Developers pretending they can program, but cannot learn to program. Everyone pretends because HR thinks Real Programmers are weird and Modern Software Engineers like money (Web Developers were paid less than $80K. Modern Software Engineers receive $120K.) They do no Software Engineering.

Anyone claiming these titles are synonymous is an imposter (Modern Software Engineer).

Anyone claiming "programming is simple" is incapable of learning to program.

20240223

---

I am not familiar with the "nemeric" data type. Image is missing OFFSET near LIMIT, and the silly workarounds when using Transact-SQL (Microsoft SQL Server and Sybase).

I like how having UPDATE on both sides shows structure is different from data (except it isn't.)

"A programmer without a manual is lost." I said that often in 1989, may have said earlier.

SQL is easy, but as with all programming, I check syntax for the exact version software being used. For over a decade, I "think" in postgres as simplest/ easiest most powerful/flexible version , then translate to Oracle (less-good data types), Microsoft SQL Server (3x code to workaround missing basic features), MySQL (like Microsoft, but different missing features), Sybase, DB2, etc.

1. Watch (or talk to) customers. Build Front-end.
2. Normalize fields to design TABLEs.
3. Build everything to connect them while adding business rules.

Software development is easy.

20240221

---

In 2013, I compared Ember, AngularJS, and React. AngularJS was obviously awful. Ember was very good. My comment on React was "Ignoring stylistic differences, this could have been written by me". Then I read React's license, ROFL.

In 2017, I used and taught Angular2/4, thinking it would have been a good competitor for Ember in 2013 (before Ember "borrowed" React's advantage), but much too late. React fixed its license, had declined to not be good competitor for Ember in 2017.

Since then: Angular got worse, React got much worse, and Ember keeps being ignored. The official release of Web Components makes Ember the only choice for Safari, the only browser without native Web Components (because Apple believes requiring Ember for Web applications will protect the Apple App Store.)

I use whatever employers want me to use. Unless they forget to demand I add unnecessary libraries, then I create the best, standards-based, no libraries, easiest software. Which currently would have:
if(Safari || iOS){
import Ember.js; // Web Components shim
}

If I use React again, I will read the documentation to learn what silliness applies to that version. Until then, I enjoy reading these Posts for the laughs. Thank you.

20240221

---

This demonstrates how the clueless have ruined the foundations of basic roles. Front-end Developers create UI (User Interfaces), start as Visual Artists (colors, shapes). Add Usability, Accessibility, Disability Accommodations. Maybe cross into UX (User Experience) figuring why each interface should exist, how does it help business, a process, a system.

Web Developers focus on Front-ends using Web Browsers so should maater HTML, and add CSS for styles.

Web Client-side Programmers use JavaScript. Should know HTML for dynamic creation. This is a distinct role because the previous roles cannot program well and are incapable of learning to program well.

Any library designed to allow non-programming visual artists to handle client-side programming should be avoided just to avoid having non-programming visual artists trying to program. That includes every JavaScript library you have heard about. Avoid. Period.

Communication needs are limited. Visual Artists need to understand when client orders to make it better, more usable, or prettier. The only response phrase is, "Is this what you wanted?"

Keep trying until you guess the client saying "should be brighter, edgier, with pizazz" means they want to see some green.

20240220

---

-- Software Developer Architect Role --
Ask what process are you allowed to improve. Learn the process. Improve the process. Ask what headaches they currently have; verify you eliminated those headaches with your process.

Do not provide "minimal solution". You know the answer. Skip to end of the book; deliver perfect solution.

If you Real Programmers cannot do this yet, continue apprenticing under a Real Software Developer until you learn to think holistically, from every relevant perspective, and optimize to create Minimum Required Complexity system satisfying everyone.

Most software must satisfy many perspectives: Direct Audience, Admins, Financials/Accounting, Legal, Executives (summary reports). Other required perspectives should be obvious.

Do not discuss features. Business People know their current process; cannot imagine improvements. Nontechnical people do not understand software or what software can do. Our Software Developer role is to understand their job better than they do, so we can improve what they do, then create software to enforce using our better process, plus letting computer do all calculations because computers are better at math than humans.

Example: When I built DuPont Contract Management System, a "feature" was Workflow where secretaries printed current version in triplicate to store in specified file cabinets. I added an unrequested History "feature" for what a Contract looked like at each phase. I believe the "print and store" tasks would quickly be eliminated, so I allowed those Workflow steps to be easily disabled.

Warning: Computers are great at math, if you give correct formulas. I have corrected bad mistakes in software used for many years:

- A personnel scoring system between 0 and 100 discarded the whole number and used the decimals. 01.99 became 99, much better than 99.01 which became 1. I was not told how many employees had been terminated for poor (wrong) scores over previous decade.
- A financial summary added each entry again for each co-signer, so total was slightly more than double the correct sum of once per entry. This mistake scared executives into launching several expensive programs to remedy the nonexistent problem.

Do not discuss fears. People fear "new" and "change" more than anything else. If asked, people want software which exactly replicates their current process. I built timekeeping systems which showed timesheets exactly like previous paper versions.

- Paper forms fit on paper, either squished, or with left-justified labels on same row as right-justified entry fields.
- Computer forms should be two columns: right-justified labels next to left-justified input fields.

---

I have experience with every type of project in every industry so I am your de-risked Architect.

An early focus on perfection leads to perfection.

I do not understand "paralysis" in context of software development. Do some people not write code while waiting for perfect design?
(Are those the same people who freak when I delete thousands lines of working code?)

Prototype is fine defined as unfinished implementation. "Here is the finished screen. No buttons work."

- I build Web screens in HTML (or drawn on paper), not wireframes or pictures in a PDF. The first time a screen is created in a computer should be the last time

Prototype is bad defined as fake unworking mockup. "Look how pretty is my car! (Don’t move or seeing it is just cardboard will spoil the illusion.)"

"Refactoring" is a dirty 4-syllable word. Confesses not thinking holistically. Wrote a piece which now requires the whole to be rewritten to integrate what should have been designed fully integrated.

Rewriting is not dirty word: expected that all code is written twice, once to learn what we are trying to do, and once to do it. Part of my speed is cheating: writing first version in my head saves typing.

20240217

---

I frequently mention Modern Software Engineers are Imposters, enjoy "Engineer" title to feel good, cannot program well, and need to overcome their corrupted knowledge to become Real Programmers, knowing their brains are likely wrong type to become Real Programmers. Modern Software Engineers are harming their employers and society If Modern Software Engineers cared about humanity, they would find jobs outside Software division.

Real Programmers are incapable of feeling Imposter Syndrome, certain they can do anything and everything.

Nigel Goodwin Java multithreading before Java 1.5 was a mess. Be proud you implemented on your own. After my first few multithreading Java projects, I created cheatsheet with 3 best implementations telling when to use which design. Which started from reading the poorly written OReilly book, then improving designs as I worked.
(I was the top technical Architect/Manager/advisor on ~200 projects in 3 years as Java conquered Web development.)

Adrian C. Programmers may prefer Design, Development, or Maintenance phases of SDLC. Great Architects may head Design team, manage Development, disappear after advising during Testing. (Of course I do everything except QA.)

20240216

---

Don't ask your customers what features they want.

They probably don't know it.

Ask what process are you allowed to improve. Learn the process. Improve the process. Ask what headaches they currently have; verify you eliminated those headaches with your process.

Do not provide "minimal solution". You know the answer. Skip to end of the book; deliver perfect solution.

If you Real Programmers cannot do this yet, continue apprenticing under a Real Software Developer until you learn to think holistically, from every relevant perspective\*, and optimize to create Minimum Required Complexity system satisfying everyone.

- Most software must satisfy Direct Audience, Admins, Financials/Accounting, Legal, Executives (summary reports). Others should be obvious.

Daniel Moka Not features. Customers do not understand software or what software can do.

Example: When I built DuPont Contract Management System, a "feature" was Workflow where secretaries would print current version in triplicate and store in specified file cabinets. I added unrequested History "feature" for what a Contract looked like at each phase. I believe the "print and store" tasks would quickly be eliminated, so I allowed those Workflow steps to be easily disabled.

Jozef Antony Not fears. They fear "new" and "change" more than anything else.

20240216

---

Modern Software Engineer perspective. Real Programmers are incapable of not constantly learning, while knowing we know everything (because we can take a nap and wake with everything relevant we had forgotten, even if we need to invent a new technology.)

In 2001, I thought about my accomplishments, decided at least 5 were worthy of being granted a PhD for "significant original contributions to human knowledge". I did not include my 1998 inventing/implementing Microservices for Single Page Applications in Web browsers as one of the five, too obvious, and obviously possible mixing existing technologies: HTML, JavaScript, Java Applet, CORBA, and "Datapages" Web requests receiving data instead of HTML, now called Microservices, which might have been original at the time. I did not ask for a PhD. I spent 3 years failing to convince anyone that a combination Facebook/YouTube/Dropbox/AWS was a good investment.

20240216

---

I was never afraid my code was not good. My code works, and works as fast as possible, given its restrictions. No bugs. Wait a few years, still easily understand.

For first few points, I think/dream about the code. For last point, I do not dream about that code for 1+ nights, then make certain I can read the code without questions.

Can you give yourself feedback?

Compiling, running, and someone (QA) creating/following test script is required to say code is good.

Linter can be run once if you run out of useful tasks.

Unit Tests and Integration Tests are deleted before saying code is good. Give them to QA if feeling like a packrat.

QA (Testers) will demand changes if needed. We Devs never need to ask them for feedback.

"Deploy to QA environment" is QA's job. Devs cannot interfere; we do not have access.

"Deploy to PROD" is Admin's job. Customers call Support, who tells Admins to yell at QA while creating nicely worded requests to send to us Devs suggesting changes. We Devs might have access to PROD as Customers. No code since QA provides only compiled packages to Admins. Good software does not receive customer feedback.

20240215

---

-- Incompetence plus Customers equals Opportunity. --
When a blunder requires many employees to fail their jobs to upset customers in a way extremely obvious to the unskilled public, the company has a great opportunity to remove incompetence. Every person involved in adding Posts to Groups by creating a copy must prove they did not know, and should not have known.

- Did they create part of the functionality?
- Did they receive the design plans? Claiming not to have read them should only be allowed excuse if they were copied without expectation of awareness or approval.
- Did they warn this was silly idea violating many basics of database design and bssics of UX? Fine if they warned, supported a warning, or claim they wanted to support but were afraid of the person who overrode warnings.
- Executive(s) and anyone else who overrode warnings and insisted on bad design?

At least include:

- Programmer and/or DBA who created "Post.addGroup() which did not create a one-to-many link.
- UI Designer who created "Add Group" without allowing selection of Group(s).
- UI Designer who made "Add Group" show "Edit Post" screen.
- All QA who tested this "feature". QA is supposed to stand in for Customers, and reject anything which will upset Customers like splitting their Likes into multiple (smaller) piles, or their Comment "disappearing" because it was assigned to the "other" identical Post, or not choosing an appropriate Group, e.g. being asked if Staffing can read your Post about Software Development without chance to select a more appropriate Group.

Do not fire these people. Transfer them to front-line Support. If they survive one year, they either found a new career, or may be given a little responsibility using other skills.
(That is a joke. Nobody wants a career in Support if they have any potentially useful skills. Of course these people need to prove their other skills are useful.)

Every time my new Post appears twice in my Activities, or I see "People Like your Post" and "People Like your Post in a Group" in my Notifications (which cannot be disabled), I realize again that LinkedIn has not fixed this blunder.

- How is this not a priority?
- How can LinkedIn claim not to be able to find anyone capable of fixing this? I can fix this in less than a week mostly spent onboarding. Must be many others on this platform who understand basic application design and basic database operations. Finding a competent existing employee is unlikely but possible.
- Disable "Post in Group?" feature until fixed?
- I am uncertain whether merging Reactions/Comments on corrupted identical-text Posts is worth doing. Did Customers expect the bug, so fixing data confuses them? Would they prefer to pretend the bug never existed? Build a button so they can merge identical Posts (if not edited, do not exceed certain number of Comments, etc.)?
- When can we add (appropriate) Group(s) to our Posts?

20240215

---

For decades, I argue programmers and QA\* need totally different brains. Programmers and QA are mutually exclusive roles. Their activities do not look similar at all, have nothing in common.

- Programmers are artists, creators, problem solvers. Programmers should write code so bugs are impossible. Alpha Tests make certain code works.
- QA are breakers, destroyers, problem makers. QA write test scripts checking anywhere a bug might be possible. Beta Tests make certain software cannot be broken.

Thank you for disseminating this important point.

- I no longer use title "Testers" because now used synonymously with SDET: failed software writers creating Automated Tests, sometimes assisting QA in discovering broken External Promises, sometimes corrupting software development: ruining code and productivity. "SDET" is title coined by Microsoft for people who verify bugs are working properly.

20240213

---

My Feed has Modern Software Engineer evangelizing a (bad) rule: suggesting a maximum 3 parameters per function. Modern Software Engineers should stop suggesting rules. Real Software Developers find them obscenely humorous. Wannabe programmers might believe and be forever ruined.

Programming languages may have parameter limits, e.g. 255 in Java. A long list is fine if sensical. setTop100Songs() may accept 100 strings (but probably a list). If no logical order exists, a Parameter Object may be better, adding a jump to reduce confusion.

Good Example:
CreateEmployee(ssn, nameFull, nameNick, nameLegal, idManager, jobTitle, salary, idlocation = null, office = null);

- Using a Parameter Object may add more jumps checking many Set function signatures, taking longer than copying one function signature, designed to force correctness:
  9-digit number, 3 strings, id, string, currency, [id, string]
  Functions should validate everything. In this example, validate lengths of name strings:
  nameNick < nameFull <= NameLegal
  The first alpha test should prove the parameters are in correct order (assuming test data matches real world).

createEmployee(078051120, "Paul Ercolino", "Paul", "Mr. Paul Ercolino, BSM", 1, "VP Software", US$500,000);

--
This is a good interview question to differentiate Modern Software Engineers from Real Software Developers:
"What is maximum number of function parameters?"

If a candidate responds with a small number, ask them to justify the number (fun because no reason can exist besides "someone said it"), talk for a bit more to hide which question they answered badly enough to destroy their candidature, thank for their time, and end the call.

--
What other silly Modern Software Engineer rules are so obviously terrible that no Real Software Developer could accidentally give a bad answer?

Is public discussion giving correct Real Software Developer answers going to allow Modern Software Engineers to fake their way through interviews at companies wanting good software?

Or will Modern Software Engineers continue to focus on companies known to not care about software quality, using Coding Assessments, Trivia Quizzes, Behavioral Exams, and more than 2 human interviewers to reject all Real Programmers?

--
OFF-TOPIC:
I am intelligent. That is not my SSN. That is the most famous invalid SSN, because a PHB thought it funny to use his secretary's SSN in an advertisement. Many other advertisements invalidated numbers, including one by Social Security Administration, because people believe any number they see is theirs. Here are forever-invalid patterns:
123‐45‐6789
000-??-????
???-00-????
???-??-0000
078-05-1120 (PHB's secretary)
111-11-1111
219-09-9999 (SSA used in a pamphlet)
666-??-???? (Ask colleagues/strangers until someone convinces you to not use this pattern)
987-65-432? (Reserved for ads! USE THIS!)

---

No. Any parameter can be skipped using null. Being last only allows not requiring entries when rest are defaults.

- Top100Songs requires 100 parameters.
- FavoriteSongs can have up to 100 parameters. One is required. 99 nulls are optional.

Parameter Object does not add much functionality or flexibility, often requires more code for limited benefits. Good for mostly defaults / few changes:
conf = new Config();
conf.setOption("X", 2);
mo = new MyObject(conf);

- Or when creating several Instances from same Configuration:
  conf = getRaceCarConfig();
  racecar1 = new Car(conf):
  racecar2 = new Car(conf);
  racecar3 = new Car(conf);
  is nicer than needing to explicitly specify all parameters for each car.

Modern Software Engineers overheard "long parameter list is bad" so abuse Parameter Objects. Long explicit function call with comment with full function signature avoids jump, usually better than a Parameter Object.

Business-wise: Every employee requires SSN, more important than name so I placed first. Data for NewEmployee is either mandatory, or belongs in sub-objects (Addresses, Spouses, Dependents, Skills, Equipment, etc.)

20250212b

---

No. Modern Software Engineer create and evangelize bad rules. Function parameters may have language-specific limits (255 in Java), fine if sensical. If no logical order exists, a Parameter Object may be better (adds jump, removes confusion).

Your examples: 0. orders = GetOrders(); // All is default.

1. account.import();
2. cart.add(productId, qty);
3. customer.setName(fullname);
   cust.setEmail(email); // email defaults address.
4. transaction.setOrder(order); //this method should not change other data. order can change if dtProcessed is not null?

CreateEmployee(id, nameFull, nameNick, nameLegal, idManager, jobTitle, salary, idlocation, office);

- Using Parameter Object may add more jumps checking Set function signatures, take longer than copying one signature, which forces correctness; id, 3 strings, id, string, currency, id, string. Validate lengths: nameNick < nameFull < NameLegal:
  "Paul Ercolino", "Paul", "Mr. Paul Ercolino, BSM"

Please stop suggesting rules.
Until you grok programming.
May not happen while believing these obscenities.

Suggests easy question to distinguish Modern Software Engineers from Real Software Developers:
What is maximum number of function parameters?
If given a small number, end call.

20240211

---

Software is Art: every work is unique. Masters intuitively use Minimum Required Complexity. I have system to only add a "jump" when the jump removes more complexity than added.

People are mistrained by a zillion "rules" called "Design Patterns" or nice acronyms, mostly bad.

Does your breaking sequential logic add or reduce complexity.

Modern Software Engineers overhear silly solutions to a specific problem, make a "rule", and misapply it everywhere.

- No maximum for function/method length. A 400-line block may be best. Code cut into 1-10 line blocks makes understanding near impossible. I jumped through 11 functions in 7 files, plus a dozen variable definitions calling constructors, with no block exceeding 6 lines, for code which should have been 3-4 lines if every action did not become another function to avoid comments.

- Does creating a function/method/class reduce complexity?
- What can be handled now, instead of creating a service to be called later?
- When creating a webpage, supply as much of the page as possible on first request. Yes, browsers have been modified to use 12 threads instead of the old limit 3, but each thread adds latency and processing so avoid.

This will be in my second book.

20240211

---

You are forcing Creatives to manage Development and Maintenance, three often mutually distinct skillsets/preferences. Smart companies understand Managers of New Product Development are rarely good Managers of Released Products. And hassling Creatives with managing anything is a good method to make certain they never ever make a suggestion which might lead to professional hell.

Do not force people to grow.

- You can ask if they want to remain involved with the idea, even allow them to be the Manager with help from an experienced Manager, but do not throw them in the deep end to check if they sink.

If the only method for communication is to appoint someone as Manager so others will listen... I have never encountered a culture that bad, so cannot suggest an easy fix.

I have been hired to fix bad cultures which sound better than this.

Maybe I missed something. Or you missed something in your description. I very much hope something was missed.

Or your creative people will quit scared. And your managers will quit because not allowed to manage. And your company...

20240209

---

When I started, "Programmer" did everything related to computers. Duties keep splitting; titles become specialized. Recently "Front-end Web Developers" split into "Ember Developers", "React Developers", "Angular Developers", etc. with only the first knowing how to program. Then "Developer" was replaced by "Software Engineer" to make imposters feel good.

I cannot imagine not doing everything needed to make every project completely successful. Merging my management, technicaln and other experience makes choosing a title difficult. I prefer either

- VP Software, or
- Senior Senior Lead Software Developer Architect Manager.

I fill all gaps. I already did all assigned roles. I mentor everyone, and encourage mentoring each other, so everyone ends knowing more and having more skills than when project started.

In my career, I heard "That's not my job" meaning "I will not do that" maybe 3 times, and immediately stopped assigning/expecting anything from the speaker.

I have heard, and even said a couple times, "That's not my job. Would you please explain how to do it, maybe take me through it once, so I can learn?" Usually works. One boss looked up and said, "Oh. I expected someone else."

20240208

---

git only causes problems for Devs on every Merge day (which git calls "Merge/Push Day" because "git merge" is just a local action). Devs are usually forced to rewrite code into a new branch. git is designed for distributed Open Source collaboration. git should never be used for professional corporate work. So if you dislike git like every other professional Software Developer, do not contribute to Open Source projects which use git. Stick to your paid work using "designed for corporate consolidation of code" Subversion.

20240207

---

As Software Developer, I rarely care about deployments. Admins prefer to deploy when usage is low, Friday evenings or just before holidays, so they can identify issues when least affects business. If something adversely affects their network or prevents business, they revert and yell at QA. Following the chain, QA will tell Devs to fix the problems before QA will cut another release.

As Network/Domain/System Architect or Manager, I supervise Admins and agree with their reasons. Never release anything on a Monday hoping no problems occur. Admins are very conservative, and will delay releases until they are comfortable. No feature could ever be important enough to require immediate release. Frequent releases ignoring Admin desires would be bad management causing bad morale in the people keeping the company running. Very bad.

The "business decision" is black or white. Either we release or not. And the decision is made by the Admins who probably require unanimous agreement; any Admin can stall/block a release if they have concerns.

If security problem happens, entire IT department failed. Devs should never create security problems. QA must pen test. Admins must know if a release affects security, immediately verify

20240207

---

First, Service is Class transferring serialized objects. Do not mix with data. Cat and Dog inherit from Pet class, includes birthdate, weight, color, fur length, minimum cage size, lastFed, issuesNoticed, etc. Cat adds LitterBox (size, lastCleaned, etc.) Dog adds friendliness (humans), socialization (other dogs), dangerousness (to anything alive), obedienceTraining, attackTraining, etc. Real Life is:

- Reservation system for kennel/cattery.
- Appointment system for veterinarians.
- Employee/student information system.

- Avoid tutorials.
- Avoid bad design.
- Imagine purpose of everything before designing, then improve it.
- Imagine purpose of all code seen, and improve it.
- Immediately fix bad design like "Service" actions in data objects. At most, data classes have specialized "serialize" functions. This can take some time. (A couple hours for me means normal programmers may need a week or two.) Top priority. Do not mention to nontechnical people (like your boss).

Try reading Java books instead of C# books. Expected caliber is much higher.

- For how OOP developed, learn C++ (after learning C to learn how machines think.) Then Java for first/bad solution to multiple inheritance problems, copied by C#.

20240206

---

Are most answerers not Real Programmers? Why would non-programmers bother answering technical questions?

If a program is just CPU processing waiting for single input, use a single thread.

If a program can continue processing while waiting for blocking inputs, put each blocking input on its own thread so the main thread can continue working.

The question is strangely worded to hide that it reverses good design. And misspelled "optimize". And "In Java" is irrelevant as this applies to every language/platform.

Will answering this correctly receive a Message requesting I accept work? I am available and seeking work.

Will those answering incorrectly receive a Message selling courses on programming?

20240205

---

I did not suggest "thread per request" is the only good design. I explained threads in the context of the Post referring to blocking inputs. Software design is Art with every project having different requirements needing different solutions.

I built a Web front-end to VMware virtual servers. The Network Manager insisted I treat everything as local, proud of his fiber channel backboard. When he used production credentials, the page was loading status of hundreds servers. After 30 seconds, I suggested I modify the design to show something, anything. Finally finished loading at 50 seconds. He was ecstatic because my default sorting showed 8 servers needing attention, with only one from the critical list currently checked more frequently than hourly. In less than a minute, he had better information than what he was getting from having 24/7 human monitoring.

- I multithreaded data collection because I naturally avoid blocking input from blocking processing. I did not multithread the output. In the Dev environment with 40 virtual servers running on nearby machines, the page loaded in a blink. 400+ virtual servers running on many machines in a huge NOC took longer. Audience was only a few people.

20240206

---

You have bad management/bad process. As professional programmer, you write and alpha test your code. Nobody should "review" your commit\*. QA tests potential releases to prevent "mistakes". If QA passed a release which upset customers, QA must get better. A "mistake" is sent back to Dev to be fixed before next potential release.

In my system, a programmer who solved similar problem works with the programmer working on current problem. The "master" probably reads code before commit, but not required. Formal code reviews are evil in professional software development environments.

Academic systems instill counter-productive attitudes. In real world, people should/must collaborate, called "cheating" by teachers. In real world, continue working until results are accepted; teachers grade only first attempt.

In real world, we have processes to catch "mistakes" before customers notice.

Except your department missed the memo. What happened to you is not be possible in a professional software writers department. I am sorry your first job is such a mess. I hope your next job is better.

- Commit means contributing to Dev trunk. If you unfortunately use git, replace with Add/Commit/Push and probably merging branches.

20240205

---

I have written code professionally for decades on over 500 large applications. I do not care about "the market". I love JavaScript, one of the most flexible powerful languages despite being despised as "front-end scripting" by my fellow Real Programmers. I learned HTML and CSS as soon as they became useful; I was amazed other professional software writers with a decade of experience could not read HTML.

I was well-known as a guru on many technical topics. I am not an "influencer"; I avoid social networks, and have only 1600 Followers on LinkedIn.

I have publicized my path to becoming a Real Software Developer, will be in third book.

I never offered free chats. I responded to all Messages. I had weekly phone calls with one LinkedIn Friend.

You must write software you care about, because you want it, or someone is paying for it. Do not repeat what others already built.

My LinkedIn is probably terrible.

Imposters feeling like imposters is good, makes them quit and stop harming software and society. Real Programmers never feel like imposters.

My advice will help with everything except finding work. People call me when they need great software delivered quickly. I have never found a job by job hunting.

20240205

---

This misleads. Top Software Developers need 4-5 languages and telepathy.

The languages are Lisp, SQL, C, and JavaScript. Add a popular middleware like Java or Python to get hired.

Need telepathy to understand what business people need.

For Front-end, study usability, but can wait as most companies will insist Marketing makes applications pretty instead of usable.

While advancing to Architect, will become Manager of others. Telepathy teaches treating subordinates with respect (or they get unhappy giving us a headache.) Respecting subordinates means allowing them to do the work (delegation) without micromanagement ('Agile").

Complete path to becoming a great Software Developer Architect: 0. Start as a telepathic genius.

1. Learn 4-5 programming languages.
2. Get a job to experience what works with business and humans.
3. Great software!

20240202

---

History of Java: Vector and Hashtable were the original implementations of List and Map, synchronized because safest. Java 1.2 added the incredible Collections framework, removing standard bulky synchronization since most objects are used in a single thread, adding the Collections.synchronized...() methods for objects shared by multiple threads.

- Java 1.3 fixed performance so Java won the Perl/Python war. Microsoft refused to update Microsoft Internet Explorer so Java Applets were stuck using Java 1.1.
- Multithreading was painful until Java 1.5 added new Collection classes able to trigger new threads. Which went unnoticed as everyone was distracted by Oracle buying Sun. The perceived need for better multithreading scalability to replace disgraced Ruby led to introduction/popularity of Scala until the next Java release made everyone realize Java already solved those problems.

Vector and Hashtable were updated to fit into Java 1.2"s Collection framework, remained safe across multiple threads (synchronized) for backwards compatibility. Easier and possibly better to use Vector when needing a synchronized List. Hashtable can be used as synchronized Map although ConcurrentHashMap is recommended.

20240128

---

Lew Bloch We Real Programmers write precisely. A variable varies. A constant never varies.

- In C, constant cannot exist with directly accessible memory thus can always be changed.
- In Java, memory must be accessed through language structures. Protect from changes with keyword "final". Better "static final" for constants not varying between instances.
- 2015 JavaScript added "const" keyword while also adding block scope so named constant in one block may not have same value as same named constant in a different block.

"oxymoron" means self-contradictory term, usually where the term makes sense in context. "Varying constants" makes sense for named constants which may have different values in different scopes. Constant variable does not exist anywhere, suggests a variable which locks value at later time. Sounds like FP where named values are typically constants created by a function which may not return the same value every time.

I could have used "nonsense", "impossible", or other adjectives. Using "oxymoron" adds not-so-hidden connotation that the writer is a moron.

Funny because writer is missing standard Programmer attributes (detail-focused, logical, precise) while discussing programming.

20240127b

Lew Bloch Please find any definition of variable which does not expect change. In programming, a variable is a named address to memory which may change value during runtime. The difficulty of creating a constant, an address to a block of memory which cannot change, is figuring how to protect a block from being charged. Impossible without Managed Memory.

If you do find a definition of "constants" which can change (not in black hat instructions for exceeding memory address limitations to overwrite allegedly inaccessible data), discard the source.

20240127c

---

Specify a database platform in introduction. Using PostgreSQL, creating INDEX is usually pointless or bad. Almost every column has automatic standard index, and PostgreSQL automatically merges multiple column indexes, so a manually-created INDEX for "id" field will be ignored. For most other databases, adding an INDEX can improve performance Using Microsoft SQL Server, always create an INDEX for every statement, even if statement will only run once, because faster to create an INDEX and run statement than just run any statement without an INDEX.

The INCLUDE keyword is only useful because Microsoft SQL Server is terribly slow. I was horrified that PostgreSQL implemented INCLUDE keyword, which should have been added as syntactic sugar for easier upgrading from Microsoft SQL Server to PostgreSQL without doing anything. INCLUDE should have no effect (or possibly negative effect) on performance.

Your advice only applies to Microsofties, which should be stated in introduction, so DBA using real RDBMS are not confused by bad advice for their platforms.

20240125

---

Beginner Programmers learn about databases and are certain we can make it simpler. We created what are now called ORM; now we install Hibernate. We create a few applications. Then we discard our ORM and return to writing SQL.

Simple operations handled simply with ORM are simple to implement with SQL. Much cannot be done with ORM, but now ORM is "protecting" the database so we cannot use SQL, must very inefficiently handle data manipulation in our middleware code. Congratulations on mixing data interactions with business logic.

Most ORM try to standardize databases, losing the many advantages of PostgreSQL, resulting in combining worst of both Microsoft SQL Server and MySQL.

As you scale, you scale your databases and now must also scale the ORM servers. More hardware. More lag.

Adopting ORM happens when a nontechnical executive is allowed to specify technical specifications based on buzzwords in news. Any Programmer\* experienced enough to accept an Architect role has already learned to avoid ORM.

- 1. Not Microsofties who create easiest-to-remove bugs using Entity Framework. After their team spends months failing to solve, remove EF.

2. Not Modern Software Engineers who have no useful technical skills.

20240125

---

I keep waiting for a company to ask about Coding Assessments, and only accept candidates who refuse, wanting Real Programmers (incapable of memorizing useless algorithms) with enough self-regard to not submit to torture (HR hates highly paid weirdos and wants to hurt us.)

Everyone knows current Coding Assessments indicate people most unlikely to be useful. Hiring Process should never include writing code.

We could easily use Assessments to select competent programmers. Last time I was hired with a process which included an Assessment, had a take-home test. Hiring Manager admitted he knew he was hiring me before reading my code because I added comments stating purpose of the function, and described a critical bug. I wrote a couple lines of code as solution, and provided alternate code to fix the bug. He said recognizing the real world purpose of the code was enough to get hired. Several senior developers wrote/approved their less understandable 12-line comparison solution, without noticing the bug.

If Hiring Manager cannot judge caliber from conversation, process could include explaining code, maybe find logic (not syntax) problems in pseudocode.

"A programmer without a manual is lost." - Paul Ercolino, 1989

20240122

---

Hajime Yamasaki Vukelic New generation are Modern Software Engineers who only know what they were taught, need classes for every specific topic: new language syntax, new language as middleware, new language connect to database, etc. A new platform requires investing years to return to their standard incompetence.

Real Software Developers enjoy new languages. An hour studying syntax transfers all experience to new platform.

Marcin Kaluza, Srđan Đorđević Lower ages = shorter careers = less time to learn. Modern Software Engineers need 3 years to pretend to use a new language. If total career is a decade, learning one new platform takes one-third of career. Learning a third platform is impossible before career ends, so they must be very careful choosing their one addition.

Real Software Developers do not worry. I used at least 30 languages during my first year as a full-time professional programmer, double what I knew when hired. (I used many as amateur, student, and part-time consultant and was granted "Senior" by end of my second month.)

Imposters cannot have Imposter Syndrome.

Giles Jones You (and most Commenters) are Real Software Developers. We cannot understand the effort and stress of faking skills for years.

20240121

---

I distinguish between Leaders and Managers. Leaders have Followers. Managers have Employees Leaders must attain and motivate Followers. Employees are motivated by money. Managers acquire, protect, and apply resources.The point of your Post is that Managers not protecting subordinates can cause Employees to decide the money is not enough motivation to continue working.

The skills for Leaders and Managers are similar but different: How to acquire resources. How to retain resources. How to apply resources.

- If you have difficulty understanding, think about effective religious or political Leaders, compare with people in your job's chain of command.

People incorrectly telling Managers/Executives that they are Leaders are selling something.

I have BS Management and many years working at every professional level from grunt, to Manager of large teams, to CTO (and president of my own companies). I am also detail-oriented programmer: every character and term must be exact, precise, and correct.

20240118

---
