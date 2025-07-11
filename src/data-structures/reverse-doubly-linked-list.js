/* eslint-disable no-var, max-lines-per-function */
/**
 * Reverse a Doubly Linked List
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements in-place reversal of doubly linked list maintaining bidirectional links.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure for compatibility
 * - In-place reversal swapping next/prev pointers for each node
 * - Head becomes tail, tail becomes head after reversal
 * - Returns null for empty list as per educational requirements
 *
 * The reverse method efficiently reverses the list by traversing once and
 * swapping the next and prev pointers of each node, then updating head/tail.
 *
 * @returns {Object} DoublyLinkedList instance with add, remove, and reverse methods
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new DoublyLinkedList();
 * list.add('first');
 * list.add('second');
 * list.reverse(); // List is now: second <-> first
 *
 * @example
 * // Bidirectional traversal after reversal
 * // Original: first <-> second <-> third
 * // After reverse: third <-> second <-> first
 *
 * Time Complexity: O(n) for reverse operation (single traversal)
 * Space Complexity: O(1) for reverse (in-place modification)
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

  /**
   * Reverse the doubly linked list in place
   *
   * Educational implementation following FreeCodeCamp specifications.
   * Swaps next and prev pointers for each node, then updates head/tail.
   *
   * @returns {null|undefined} null if list is empty, undefined for success
   */
  this.reverse = function () {
    // Case 1: Empty list - return null as per specification
    if (this.head === null) {
      return null;
    }

    var current = this.head;
    var temp = null;

    // Traverse the list and swap next and prev pointers for each node
    while (current !== null) {
      // Swap next and prev pointers
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // Move to the next node (which is now in the prev pointer)
      current = current.prev;
    }

    // After the loop, temp holds the prev of the last processed node
    // which is the new head (old tail)
    if (temp !== null) {
      this.tail = this.head; // Old head becomes new tail
      this.head = temp.prev; // New head is temp.prev (the old tail)
    }

    // Return undefined for successful operation
    return undefined;
  };

  // Only change code above this line
};

export default DoublyLinkedList;
