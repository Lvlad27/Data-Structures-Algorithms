/**
 * Task: Given an array, find the most frequent element.

* Input: [1, 2, 3, 1, 2, 1]
* Output: 1

* Approach: Use a frequency counter to count occurrences and determine the element with the highest count.
*/

function checkFrequency(arr) {
  let counter = {};
  for (let i of arr) {
    counter[i] = (counter[i] || 0) + 1;
  }

  console.log(Math.max(...Object.values(counter)));
  return counter;
}

console.log(checkFrequency([1, 2, 3, 1, 2, 1]));
