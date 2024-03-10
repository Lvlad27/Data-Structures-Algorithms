class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This method will return an union of 2 sets
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // This method will return an intersection of 2 sets
  intersection(set) {
    const newSet = new Set();
    let largeSet, smallSet;
    [largeSet, smallSet] = this.size() > set.size() ? [this, set] : [set, this];

    smallSet.values().forEach((value) => {
      if (largeSet.has(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }
}

const setA = new Set();
const setB = new Set();

["a", "b", "c"].forEach((element) => setA.add(element));
["a", "b", "d", "e"].forEach((element) => setB.add(element));

console.log(setA.values());
console.log(setB.values());

console.log(setA.intersection(setB).values());
