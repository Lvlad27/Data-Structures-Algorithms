# How to learn programming

## Learn 5 Programming Basics:

### 1. Output

Print "Hello, World!"

### 2. Input

Ask for a name, then greet with "Hello, [Name]."

- Storing values is part of input.

### 3. Branching

Get a number and check if it's greater or less than 50

### 4. Loops

Get a number and count from 1 to that number

### 5. Everything else. Building interesting programs

- Repeat I/O with: files, PostgreSQL, http.
- Organize code into reusable blocks, multiple files, or libraries.

### Next Steps

- Start reading code: look at existing projects, sample programs, or even Wikipedia pages. Then, read manual.
- Learn standard coding conventions, but avoid unnecessary ones.
- Don’t copy code, follow tutorials or rely on external libraries.
- Real programmers don't watch videos to learn programming.

## How To Design Software

1. Write down what you want new software to do.
2. Draw (on paper) each screen where actions can happen. Try to combine screens.
3. Collect all data to be saved for all those screens: Every field on every form. Every status which changes to determine which screen is shown next. Access control fields like who can do each possible step.
4. Sanely normalize data into database tables. Build database.
5. Create screens on computer, probably HTML/CSS. No code.
6. Build monolithic middleware program to handle all business logic while moving data between backend and Front-end. Can be spaghetti code. Like first draft of a novel, purpose is to record all ideas.
7. Organize your code. Move reused code into Functions. Group data into Structs. Move Functions working on a single Struct into the Struct to become Class.
8. Improve backend performance. Move transactional database actions into database. Move other data actions into database if improves performance.
9. Improve Front-end. Add client middleware to smooth experience, such as entering a field updates other options.

The more applications you design, the closer your first attempt at new software will be to "good". Like novels, needs three:

1. Your first product not being horrible is mostly luck.
2. Second is when you realize the first was only usable due to luck, so you study the basics, often after choosing suboptimal option.
3. Third is applying the basics from the start, produce something good while carefully thinking about every detail.
4. Fourth is end of steep learning curve. Have enough experience to produce good results in reasonable time. Will continue to slowly improve as you solve more different problems.
