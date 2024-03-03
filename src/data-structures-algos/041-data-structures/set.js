class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (this.has(element)) {
      return false;
    } else {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
    } else {
      return false;
    }
  }

  size() {
    return this.length;
  }
}
