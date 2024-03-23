;;;; mp3.lisp - A Simple Database

; define global variable *db* with the DEFVAR macro. * are naming conventions for global variables
(defvar *db* nil)

;;; Function: make-cd
;;; 
;;; Arguments: 
;;;   title (string) - The CD title.
;;;   artist (string) - The artist's name.
;;;   rating (numeric) - The CD's rating.
;;;   ripped (boolean) - TRUE if the CD has been digitally copied, FALSE otherwise.
;;; 
;;; Returns:
;;;   A PLIST representing the CD with key-value pairs for each attribute.
;;; 
;;; Usage example: (make-cd "The Rise and Fall of Ziggy Stardust" "David Bowie" 5 t)
(defun make-cd (title artist rating ripped)
  (list :title title :artist artist :rating rating :ripped ripped))

;;; push adds to the db variable
(defun add-record (cd)
  (push cd *db*))

#|
  Looping through the database: The DOLIST part of the function goes through each item in *db* one by one. Each item (or CD) is temporarily named cd inside the loop, so we can work with it.

  Printing each CD's details: For each cd, the function prints its details using FORMAT, a powerful function for turning data into readable text.

  FORMAT is a bit like a Swiss Army knife for creating text from data. You tell it what you want the output to look like by giving it a string with special symbols, and it does the rest. 

    Where to print: The first argument, t, tells FORMAT to print to the screen.
    What to print: The second argument is a pattern that FORMAT uses to turn your data into text. This pattern can include:
      - Text you want to print exactly as is.
      - Directives, which are special commands that start with ~, telling FORMAT how to handle the data.

    Directives Explained
      ~a: This is the aesthetic directive. It takes whatever data you give it and tries to make it look nice as text. For example, it will turn the symbol :title into just "TITLE" and a string "Dixie Chicks" into just "Dixie Chicks".

      ~t and ~10t: These are about spacing. ~t is for tabulating, or moving over to a certain spot. ~10t says, "move over so the next thing you print starts at the 10th space."

      ~{ and ~}: This pair tells FORMAT to expect a list of things to print next, and it will repeat the pattern between ~{ and ~} for each item in the list. In dump-db, it repeats for each keyword-value pair in a CD's details.

      ~%: This simply means "start a new line." It's like pressing "Enter" in a text document.
|#
(defun dump-db ()
  (dolist (cd *db*)
    (format t "~{~a:~10t~a~%~}~%" cd)))

#|
  The prompt-read function asks the user a question and waits for their input. Here’s how it works, simplified:

  Shows the Question: It uses format to display a prompt (like "Enter your name") to the user, without moving to a new line thanks to the absence of ~% in the format string.

    => *query-io* is a global variable (which you can tell because of the * naming convention for global variables) that contains the input stream connected to the terminal.

  Ensures Prompt Visibility: force-output makes sure the question is displayed immediately, not delayed by the system's output buffering.

  Gets the Answer: It waits for the user to type something and press Enter, using read-line to read the input.

  Returns the Answer: The user's input, captured by read-line, is returned by the function, allowing the program to use it.

  #|
    System's output buffering refers to a temporary holding area in the computer's memory where output data is stored before being sent to the output device, such as a screen, file, or printer. When a program prints something, instead of sending each character directly to the screen, which can be slow and inefficient, the data is first collected (buffered) and then written out in larger chunks. This process improves performance by reducing the number of operations required to display the output.

    However, this efficiency comes with a trade-off. Because the data is buffered, what you intended to print might not appear on the screen immediately. It waits in the buffer until there's enough data to send as a chunk, or until the buffer is explicitly flushed (forced to send out its contents), even if it's not full.

    In the context of interactive applications, like when a program asks for user input, this delay can be confusing because the prompt may not appear right away. The force-output function is used to manually flush the buffer, ensuring that any buffered data (like the prompt message) is immediately displayed to the user. This way, the user sees the prompt without delay and knows to enter their response.
 |#
|#
(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

#|
  This line needs explanation: 
    (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)

  Asking for Rating: PROMPT-READ to ask the user for a rating.

  Converting to Integer: Since the rating should be a number, you use PARSE-INTEGER to try and convert the user's text input into a number.

  Dealing with Non-numeric Input: If the user types something that's not a number, PARSE-INTEGER could get confused. To prevent an error, add :junk-allowed t which tells PARSE-INTEGER to be okay with non-numeric stuff and just ignore it.

  Handling Non-numeric Responses Gracefully: If PARSE-INTEGER can't make a number out of the input, it gives back NIL (Lisp's version of "nothing"). You use or to say "if PARSE-INTEGER gives me NIL, just use 0 instead." This way, every CD gets a rating, even if the user's response doesn't make sense as a number.
|#
(defun prompt-for-cd ()
  (make-cd
    (prompt-read "Title")
    (prompt-read "Artist")
    (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
    (y-or-n-p "Ripped [y/n]: ")))

(defun add-cds ()
  (loop (add-record (prompt-for-cd))
        (if (not (y-or-n-p "Another? [y/n]: "))(return))))

#|
  Saving Your CD Collection
  To solve this, you write a save-db function in Lisp. Its job is to take your list of CDs and save it to a file on your computer. Here’s how it works:

    Choosing a File: You tell save-db where to save your collection by giving it a file name, like "my-cds.db".

    Opening the File: Lisp needs to open this file to write your collection into it. WITH-OPEN-FILE is a tool that Lisp uses to safely open the file, write your CD collection into it, and then make sure the file gets closed properly, even if something goes wrong during the writing process.

    :direction :output tells Lisp, "We want to write to this file, not read from it."
    :if-exists :supersede means "If there’s already a file with this name, just replace it with the new one."
    
    Writing the Collection: Once the file is open, save-db uses print to write your entire CD collection into the file. print is special because it saves the collection in a way that Lisp can read it back later, just like you'd write it in Lisp code yourself.

    Closing the File: After saving, Lisp closes the file automatically, thanks to WITH-OPEN-FILE. This ensures your data is safe and the file is not left open accidentally.

    Why Use WITH-STANDARD-IO-SYNTAX?
    This part makes sure that when Lisp writes your collection to the file, it does so in a "standard" way that Lisp will understand when reading it back. Think of it as making sure Lisp writes in clear, proper sentences, so it can read those sentences later without any confusion.

    Example
    If you use Unix (like Linux or macOS), you can save your collection with:

    (save-db "~/my-cds.db")
    And if you're on Windows, you might use:

    (save-db "c:/my-cds.db")
    After saving, you can open "my-cds.db" with any text editor, and you'll see your CD collection written in Lisp's way of noting lists and details, ready to be loaded back into Lisp whenever you need it.
|#
(defun save-db (filename)
  (with-open-file (out filename
                  :direction :output
                  :if-exists :supersede)
    (with-standard-io-syntax
      (print *db* out))))

#|
  Opening the File: Just like saving, you need to open the file to get your collection back. This time, Lisp opens the file in "read" mode because you're going to read from it, not write to it. By default, WITH-OPEN-FILE opens files in read mode, so you don't need to specify this.

  Reading Your Collection: With the file open, load-db uses the read function to take your saved collection out of the file. read is smart and can understand the Lisp way of writing things down, so it reads the collection exactly as you saved it.

  Putting the Collection Back: Once read has your collection, load-db uses SETF to store it back into the *db* variable. This is like taking the CDs out of your diary and putting them back on your virtual shelf in Lisp.

  Being Careful: One important note is that load-db replaces anything that was in *db* before. If you added new CDs to your collection in Lisp but didn't save them before loading, those new additions will be lost. It's like erasing your virtual shelf and replacing it with what's in your diary.
|#
(defun load-db (filename)
  (with-open-file (in filename)
    (with-standard-io-syntax
      (setf *db* (read in)))))

(defun select-by-artist (artist)
  (remove-if-not 
      #'(lambda (cd) (equal (getf cd :artist) artist))
    *db*))

(defun select (selector-fn) (remove-if-not selector-fn *db*))

(defun artist-selector (artist)
  #'(lambda (cd) (equal (getf cd :artist) artist)))