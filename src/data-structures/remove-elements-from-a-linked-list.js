/**
 * Remove Elements from a Linked List
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements the remove method for a singly linked list data structure.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure
 * - Handles all removal cases: head, middle, tail, non-existent
 * - Maintains proper node connections to prevent orphaned sections
 * - Accurate length tracking for successful removals only
 *
 * @returns {Object} LinkedList instance with remove method
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new LinkedList();
 * list.add('first');
 * list.add('second');
 * list.remove('first'); // Removes head node
 * list.size(); // returns 1
 *
 * Time Complexity: O(n) - linear search through list
 * Space Complexity: O(1) - constant extra space
 * Educational Compliance: ✅ Verified against platform tests
 */
function LinkedList() {
  // eslint-disable-line max-lines-per-function
  var length = 0; // eslint-disable-line no-var
  var head = null; // eslint-disable-line no-var

  var Node = function (element) {
    // eslint-disable-line no-var
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
    var node = new Node(element); // eslint-disable-line no-var
    if (head === null) {
      head = node;
    } else {
      var currentNode = head; // eslint-disable-line no-var

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    // Only change code below this line

    // Case 1: Empty list - nothing to remove
    if (head === null) {
      return;
    }

    // Case 2: Remove head node - reassign head to second node
    if (head.element === element) {
      head = head.next;
      length--;
      return;
    }

    // Case 3: Remove middle or tail node - traverse and unlink
    var currentNode = head; // eslint-disable-line no-var
    while (currentNode.next !== null) {
      if (currentNode.next.element === element) {
        // Unlink: current -> target -> next becomes current -> next
        currentNode.next = currentNode.next.next;
        length--;
        return; // Remove only first occurrence
      }
      currentNode = currentNode.next;
    }

    // Case 4: Element not found - list remains unchanged

    // Only change code above this line
  };
}

export default LinkedList;
