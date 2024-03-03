/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
	let encoded = '';
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = 0; i < str.length; i++) {
		if (alphabet.indexOf(str.charAt(i)) > -1) {
			encoded += alphabet.charAt(
				(alphabet.indexOf(str.charAt(i)) + 13) % 26
			);
		} else {
			encoded += str.charAt(i);
		}
	}
	return encoded;
}
console.log(rot13('SERR PBQR PNZC'));
console.log(13 % 26);

/*
    d = {}
for c in (65, 97):
    for i in range(26):
        d[chr(i+c)] = chr((i+13) % 26 + c)


METHOD 2

function rot13(str) {
  let cipher = "";
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  for (let i = 0; i < str.length; i++) {
    if (/\w/.test(str[i])) {
      // checks if letter
      cipher += alphabet[alphabet.indexOf(str[i]) + 13];
    } else {
      cipher += str[i];
    }
  }

  return cipher;
};

*/
