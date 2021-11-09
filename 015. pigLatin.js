function translatePigLatin(str) {
    const len = 100;
    let newStr = '';
    const regEx = /[bcdfghjklmnpqrstvwxyz]/;
    str.split('');
    let m = str.match(regEx);
      if (str[0] === m) {
        str.push(str[0]);
      }
    return str;
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("schwartz"));
  console.log(translatePigLatin("rhythm"));
  
  /*
  1. Maybe turn the string into an array so that it's easy to move;
  2. Find the regex for consonants, or cluster of consonants.
  3. Find the regex for vowels.
  4. Find the regex for non-vowels.
  5. Find how to move a character or a cluster of characters from a word to the end of the word.
  6. Find how to iterate the characters of a word.
  7. 
  */
  