var removeNthFromEnd = function (head, n) {
    if(head==null) return head;
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    let slowkaprev=null;
    while (fast != null) {
        slowkaprev=slow;
        slow = slow.next;
        fast = fast.next;
    }
    if(slowkaprev==null) return head.next;
    slowkaprev.next=slow.next;
    return head;
};