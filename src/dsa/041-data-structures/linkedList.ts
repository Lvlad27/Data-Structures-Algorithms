class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  insert(data: T): void {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr?.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  delete(valToDelete: T): void {
    let cur = this.head;
    // handle case where node to be deleted is the head
    if (cur !== null && cur.val === valToDelete) {
      this.head = cur.next;
      cur.next = null;
      return;
    }

    // find the node to delete
  }
}
