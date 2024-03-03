/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.
Passed

fearNotLetter("abcdefghjklmno") should return the string i.
Passed

fearNotLetter("stvwx") should return the string u.
Passed

fearNotLetter("bcdf") should return the string e.
Passed

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);

  for (let i = start; i < start + str.length; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetter('stvwx'));
console.log(fearNotLetter('bcdf'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
