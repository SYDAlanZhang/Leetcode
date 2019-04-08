/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let node1 = head,
        node2 = head;
    while(node2.next) {
        node2 = node2.next;
        node1 = node1.next;
        if (node2.next) {
            node2 = node2.next;
        } else {
            break;
        }    
    }
    return node1;
};