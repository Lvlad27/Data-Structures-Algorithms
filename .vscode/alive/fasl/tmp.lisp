;; Output
(defun hello-world ()
    (format t "~a~%" "Hello World!"))

(hello-world)

;; Input
(defvar *name* "Global Lvlad")

(defun hello ()
  (format t "~a~%" *name*))

(hello)

(defun hello-2 (name)
  (format t "~a~%" name))

(hello-2 "Function input Lvlad")

(let ((local-name "Local Lvlad"))
  (hello-2 local-name))

(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (format t "Hello, ~a!~%" 
  (read-line *query-io*)))

(defun name()
  (prompt-read "What is your name?"))

(name)

;; Branch
(defun enter-number()
  (let ((input (or (parse-integer (prompt-read "Enter a number: ") :junk-allowed t) 0))))
  (cond
   (< input 50) (format t "~a~% Input is less than" input)
   (> input 50) (format t "~a~% Input is greater than" input)
   format t "~a~% Input is " 50))







