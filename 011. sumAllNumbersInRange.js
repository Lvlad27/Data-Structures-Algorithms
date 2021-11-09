/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.
*/

// METHOD 1
function sumAll(arr) {
    //sort numbers in the array
    let sortArr = arr.sort((a, b) => a - b);
  
    //populate new array with numbers between those in the sorted array
    let lowEnd = sortArr[0];
    let highEnd = sortArr[arr.length - 1];
    let popArr = [];
    while (lowEnd <= highEnd) {
      popArr.push(lowEnd++);
    }
    console.log(popArr);
  
    //calculate the sum between all the elements in the populated array
    let sum = popArr.reduce((x, y) => x + y, 0);
  
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([1, 10]));
  console.log(sumAll([10, 1]));


/* METHOD 2
  const sumAll = arr => {
    // Buckle up everything to one!
    const startNum = arr[0];
    const endNum = arr[1];
  
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
  
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
*/
