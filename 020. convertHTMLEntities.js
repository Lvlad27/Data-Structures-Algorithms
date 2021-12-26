/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return the string Schindler&apos;s List.
convertHTML("<>") should return the string &lt;&gt;.
convertHTML("abc") should return the string abc.
*/

// MY METHOD
function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return str.replace(/&|<|>|'|"/g, i => entities[i]);
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));

/*
METHOD 2
function convertHTML(str) {
  // Split by character to avoid problems.
  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

METHOD 3
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

*/
