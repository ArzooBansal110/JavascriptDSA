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
function getNodeAt(index){
    if(index<0) return null;
    if(!this.head){
        return null;
    }
    let current=this.head;
    for(let i=0;i<index&&current;i++){
        current=current.next;
    }
    return current;
}

addAtLast(10);
addAtLast(20);
addAtLast(30);
addAtLast(40);
// drawLinkedList();

let getNode=getNodeAt(5);
console.log(getNode);

