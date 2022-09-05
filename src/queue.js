const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = null;
  }
  
  getUnderlyingList() {
   return this.head;
  }

  enqueue( value ) {
    if (!this.head) {
      this.head = {'value': value, 'next': null};
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = {'value': value, 'next': null};
    }
  }

  dequeue() {
    if (!this.head) {return};
    let firstItem = {...this.head};
    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = firstItem.next
    }
    return firstItem.value;
  }
}

module.exports = {
  Queue
};
