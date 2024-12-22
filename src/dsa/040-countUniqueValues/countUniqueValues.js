function countUniqueValues(arr) {
  let count = 1;
  let left = 0;
  let right = 0;

  if (arr.length === 0) {
    return 0;
  }

  while (arr[right] !== undefined) {
    console.log("while loop started");
    console.log("arr[right]", arr[right]);

    right = left + 1;
    if (arr[left] === arr[right]) {
      console.log("count", count);
      count += 1;
    } else {
      console.log("left", left);
      left += 1;
    }
  }
  return count;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

module.exports = countUniqueValues;

/**
 * UNDERSTAND THE PROBLEM
 * 1. Can I restate the problem in my own words?
 * * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 * 2. What are the inputs?
 * 3. What are the outputs?
 * 4. Can the outputs be determined from the inputs? (Do I have enough information to solve the problem?)
 *
 * EXPLORE EXAMPLES
 * 1. Start with simple examples.
 * 2. Progress to make more complex examples.
 * 3. Explore examples with empty inputs.
 * 4. Explore examples with invalid inputs.
 *
 * BREAKDOWN
 * 1. Explicitly write out the steps you need to take. (basic)
 * 2. Solve a simpler problem if you can't solve the actual problem.
 * 3. Find the core difficulty in what you're trying to do. Temporarily ignore that difficulty and then incorporate that difficulty back in.
 *
 * LOOK BACK AND REFACTOR
 * 1. Can you check the result?
 * 2. Can you derive the result differently?
 * 3. Can you understand it at a glance?
 * 4. Can you use the result or method for some other problem?
 * 5. Can you improve the performance of your solution?
 * 6. Can you think of other ways to refactor?
 * 7. How have other people solved the problem?
 */
