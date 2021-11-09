/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]
*/

// METHOD 1
function destroyer(arr, ...args) {
  
    return arr.filter(item => args.indexOf(item) === -1);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  

/*
METHOD 2
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}

Create an array of valsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. We’ll use this to check against arr.
Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. This second loop will iterate through valsToRemove .
    Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].
    If the value at the current index is equal in both arrays, use delete to remove it from arr.
Outside of the nested loops: return the modified array, filtering out any null's created by the delete operator.

-----------

METHOD 3
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. Use the slice() method on the array of arguments, starting from the second index, 1.
Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep the value in the original array or false to remove it.

-----------

METHOD 4
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}


Using spread operator to retrieve the arguments.
Return the filtered array, using includes().
*/