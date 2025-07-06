/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    // Fast moves two steps, slow moves one step
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // Cycle found
        if (slow === fast) return true;
    }

    // No cycle
    return false;
};