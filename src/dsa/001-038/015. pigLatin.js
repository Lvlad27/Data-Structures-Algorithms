/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

// MY METHOD
function translatePigLatin(str) {
    const regEx = /^[b-df-hj-np-tv-z]+/g;
    if (str.match(regEx)) {
        return str.replaceAll(regEx, "").concat("", str.match(regEx) + "ay");
    } else {
        return str.concat("", "way");
    }
    console.log(str);
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
Code explanation:
1. Define regEx for consonants or cluster of consonants;
2. If regex is found in string, then remove first consonant or first cluster of consonants and move it to the end of ther word and then add 'ay'. If the whole word matches the regex, it removes the word and then adds it back together with 'ay'.
3. If the regex is not found, add 'way' to the end of the word.
*/
