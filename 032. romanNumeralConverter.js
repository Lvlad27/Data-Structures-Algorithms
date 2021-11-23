'use strict';

function convertToRoman(num) {
  const numArr = () => Array.from(String(num), Number);

  const decomp = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let nr = arr[i] * Math.pow(10, arr.length - 1 - i);
      newArr.push(nr);
    }
    return newArr;
  };

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    D: 100,
    M: 1000,
  };

  console.log(numArr(num));
  console.log(decomp(numArr()));

  return num;
}

convertToRoman(3999);
