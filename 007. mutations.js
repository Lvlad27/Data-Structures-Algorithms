function mutation(arr) {
  let answer = true;
  let newArr = arr.map(x => x.toLowerCase());
  let [source, target] = [newArr[0], newArr[1]];

  for (let i = 0; i < target.length; i++) {
    let targetContainsLetter = source.includes(target[i]);
    if (!targetContainsLetter) {
    answer = false;
    }  
  } 
  return answer;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));

