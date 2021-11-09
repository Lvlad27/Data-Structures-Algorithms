// REGEX

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

// Replace low-upper case to low-space-uppercase
str = str.replace(/([a-z])([A-Z])/g, "$1 $2");