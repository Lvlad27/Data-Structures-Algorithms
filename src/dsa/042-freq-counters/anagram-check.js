/*
* Task: Write a function to check if two strings are anagrams of each other (contain the same characters in any order).

* Input: "listen", "silent"
* Output: true

* Input: "hello", "world"
* Output: false

* Approach: Count the frequency of characters in both strings and compare.
*/

export function anagramChecker(str1, str2) {
  let counter1 = {};
  let counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  console.log(counter1);
  console.log(counter2);

  for (let char of str1) {
    if (counter1[char] === counter2[char]) {
      return true;
    }
    return false;
  }
}

console.log(anagramChecker("listen", "silent"));
console.log(anagramChecker("hello", "world"));
