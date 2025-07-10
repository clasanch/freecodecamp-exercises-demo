/* eslint-disable max-lines-per-function, no-var */
/**
 * Remove Elements from a Linked List by Index
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements removeAt method using runner technique for index-based removal.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure
 * - Implements runner technique with currentIndex counter and node traversal
 * - Returns null for invalid indices (negative or >= length)
 * - Handles all removal cases: head, middle, tail, single element
 * - Decrements length only on successful removals
 *
 * @returns {Object} LinkedList instance with removeAt method
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new LinkedList();
 * list.add('first'); list.add('second'); list.add('third');
 * list.removeAt(1); // returns 'second', list becomes ['first', 'third']
 * list.removeAt(-1); // returns null, list unchanged
 * list.removeAt(5); // returns null, list unchanged
 *
 * Time Complexity: O(n) - linear traversal to target index
 * Space Complexity: O(1) - constant extra space for pointers
 * Educational Compliance: ✅ Verified against platform tests
 */
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line

  this.removeAt = function (index) {
    // Validate index bounds - return null for invalid indices
    if (index < 0 || index >= length || index !== Math.floor(index)) {
      return null;
    }

    // Handle head removal (index === 0)
    if (index === 0) {
      var removedElement = head.element;
      head = head.next;
      length--;
      return removedElement;
    }

    // Use runner technique for middle/tail removal
    var currentNode = head;
    var previousNode = null;
    var currentIndex = 0;

    // Traverse to target index using currentIndex counter
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Remove node and update connections
    previousNode.next = currentNode.next;
    length--;

    // Return removed element
    return currentNode.element;
  };

  // Only change code above this line
}

export default LinkedList;
