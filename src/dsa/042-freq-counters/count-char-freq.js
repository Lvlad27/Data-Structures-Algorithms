/**
 * Exercise 1: Count Character Frequency
 * Task: Write a function that counts the frequency of each character in a string.
 *
 * Input: "hello"
 * Output: { h: 1, e: 1, l: 2, o: 1 }
 *
 * Approach: Use a frequency counter (an object or map) to keep track of each character's count.
 */

export function countCharFreq(str) {
  let counter = {};

  for (let char of str) {
    counter[char] = (counter[char] || 0) + 1;
  }

  return counter;
}

countCharFreq("hello");
