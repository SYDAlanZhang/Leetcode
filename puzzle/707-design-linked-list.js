class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (this.length <= index || index < 0) {
        return -1;
    }
    let cur = this.head;
    for (let i = 0; i < index; i++){
        cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (this.head) {
        let currentTail = this.head;
        while(currentTail.next){
            currentTail = currentTail.next;
        }
        currentTail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.length += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (this.length < index || index < 0) {
        return;
    }    
    if (index === 0) { 
        this.addAtHead(val);
        return;   
    }
    if (index === this.length) {
        this.addAtTail(val);
        return;   
    }
    let cur = this.head;
    for (let i = 0; i< index - 1; i++) {
        cur = cur.next;
    }  
    let newNode = new Node(val);
    const currentNext = cur.next;
    cur.next = newNode;
    newNode.next = currentNext;
    this.length += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.length <= index || index < 0) {
        return;
    }
    if (index === 0) { 
        this.head = this.head.next;
        return;   
    }
    let cur = this.head;
    for (let i = 0; i < index-1; i++){
        cur = cur.next;
    }    
    cur.next = cur.next.next;

    this.length -= 1; 
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */