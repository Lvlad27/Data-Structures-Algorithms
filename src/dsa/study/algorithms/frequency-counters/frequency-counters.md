# Frequency Counters

**Frequency counters** are a pattern often used in programming to solve problems that involve counting occurrences of elements in a collection, like numbers in an array or characters in a string. This technique helps efficiently handle problems related to comparison, finding duplicates, or understanding the frequency of items.

## What is a Frequency Counter?

A frequency counter is essentially an object (or a map) that tracks the occurrences of each element in a collection. Instead of comparing elements directly against each other repeatedly, which can be inefficient, we count occurrences in one pass and then analyze those counts.

```js
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let counter1 = {};
  let counter2 = {};

  // Count frequency of characters in the first string
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  // Count frequency of characters in the second string
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  // Compare the two counters
  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "billion")); // false
```

_Explanation for this line:_

```js
counter1[char] = (counter1[char] || 0) + 1;
```

The count starts at 1 because the element has just been seen once—this is the first time it’s being added to the counter.
If you were to start at 0, it would imply the element hasn't been seen yet, which contradicts the current observation.

For subsequent encounters of the element, you simply increment the existing count.
This ensures accurate tracking of the frequency without missing the initial occurrence.

## Use cases

- avoids the need for nested loops
- count the frequency of distinct items in the dataset and then performs some sort of comparison or operation on those frequencies.
- done using objects (or Maps) when the keys are the distinct items in the dataset, and the values their corresponding counts.
