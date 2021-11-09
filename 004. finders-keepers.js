/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/

// METHOD 1
function findElement(arr, func) {
  // let num = 0;
  let result = arr.filter(num => num % 2 === 0)
    for (let i = 0; i < arr.length; i++) {  
      return result[i];
    }
    console.log(result);
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));

// METHOD 2
function frankenSplice(arr1, arr2, n) {
  let arrCopy = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    arrCopy.splice(n, 0, arr1[i]);
    n++;
  }
  
  return arrCopy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));