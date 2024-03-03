/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

repeatStringNumTimes("*", 3) should return the string ***.
repeatStringNumTimes("abc", 3) should return the string abcabcabc.
repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
repeatStringNumTimes("abc", 1) should return the string abc.
repeatStringNumTimes("*", 8) should return the string ********.
repeatStringNumTimes("abc", -2) should return an empty string ("").
The built-in repeat() method should not be used.
repeatStringNumTimes("abc", 0) should return "".
*/

function repeatStringNumTimes(str, num) {
  let arr = str.split();
  let newArr = [];
    while (num > 0) {
        newArr.push(...arr);
        num --;
      }
  newArr = newArr.join(""); 
  console.log(newArr); 
  return newArr;
}


repeatStringNumTimes("abc", 3);





/*
Approach #1: Repeat a String with a While Loop

A while statement executes its statement as long as a specified condition evaluates to true.

A while statement looks like this:

while (condition)
  statement

with a condition which is evaluated before each pass through the loop. If the condition is true, the statement is executed. If the condition is false, the execution continues with any statement after the while loop.

The statement is executed as long as the condition is true. Here’s the solution:


function repeatStringNumTimes(string, times) {
  // Step 1. Create an empty string that will host the repeated string
  var repeatedString = "";

  // Step 2. Set the While loop with (times > 0) as the condition to check
  while (times > 0) { // As long as times is greater than 0, the statement is executed
    // The statement
    repeatedString += string; // Same as repeatedString = repeatedString + string;
    times--; // Same as times = times - 1;
  }
  /* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */
  
  // Step 3. Return the repeated string
  return repeatedString; // "abcabcabc"
}

repeatStringNumTimes("abc", 3);

And again, without comments:

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);






Approach #2: Repeat a String using a Conditional and Recursion

Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. There are a few key features of recursion that must be included in order for it to work properly.

    The first is a base case: this is a statement, usually within a conditional clause like if, that stops the recursion.
    The second is a recursive case: this is the statement where the recursive function is called on itself.

Here’s the solution:

function repeatStringNumTimes(string, times) {
  // Step 1. Check if times is negative and return an empty string if true
  if (times < 0) {
    return "";
  }
  
  // Step 2. Check if times equals to 1 and return the string itself if it's the case.
  if (times === 1) {
    return string;
  }
  
  // Step 3. Use recursion
  else {
    return string + repeatStringNumTimes(string, times - 1); // return "abcabcabc";
  }
  /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
                     times       string + repeatStringNumTimes(string, times - 1)
      1st call         3                 "abc" + ("abc", 3 - 1)
      2nd call         2                 "abc" + ("abc", 2 - 1)
      3rd call         1                 "abc" => if (times === 1) return string;
      4th call         0                  ""   => if (times <= 0) return "";
    Second part of the recursion method
      4th call will return      ""
      3rd call will return     "abc"
      2nd call will return     "abc"
      1st call will return     "abc"
    The final call is a concatenation of all the strings
    return "abc" + "abc" + "abc"; // return "abcabcabc";
  */
}
repeatStringNumTimes("abc", 3);

And again, without comments:

function repeatStringNumTimes(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumTimes("abc", 3);






Approach #3: Repeat a String using ES6 repeat() method

For this solution, you’ll use the String.prototype.repeat() method:

    The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

Here’s the solution:


function repeatStringNumTimes(string, times) {
  //Step 1. If times is positive, return the repeated string
  if (times > 0) { // (3 > 0) => true
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  
  //Step 2. Else if times is negative, return an empty string if true
  else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);

And again, without comments:

function repeatStringNumTimes(string, times) {
  if (times > 0)
    return string.repeat(times);
  else
    return "";
}
repeatStringNumTimes("abc", 3);

You can use a ternary operator as a shortcut for the if/else statement, like this:

times > 0 ? string.repeat(times) : "";

This can be read as:

if (times > 0) {    
    return string.repeat(times);
} else {
    return "";
}
