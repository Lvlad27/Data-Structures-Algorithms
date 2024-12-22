/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

// MY METHOD

function uniteUnique(arr) {
  // Create an empty array in which we merge all the values from the input arrays.
  let mergedArr = [];
  // Loop through all of the input arrays
  for (let i = 0; i < arguments.length; i++) {
    // Merge all the values
    mergedArr = mergedArr.concat(arguments[i]);
  }
  // Remove all duplicates from the array and assign them to a new final array.
  let finalArr = [...new Set(mergedArr)];
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
METHOD 2
function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);
  
    // create a Set which clears any duplicates since it's a regular set and not a multiset
    return [...new Set(flatArray)];
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  
METHOD 3 (best)
  function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}

// Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())]

*/
