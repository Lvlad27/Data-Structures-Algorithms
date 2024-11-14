class MyArrayListJS {
  constructor(initCapacity) {
    // the underlying array that actually stores the data
    this.data = [];
    // record the current number of elements
    this.size = 0;
    // default initial capacity
    this.INIT_CAP = 1;

    // initialization
    this.init(initCapacity);
  }

  init(initCapacity) {
    const capacity = initCapacity || this.INIT_CAP;
    this.data = new Array(capacity);
    this.size = 0;
  }

  // add
  addLast(e) {
    const cap = this.data.length;
    // check if the capacity of the data array is enough
    if (this.size === cap) {
      this.resize(2 * cap);
    }
    // insert element at the end
    this.data[this.size] = e;
    this.size++;
  }

  add(index, e) {
    // check for index out of bounds
    this.checkPositionIndex(index);

    const cap = this.data.length;
    // check if the capacity of the data array is enough
    if (this.size === cap) {
      this.resize(2 * cap);
    }

    // move data data[index..] -> data[index+1..]
    // make space for the new element
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    // insert new element
    this.data[index] = e;
    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  // remove
  removeLast() {
    if (this.size === 0) {
      throw new Error("NoSuchElementException");
    }
    const cap = this.data.length;
    // can reduce capacity to save space
    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[this.size - 1];
    // remove the last element
    // must set the last element to null to prevent memory leak
    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
  }

  remove(index) {
    // check for index out of bounds
    this.checkElementIndex(index);

    const cap = this.data.length;
    // can reduce capacity to save space
    if (this.size === Math.floor(cap / 4)) {
      this.resize(Math.floor(cap / 2));
    }

    const deletedVal = this.data[index];

    // move data data[index+1..] -> data[index..]
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }

    this.data[this.size - 1] = null;
    this.size--;

    return deletedVal;
  }

  removeFirst() {
    return this.remove(0);
  }

  // get
  get(index) {
    // check for index out of bounds
    this.checkElementIndex(index);

    return this.data[index];
  }

  // set
  set(index, element) {
    // check for index out of bounds
    this.checkElementIndex(index);
    // modify data
    const oldVal = this.data[index];
    this.data[index] = element;
    return oldVal;
  }

  // utility methods
  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // change the capacity of data to newCap
  resize(newCap) {
    const temp = new Array(newCap);

    for (let i = 0; i < this.size; i++) {
      temp[i] = this.data[i];
    }

    this.data = temp;
  }

  isElementIndex(index) {
    return index >= 0 && index < this.size;
  }

  isPositionIndex(index) {
    return index >= 0 && index <= this.size;
  }

  // check if the index position can contain an element
  checkElementIndex(index) {
    if (!this.isElementIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  // check if the index position can add an element
  checkPositionIndex(index) {
    if (!this.isPositionIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  display() {
    console.log("size = " + this.size + " cap = " + this.data.length);
    console.log(this.data);
  }
}

// set the initial capacity to 3
const arr = new MyArrayListJS(3);

// add 5 elements
for (let i = 1; i <= 5; i++) {
  arr.addLast(i);
}

arr.remove(3);
arr.add(1, 9);
arr.addFirst(100);
const val = arr.removeLast();

// 100 1 9 2 3
for (let i = 0; i < arr.size; i++) {
  console.log(arr.get(i));
}
