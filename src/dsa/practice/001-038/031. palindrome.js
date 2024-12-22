/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {
    // Step 1. Remove the non-alpha numerical characters and lowercase the letters
    const regexNonAlpha = /[^a-zA-Z0-9]/g;
    str = str.replace(regexNonAlpha, "").toLowerCase();
    console.log(str);

    // Step 2. Create the FOR loop.
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            // As long as the characters from each part match, the FOR loop will go on
            return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
        }
    }
    return true; // Both parts are strictly equal, it returns true => The string is a palindrome
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0-0");
palindrome("five|_/|four");
