class MyArrayList {
  private data: unknown[];
  public size: number;
  private readonly INIT_CAP: number;

  constructor(initCapacity: number) {
    this.data = [];
    this.size = 0;
    this.INIT_CAP = 1;

    this.init(initCapacity);
  }

  private init(initCapacity: number): void {
    const capacity = initCapacity || this.INIT_CAP;
    this.data = new Array(capacity);
    this.size = 0;
  }

  // add
  public addLast(e: unknown) {
    const cap = this.data.length;
    // check if the capacity of the data array is enough
    if (this.size === cap) {
      this.resize(2 * cap);
    }
    // insert element at the end
    this.data[this.size] = e;
    this.size++;
  }

  public add(index: number, e: unknown) {
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

  public addFirst(e: unknown) {
    this.add(0, e);
  }

  // remove
  public removeLast() {
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

  public remove(index: number) {
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

  public removeFirst() {
    return this.remove(0);
  }

  // get
  public get(index: number) {
    // check for index out of bounds
    this.checkElementIndex(index);

    return this.data[index];
  }

  // set
  public set(index: number, element: unknown) {
    // check for index out of bounds
    this.checkElementIndex(index);
    // modify data
    const oldVal = this.data[index];
    this.data[index] = element;
    return oldVal;
  }

  // utility methods
  public getSize() {
    return this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }

  // change the capacity of data to newCap
  private resize(newCap: number) {
    const temp = new Array(newCap);

    for (let i = 0; i < this.size; i++) {
      temp[i] = this.data[i];
    }

    this.data = temp;
  }

  private isElementIndex(index: number) {
    return index >= 0 && index < this.size;
  }

  private isPositionIndex(index: number) {
    return index >= 0 && index <= this.size;
  }

  // check if the index position can contain an element
  private checkElementIndex(index: number) {
    if (!this.isElementIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  // check if the index position can add an element
  private checkPositionIndex(index: number) {
    if (!this.isPositionIndex(index)) {
      throw new Error("Index: " + index + ", Size: " + this.size);
    }
  }

  public display() {
    console.log("size = " + this.size + " cap = " + this.data.length);
    console.log(this.data);
  }
}

// set the initial capacity to 3
const array = new MyArrayList(3);

// add 5 elements
for (let i = 1; i <= 5; i++) {
  array.addLast(i);
}

array.remove(3);
array.add(1, 9);
array.addFirst(100);
const value = array.removeLast();

// 100 1 9 2 3
for (let i = 0; i < array.size; i++) {
  console.log(array.get(i));
}
