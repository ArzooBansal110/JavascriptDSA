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

function deleteLast() {
    if(!this.head) {
        console.log("Empty List, cannot be deleted");
        return;
    }
    if (!this.head.next) {
        this.head = null;
        return;
    }
    let current=this.head;
    while(current.next&&current.next.next) {
        current=current.next;
    }
    current.next=null;//null deletes the next node
}

// function deleteFirst() {
    
// }

// function deleteAtIndex(index){

// }
const List=new LinkedList();



addAtLast(10);
addAtLast(20);
addAtLast(30);
addAtLast(40);
deleteLast();

drawLinkedList();