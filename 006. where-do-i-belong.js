function getIndexToIns(arr, num) {
  arr.sort(function(a,b) {
    return a - b;
  });
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      return arr.indexOf(arr[i]);
    } else if (num > arr[arr.length - 1]) {
      arr.push(num);
      i++;
      return arr.indexOf(num);
      } else if (num === arr[i]) {
      return arr.indexOf(arr[i]);
        }
  }
  if (arr = []) {
    return 0;
  }
}


console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([5, 3, 20, 3], 5));