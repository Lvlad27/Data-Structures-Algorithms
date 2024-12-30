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

class LinkedList<T> {
  private head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }

  /*
   *
   * INSERT
   *
   * 1) Creează un nod nou care să conțină valoarea ce va fi inserată.
   * - Ce se întâmplă dacă lista este deja goală?
   * 2) Creează un pointer care să indice spre începutul listei.
   * 3) Avansează pointer-ul prin listă până găsește o valoare nulă.
   * 4) Adaugă nodul nou la listă, setând proprietatea "next" a nodului "curr" la acest nod nou.
   *
   */
  
  insert(data: T) {
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
  
  /*
   * DELETE
   *
   * 1) Gestionează cazul special în care nodul care trebuie șters este chiar capul listei (head)
   * 2) Creează un pointer care să indice spre începutul listei
   *    - va fi nevoie și de un alt pointer "prev" care să preceadă "curr"
   * 3) Avansează pointer-ul până ajungi la elementul sau indexul pe care vrei să îl ștergi.
   *    - vei compara curr.value cu valoarea elementului care trebuie ștearsă
   * 4) Ajustează pointerii "next" corespunzători pentru ca nodul șters să nu mai facă parte din lanț
   *    - prev.next = curr.next pentru a sări peste nodul care trebuie șters
   *    - curr.next = null pentru a evita o scurgere de memorie
   */
  
  delete(valToDelete: T) {
    let curr = this.head;

    if (curr?.val === valToDelete) {
      this.head = curr.next;
      curr.next = null;
      return;
    }

    let prev = null;

    while (curr) {
      if (curr.value === valToDelete) {
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (!curr) {
      return;
    }

    prev.next = curr.next;
    curr.next = null;
 }
  toString() {}
}
```
