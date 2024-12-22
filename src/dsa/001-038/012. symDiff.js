/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Passed

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Passed

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
Passed

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Passed

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Passed

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Passed

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Passed

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Passed

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Passed

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Passed

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Passed

[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Passed

[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Passed

[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Passed

[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.


*/


// METHOD 1
function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.map(i => {
        if (arr2.indexOf(i) === -1) {
            return newArr.push(i);
        }
    });

    arr2.map(i => {
        if (arr1.indexOf(i) === -1) {
            return newArr.push(i);
        }
    })

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));


/*
// METHOD 2
function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }

  // METHOD 3
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  // METHOD 4
  function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

  */
  