function same(arr1, arr2) {
  let result = false;
  let newArr = [];
  for (let i of arr1) {
    let square = i * i;
    newArr.push(square);
  }
  result = newArr.every(elem => arr2.includes(elem));
  console.log(result);
  return result;
}

same([1, 2, 3], [1, 4, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 3], [4, 1, 9]); // false