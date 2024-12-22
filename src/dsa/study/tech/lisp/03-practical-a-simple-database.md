# Project Example: Creating a database for CDs to track which ones to rip into MP3s

- **Record Contents**: Title, Artist, User Rating, Rip Status (whether the CD has been ripped).

- **Data Structures**: Starts with simple lists for representing a single CD record.

  - Introduces _property lists (plists)_ as a more convenient structure, where each element pairs a keyword symbol (e.g., :title) with its value, facilitating easy access and manipulation.
  - **Keywords**: Symbols starting with a colon (e.g., :foo), used for naming fields in the CD database.

- **Functions Introduced**:

  - **LIST**: For creating lists and plists.
    ```
    CL-USER> (list :a 1 :b 2 :c 3)
    (:A 1 :B 2 :C 3)
    ```
  - **GETF**: For retrieving the value associated with a keyword in a plist, essentially acting as a simple way to access record fields.

    ```
    CL-USER> (getf (list :a 1 :b 2 :c 3) :a)
    1
    CL-USER> (getf (list :a 1 :b 2 :c 3) :c)
    3
    ```

  - **DEFUN**: For defining a new function

    ```
    (defun make-cd (title artist rating ripped)
    (list :title title :artist artist :rating rating :ripped ripped))
    ```

  - **PUSH**: macro that adds to the global variable

    `(defun add-record (cd) (push cd *db*))`
