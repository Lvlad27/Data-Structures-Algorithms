// ---------------REGEX---------------

/([A-Z])/g; // aLL Uppercase
/\s\s+/g; // all double spaces
/_/g; // underscore
/\s/g; // spaces

    // Replace all Uppercase letters with space
    .replace(regEx, ' $1')
    // Replace all double spaces with one space
    .replace(regEx2, ' ')
    // Remove all underscores
    .replace(regEx3, '')
    // Remove spaces before and after set of string
    .trim()
    // Make every character lowercase
    .toLowerCase()
    // Replace spaces with '-'
    .replace(regEx4, '-');

// Create a variable for the white space and underscores.
var regex = /\s+|_+/g;

// regex for consonants or cluster of consonants
const regEx = /^[b-df-hj-np-tv-z]+/g;

// Replace low-upper case to low-space-uppercase
str = str.replace(/([a-z])([A-Z])/g, "$1 $2");







// ---------------STRINGS---------------

// Splitting a word into characters
const string = 'word';
// Option 1
string.split('');
// Option 2
[...string];
// Option 3
Array.from(string);
// Option 4
Object.assign([], string);
// Result:
// ['w', 'o', 'r', 'd']

// If you want to split your string by a specific character, then split is the way to go.
const string = 'split-by-dash';
const usingSplit = string.split('-');
// [ 'split', 'by', 'dash' ]











// ---------------OBJECTS---------------


// ---------------ARRAYS---------------

