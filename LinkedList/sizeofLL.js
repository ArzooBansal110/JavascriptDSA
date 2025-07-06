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
function sizeofLinkedList(){
    if(!this.head){
        return 0;
    }
    let size=0;
    let current=this.head;
    while(current){
        current=current.next;
                size++;
    }
    return size;
}

addAtLast(10);
addAtLast(20);
addAtLast(30);
addAtLast(40);
drawLinkedList();

const sizeofLL=sizeofLinkedList();
console.log(`The size of linked list is ${sizeofLL}`);