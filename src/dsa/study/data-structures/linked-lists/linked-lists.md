# Liste Înlănțuite

O listă înlănțuită este o structură de date liniară și omogenă alcătuită dintr-o listă de elemente denumite noduri care au ca structură o valoare și o referință (pointer) către următorul nod. Este o structură de date necontiguă, având avantajul că poate folosi toată memoria liberă aflată la dispoziție. Dezavantajul este că pentru a ajunge la un element aleator trebuie parcursă lista de la început până la elementul dorit.

O listă înlănțuită conține cel puțin un pointer _head_ care reprezintă _capul listei_ și va indica mereu către primul element al listei.

```ts
class ListNode<T> {
  private readonly val: T;
  private next: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
```

```ts
class LinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  /*
   * INSERT
   *
   * 1) Se creează un nou nod care are ca proprietate valoarea care va fi inserată.
   * 2)
   */
  insert(data: T) {}
  delete() {}
  toString() {}
}
```
