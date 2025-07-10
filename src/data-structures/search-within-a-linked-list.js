/* eslint-disable max-lines-per-function, no-var */
/**
 * Search within a Linked List
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements isEmpty, indexOf, and elementAt methods for comprehensive list querying.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure
 * - Implements linear search algorithms O(n) for indexOf and elementAt
 * - isEmpty uses O(1) length check for efficiency
 * - Returns JavaScript-consistent values (-1 for not found, undefined for invalid index)
 *
 * @returns {Object} LinkedList instance with search methods
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new LinkedList();
 * list.add('first');
 * list.add('second');
 * list.isEmpty(); // returns false
 * list.indexOf('first'); // returns 0
 * list.elementAt(1); // returns 'second'
 *
 * Time Complexity: O(n) for indexOf/elementAt, O(1) for isEmpty
 * Space Complexity: O(1) - constant extra space
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

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  // Only change code below this line

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    var currentNode = head;
    var index = 0;

    while (currentNode !== null) {
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  };

  this.elementAt = function (index) {
    if (index < 0 || index >= length || index !== Math.floor(index)) {
      return undefined;
    }

    var currentNode = head;
    var currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.element;
  };

  // Only change code above this line
}

export default LinkedList;
