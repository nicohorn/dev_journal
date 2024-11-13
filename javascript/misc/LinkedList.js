class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getNodeValue() {
    return this.value;
  }

  printNodeValue() {
    console.log(this.value);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendNode(value) {
    const newNode = new Node(value);

    if (!this.head) return (this.head = newNode);

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  printNodes() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  getLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

const linkedList = new LinkedList();

linkedList.appendNode(1);
linkedList.appendNode(10);
linkedList.appendNode(100);
linkedList.appendNode(1000);

linkedList.getLength();

linkedList.printNodes();
