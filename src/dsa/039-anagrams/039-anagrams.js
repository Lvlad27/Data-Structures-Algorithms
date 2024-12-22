/**
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another.
 */

/**
 * * First Iteration
 */

// function validAnagram(str1, str2) {
//   if (typeof str1 !== "string" || typeof str2 !== "string") {
//     return false;
//   }
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

/**
 * * Second Iteration
 */

function validAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let val of str1) {
    let letter = val;
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let val of str2) {
    let letter = val;
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");

module.exports = validAnagram;

/**
 * Understand the problem
 *
 * 1. Can I restate the problem in my own words?
 * 2. What are the inputs?
 * The inputs are two string parameters. If they are not strings, return false.
 * 3. What are the outputs?
 * The output is a boolean
 * 4. Can the outputs be determined from the inputs?
 * Yes
 * 5. How should I label the important pieces of data that are part of the problem?
 *
 * Explore examples
 *
 * 1. simple => complex => empty => invalid
 *
 * Break it down
 *
 * Look back and refactor
 *
 */
