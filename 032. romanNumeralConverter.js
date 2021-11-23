'use strict';

function convertToRoman(num) {
  // Step 1. Convert input number into an array.
  const numArr = () => Array.from(String(num), Number);

  // Step 2. Return the corresponding base 10 decomposition as an array.
  const decomp = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let nr = arr[i] * Math.pow(10, arr.length - 1 - i);
      newArr.push(nr);
    }
    return newArr;
  };

  // Step 3. Redefine input 'num' as an array of the base 10 input decomposition.
  num = decomp(numArr(num)); //

  // Step 4. Define key-value pairs of roman symbols and corresponding integers as an object.
  const roman = {
    I: 1,
    II: 3,
    III: 4,
    IV: 5,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
  };

  // Step 5. Convert a given array of base 10 integers into an array of corresponding roman symbols.
  const converter = arr => {
    // This function finds a key in an object based on the corresponding value. In our case the corresponding value will be an element of num.
    function getKeybyValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    let convertedNum = [];
    for (let i = 0; i < arr.length; i++) {
      convertedNum.push(getKeybyValue(roman, arr[i]));
    }
    return convertedNum;
  };

  num = converter();

  console.log(converter(num));
  console.log(converter(decomp(numArr())));

  return num;
}

convertToRoman(649);
