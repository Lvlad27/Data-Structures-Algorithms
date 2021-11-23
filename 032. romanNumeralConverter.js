/* 
Convert the given number into a roman numeral.

convertToRoman(2) should return the string II.
convertToRoman(3) should return the string III.
convertToRoman(4) should return the string IV.
convertToRoman(5) should return the string V.
convertToRoman(9) should return the string IX.
convertToRoman(12) should return the string XII.
convertToRoman(16) should return the string XVI.
convertToRoman(29) should return the string XXIX.
convertToRoman(44) should return the string XLIV.
convertToRoman(45) should return the string XLV.
convertToRoman(68) should return the string LXVIII
convertToRoman(83) should return the string LXXXIII
convertToRoman(97) should return the string XCVII
convertToRoman(99) should return the string XCIX
convertToRoman(400) should return the string CD
convertToRoman(500) should return the string D
convertToRoman(501) should return the string DI
convertToRoman(649) should return the string DCXLIX
convertToRoman(798) should return the string DCCXCVIII
convertToRoman(891) should return the string DCCCXCI
convertToRoman(1000) should return the string M
convertToRoman(1004) should return the string MIV
convertToRoman(1006) should return the string MVI
convertToRoman(1023) should return the string MXXIII
convertToRoman(2014) should return the string MMXIV
convertToRoman(3999) should return the string MMMCMXCIX

All roman numerals answers should be provided in upper-case.
*/

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
    II: 2,
    III: 3,
    IV: 4,
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
    CM: 900,
    M: 1000,
    MM: 2000,
    MMM: 3000,
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
    return convertedNum.join('');
  };

  console.log(num);
  return converter(num);
}

console.log(convertToRoman(3999));
