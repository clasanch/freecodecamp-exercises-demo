/**
 * Priority Queue Class - Priority-based Queue Data Structure
 *
 * A priority queue is a special type of queue where each element has an associated
 * priority. Elements with higher priority (lower numerical value) are processed before
 * elements with lower priority. If two elements have the same priority, they are
 * processed in FIFO order.
 *
 * Element format: [value, priority] where priority is an integer
 * Lower priority numbers have higher precedence: 1 > 2 > 3
 *
 * Key operations:
 * - enqueue: Add element with priority in correct position O(n)
 * - dequeue: Remove and return highest priority element O(1)
 * - front: View highest priority element without removing O(1)
 * - size: Get number of elements O(1)
 * - isEmpty: Check if queue has no elements O(1)
 *
 * Real-world applications:
 * - Task scheduling in operating systems
 * - Dijkstra's shortest path algorithm
 * - Huffman coding trees
 * - Emergency room patient management
 * - Network packet routing
 *
 * @example
 * const pq = new PriorityQueue();
 * pq.enqueue(['task1', 2]);
 * pq.enqueue(['urgent', 1]);
 * pq.dequeue(); // returns 'urgent' (priority 1)
 * pq.front();   // returns 'task1' (priority 2)
 */
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection); // eslint-disable-line no-console
  };
  // Only change code below this line

  /**
   * Add element with priority to the queue in correct position
   * Elements with lower priority numbers have higher precedence
   * @param {Array} element - Array in format [value, priority]
   */
  this.enqueue = function (element) {
    const insertIndex = findInsertPosition.call(this, element[1]);
    this.collection.splice(insertIndex, 0, element);
  };

  /**
   * Find the correct insertion position for an element based on its priority
   * Uses linear search to maintain insertion order for same priorities (FIFO)
   * @param {number} priority - The priority of the element to insert
   * @returns {number} The index where the element should be inserted
   */
  function findInsertPosition(priority) {
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] > priority) {
        return i;
      }
    }
    return this.collection.length;
  }

  /**
   * Remove and return the highest priority element (value only)
   * @returns {*} The value of the highest priority element, or undefined if empty
   */
  this.dequeue = function () {
    if (this.collection.length === 0) {
      return undefined;
    }
    return this.collection.shift()[0];
  };

  /**
   * View the highest priority element without removing it (value only)
   * @returns {*} The value of the highest priority element, or undefined if empty
   */
  this.front = function () {
    if (this.collection.length === 0) {
      return undefined;
    }
    return this.collection[0][0];
  };

  /**
   * Get the number of elements in the priority queue
   * @returns {number} The current size of the priority queue
   */
  this.size = function () {
    return this.collection.length;
  };

  /**
   * Check if the priority queue is empty
   * @returns {boolean} True if queue has no elements, false otherwise
   */
  this.isEmpty = function () {
    return this.collection.length === 0;
  };

  // Only change code above this line
}

export default PriorityQueue;
