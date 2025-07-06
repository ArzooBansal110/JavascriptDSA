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

function getMidNode(){
    let slow=this.head;
    let fast=this.head;

    while(fast!=null&& fast.next!=null){
        slow= slow.next;
        fast=fast.next.next;
    }
    console.log(slow);
}
addAtLast(10);
addAtLast(20);
addAtLast(30);
addAtLast(40);
addAtLast(50);
getMidNode();
