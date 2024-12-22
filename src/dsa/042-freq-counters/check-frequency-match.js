/**
 * 
 * Task: Write a function to check if two arrays have the same frequency of squared values.

Input: [1, 2, 3], [1, 4, 9]

Output: true

Input: [1, 2, 3], [1, 9]

Output: false
 */

function checkFrequencyMatch(arr1, arr2) {
  let counter1 = {};
  let counter2 = {};

  for (let i of arr1) {
    counter1[i] = (counter1[i] || 0) + 1;
  }

  for (let i of arr2) {
    counter2[i] = (counter2[i] || 0) + 1;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i of arr1) {
    if (counter1[i] * counter1[i] === counter2[i]) {
      return true;
    }
  }
  return false;
}

console.log(checkFrequencyMatch([1, 2, 3], [1, 4, 9]));
console.log(checkFrequencyMatch([1, 2, 3], [1, 9]));
