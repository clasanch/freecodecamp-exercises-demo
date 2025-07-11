/* eslint-disable no-var, max-lines-per-function */
/**
 * Create a Doubly Linked List
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements bidirectional linked list with add and remove methods.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure for compatibility
 * - Bidirectional linking with proper next/prev reference management
 * - Head and tail maintenance for efficient traversal in both directions
 * - Remove ALL occurrences strategy for comprehensive element removal
 *
 * Doubly linked lists allow traversal in both directions but require
 * additional memory for the previous node reference. Each node maintains
 * connections to both next and previous nodes in the chain.
 *
 * @returns {Object} DoublyLinkedList instance with add and remove methods
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new DoublyLinkedList();
 * list.add('first');
 * list.add('second');
 * list.remove('first'); // Removes all occurrences
 *
 * @example
 * // Bidirectional traversal capability
 * // Forward: head -> node1 -> node2 -> tail
 * // Backward: tail -> node2 -> node1 -> head
 *
 * Time Complexity: O(1) for add, O(n) for remove
 * Space Complexity: O(1) for operations (not counting stored data)
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
 */
var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  /**
   * Add element to the end of the doubly linked list
   *
   * Educational implementation maintaining proper bidirectional linking.
   * New nodes are added to the tail with proper prev/next connections.
   *
   * @param {*} data - Element to be added to the list
   */
  this.add = function (data) {
    var newNode = new Node(data, null);

    // Case 1: Empty list - new node becomes both head and tail
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Case 2: Non-empty list - add to tail with bidirectional linking
      newNode.prev = this.tail; // Link new node backward to current tail
      this.tail.next = newNode; // Link current tail forward to new node
      this.tail = newNode; // Update tail reference to new node
    }
  };

  /**
   * Remove ALL occurrences of specified element from the list
   *
   * Educational implementation with comprehensive removal strategy.
   * Handles edge cases: empty list, single element, first/last removal.
   *
   * @param {*} data - Element to be removed (all occurrences)
   * @returns {null|undefined} null if list is empty, undefined otherwise
   */
  this.remove = function (data) {
    // Case 1: Empty list - return null as per FreeCodeCamp specification
    if (this.head === null) {
      return null;
    }

    var current = this.head;

    // Traverse the entire list to remove ALL occurrences
    while (current !== null) {
      if (current.data === data) {
        // Store next node before removal
        var nextNode = current.next;

        // Case A: Removing the head node
        if (current === this.head) {
          this.head = current.next;
          if (this.head !== null) {
            this.head.prev = null;
          } else {
            // List becomes empty
            this.tail = null;
          }
        }
        // Case B: Removing the tail node
        else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        }
        // Case C: Removing middle node
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        // Move to next node
        current = nextNode;
      } else {
        // Continue traversal
        current = current.next;
      }
    }

    // Return undefined for successful operation (list was not empty)
    return undefined;
  };

  // Only change code above this line
};

export default DoublyLinkedList;
