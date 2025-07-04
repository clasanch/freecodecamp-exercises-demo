/**
 * Circular Queue Class
 *
 * Fixed-size circular buffer implementation with wraparound pointer logic.
 * Provides O(1) enqueue and dequeue operations with memory efficiency.
 * Uses read/write pointers to track position without shifting array elements.
 *
 * Key Features:
 * - Fixed memory allocation (size specified at construction)
 * - Circular wraparound when reaching buffer end
 * - Prevents overwriting unread data
 * - O(1) time complexity for all operations
 *
 * @example
 * const queue = new CircularQueue(5);
 * queue.enqueue('A'); // Returns 'A'
 * queue.enqueue('B'); // Returns 'B'
 * queue.dequeue();    // Returns 'A'
 *
 * Time Complexity: O(1) for enqueue and dequeue
 * Space Complexity: O(n) where n is the queue size
 */

class CircularQueue {
  /**
   * Creates a new CircularQueue with fixed size
   * @param {number} size - Maximum number of elements the queue can hold
   */
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    // Initialize queue with null values for the entire size
    // This ensures fixed memory allocation
    while (size > 0) {
      this.queue.push(null);
      size--; // eslint-disable-line no-param-reassign
    }
  }

  /**
   * Add an item to the circular queue
   *
   * Enqueue operation advances the write pointer and adds item at current position.
   * Write pointer should not be allowed to move past the read pointer.
   * Write pointer wraps around to beginning when reaching end of buffer.
   *
   * @param {*} item - The item to add to the queue
   * @returns {*|null} The item if successfully added, null if queue is full
   */
  enqueue(item) {
    // Calculate next write position
    const nextWrite = (this.write + 1) % (this.max + 1);

    // Check if write pointer would move past read pointer
    // This happens when nextWrite would equal read and there's unread data
    if (nextWrite === this.read && this.queue[this.read] !== null) {
      return null;
    }

    this.queue[this.write] = item;
    this.write = nextWrite;
    return item;
  }

  /**
   * Remove and return an item from the circular queue
   *
   * Dequeue operation removes item at read position and advances read pointer.
   * The dequeued position is reset to null. Read pointer should not advance
   * past data you have written.
   *
   * @returns {*|null} The dequeued item if available, null if queue is empty
   */
  dequeue() {
    // If there's no item at read position, return null
    if (this.queue[this.read] === null) {
      return null;
    }

    const item = this.queue[this.read];
    this.queue[this.read] = null; // Reset position to null
    this.read = (this.read + 1) % (this.max + 1);
    return item;
  }
}

export default CircularQueue;
