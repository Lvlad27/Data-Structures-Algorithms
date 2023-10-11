function countUniqueValues(arr) {
  let count = 1;
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) {
    return 0;
  }

  while (left < right) {
    if (arr[left] === arr[right]) {
      count++;
    } else if ()
  }

  return count;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

module.exports = countUniqueValues;

/**
 * Can I restate the problem in my own words?
 * 
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 * 
 * 
 * BREAKDOWN
 *
 * 1.
 */
