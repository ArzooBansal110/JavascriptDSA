var removeNthFromEnd = function (head, n) {
    if(head==null) return head;
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {// we can't go backwards,
    //  so we move fast n steps ahead to create the gap


        fast = fast.next;
    }
    let slowkaprev=null;
    while (fast != null) {
        slowkaprev=slow;
        slow = slow.next;
        fast = fast.next;
    }
    if(slowkaprev==null) return head.next;// Used in removal 
    //of node where node==list ki length
    else {
        slowkaprev.next=slow.next
        return head;
    }
}