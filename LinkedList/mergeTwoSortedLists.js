function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


let mergeTwoLists = function (list1, list2) {
    let newList = new ListNode();
    let current = newList;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next;
        } 
        current = current.next;
    }
    while (list1 != null) {
        current.next = new ListNode(list1.val);
        list1 = list1.next;
        current = current.next;
    }
    while (list2 != null) {
        current.next = new ListNode(list2.val);
        list2 = list2.next;
        current = current.next;
    }
    return newList.next;
};
//Create input data (this is where you "write data")
let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(7, new ListNode(8, new ListNode(9)));

//   Call the function
let merged = mergeTwoLists(list1, list2);

//   Print the result
while (merged !== null) {
    console.log(merged.val);
    merged = merged.next;
}
