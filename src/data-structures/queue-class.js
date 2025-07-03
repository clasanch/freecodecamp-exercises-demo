/**
 * Queue Class - FIFO (First-In First-Out) Data Structure
 *
 * A queue is a linear data structure that follows the First-In First-Out principle.
 * Elements are added to the tail (rear) and removed from the front (head).
 *
 * Key operations:
 * - enqueue: Add element to the tail O(1)
 * - dequeue: Remove and return element from front O(1)
 * - front: View front element without removing O(1)
 * - size: Get number of elements O(1)
 * - isEmpty: Check if queue has no elements O(1)
 *
 * Real-world applications:
 * - Process scheduling in operating systems
 * - Breadth-first search in graphs
 * - Handling requests in web servers
 * - Print job management
 *
 * @example
 * const queue = new Queue();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.dequeue(); // returns 1
 * queue.front();   // returns 2
 */
function Queue() {
  var collection = []; // eslint-disable-line no-var
  this.print = function () {
    console.log(collection); // eslint-disable-line no-console
  };
  // Only change code below this line

  /**
   * Add element to the tail of the queue (FIFO principle)
   * @param {*} element - Element to add to the queue
   */
  this.enqueue = function (element) {
    collection.push(element);
  };

  /**
   * Remove and return the front element of the queue (FIFO principle)
   * @returns {*} The element at the front of the queue, or undefined if empty
   */
  this.dequeue = function () {
    return collection.shift();
  };

  /**
   * View the front element without removing it
   * @returns {*} The element at the front of the queue, or undefined if empty
   */
  this.front = function () {
    return collection[0];
  };

  /**
   * Get the number of elements in the queue
   * @returns {number} The current size of the queue
   */
  this.size = function () {
    return collection.length;
  };

  /**
   * Check if the queue is empty
   * @returns {boolean} True if queue has no elements, false otherwise
   */
  this.isEmpty = function () {
    return collection.length === 0;
  };

  // Only change code above this line
}

export default Queue;
