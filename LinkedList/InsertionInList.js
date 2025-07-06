class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
}

function addAtLast(newVal) {
    const newNode=new Node(newVal);
    if(!this.head) {
        this.head=newNode;
        return;
    }
    let current=this.head;
    while(current.next) {
        current=current.next;
    }
    current.next=newNode;
}

function printLinkedListValues() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

function drawLinkedList() {
    let current = this.head;
    let output = '';
    while (current) {
        output += current.data + ' -> ';
        current = current.next;
    }
    output += 'null';
    console.log(output);
}

function addAtFirst(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    newNode.next = this.head;
    this.head = newNode;
}

function addAtIndex(index, val) {
    if (index < 0) return;
    const newNode = new Node(val);
    if (index === 0) {
        // addAtFirst(val);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    let current = this.head;
    for (let i = 0; i < index-1 && current; i++) {
        current = current.next;
    }
  
    newNode.next = current.next;
     current.next = newNode;
}

addAtLast(10);
addAtLast(20);
addAtLast(30);
addAtLast(40);

// addAtFirst(5);
addAtIndex(3, 35);
// printLinkedListValues();
drawLinkedList();