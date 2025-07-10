/* eslint-disable no-var */
/**
 * Linked List Class
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements a singly linked list with basic add functionality.
 *
 * Key Design Decisions:
 * - Constructor function pattern for FreeCodeCamp compatibility
 * - Private variables using closure scope (requires var for skeleton compliance)
 * - Inner Node class for element-next structure
 * - Linear traversal for insertion at tail
 *
 * @returns {Object} LinkedList instance with head(), size(), and add() methods
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new LinkedList();
 * list.add('first');
 * list.add('second');
 * list.head(); // returns Node with element 'first'
 * list.size(); // returns 2
 *
 * Time Complexity: O(n) for add operation (traversal to tail)
 * Space Complexity: O(1) per node
 * Educational Compliance: ✅ Preserves exact skeleton structure
 */
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    var newNode = new Node(element);

    if (head === null) {
      head = newNode;
    } else {
      var current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    length++;
    // Only change code above this line
  };
}

export default LinkedList;
