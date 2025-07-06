/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(first, second) {

        let res = null; 
        let prev = null; 
        let temp=null;
        let carry = 0, sum; 
  
        // while both lists exist 
        while (first != null || second != null) { 
            // Calculate value of next 
            // digit in resultant list. 
            // The next digit is sum 
            // of following things 
            // (i)  Carry 
            // (ii) Next digit of first 
            // list (if there is a next digit) 
            // (ii) Next digit of second 
            // list (if there is a next digit) 
            sum = carry + (first != null ? first.val : 0) 
                  + (second != null ? second.val : 0); 
  
            // update carry for next calulation 
            carry = (sum >= 10) ? 1 : 0; 
  
            // update sum if it is greater than 10 
            sum = sum % 10; 
  
            // Create a new node with sum as data 
            temp = new ListNode(sum); 
  
            // if this is the first node then set 
            // it as head of the resultant list 
            if (res == null) { 
                res = temp; 
            } 
  
            // If this is not the first 
            // node then connect it to the rest. 
            else { 
                prev.next = temp; 
            } 
  
            // Set prev for next insertion 
            prev = temp; 
  
            // Move first and second pointers 
            // to next nodes 
            if (first != null) { 
                first = first.next; 
            } 
            if (second != null) { 
                second = second.next; 
            } 
        } 
  
        if (carry > 0) { 
            temp.next = new ListNode(carry); 
        } 
  
        // return head of the resultant list 
        return res; 
    }; 
    