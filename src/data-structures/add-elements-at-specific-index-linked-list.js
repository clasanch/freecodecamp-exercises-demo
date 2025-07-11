/* eslint-disable no-var, max-lines-per-function */
/**
 * Add Elements at a Specific Index in a Linked List
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements the addAt(index, element) method for inserting elements
 * at specific positions within a linked list structure.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure for compatibility
 * - Position-based traversal with currentIndex tracking
 * - Proper handling of edge cases (negative indices, out-of-bounds)
 * - Reassignment of references for insertion without breaking chain
 *
 * Like the conga line analogy: When inserting a new person in the middle,
 * you take your hands off the person ahead, the new person connects to
 * that person, and you connect to the new person.
 *
 * @returns {Object} LinkedList instance with addAt(index, element) method
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const list = new LinkedList();
 * list.add('first');
 * list.add('second');
 * list.addAt(1, 'middle'); // Insert between first and second
 * // Result: first → middle → second
 *
 * @example
 * // Edge case handling
 * list.addAt(-1, 'invalid'); // returns false
 * list.addAt(10, 'invalid'); // returns false (beyond length)
 * list.addAt(0, 'newHead'); // becomes new head
 *
 * Time Complexity: O(n) for traversal to index position
 * Space Complexity: O(1) for new node creation
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
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

  /**
   * Add element at specific index position
   *
   * Educational implementation following FreeCodeCamp conga line analogy.
   * When inserting in the middle: take hands off person ahead, new person
   * connects to that person, you connect to new person.
   *
   * @param {number} index - Zero-based position to insert element
   * @param {*} element - Element to be inserted
   * @returns {boolean} false if element could not be added, undefined otherwise
   */
  this.addAt = function (index, element) {
    // Validate index bounds as per FreeCodeCamp requirements
    if (index < 0 || index > length) {
      return false;
    }

    // Case 1: Insert at head (index 0) - reassign head to new node
    if (index === 0) {
      var newHeadNode = new Node(element);
      newHeadNode.next = head;
      head = newHeadNode;
      length++;
      return; // Successful, return undefined as per specification
    }

    // Case 2: Insert at middle or end - traverse with currentIndex tracking
    var currentIndex = 0;
    var currentNode = head;
    var previousNode = null;

    // Keep track of currentIndex as we traverse the linked list
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Conga line insertion: reassign references without breaking chain
    var insertNode = new Node(element);
    previousNode.next = insertNode; // Previous person grabs new person
    insertNode.next = currentNode; // New person grabs next person

    length++; // Increase length for each new node added
  };

  // Only change code above this line
}

export default LinkedList;
