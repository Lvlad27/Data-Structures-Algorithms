;; Output
(defun hello-world ()
    (format t "Hello World!"))

(hello-world)

;; Input
(defvar *name* "Global Lvlad")

(defun hello ()
  (format t *name*))

(hello)

(defun hello-2 (name)
  (format t name))

(hello-2 "Function input Lvlad")

(let ((local-name "Local Lvlad"))
  (hello-2 local-name))

(defun prompt-read (prompt)
  (format *query-io* "~a: " prompt)
  (force-output *query-io*)
  (read-line *query-io*))

(defun name()
  (prompt-read "What is your name?"))

(name)







