/**
 * Stack Class - FreeCodeCamp Exercise
 *
 * A custom Stack implementation that provides controlled access to stack operations.
 * Implements LIFO (Last-In-First-Out) behavior with essential stack methods.
 *
 * Methods:
 * - push(element): Add element to the top of the stack
 * - pop(): Remove and return the top element of the stack
 * - peek(): Look at the top element without removing it
 * - isEmpty(): Check if the stack is empty
 * - clear(): Remove all elements from the stack
 * - print(): Console log the collection (helper method provided)
 *
 * @returns {Object} Stack instance with all required methods
 *
 * @example
 * const stack = new Stack();
 * stack.push('first');
 * stack.push('second');
 * stack.peek(); // 'second'
 * stack.pop(); // 'second'
 * stack.isEmpty(); // false
 * stack.clear(); // empties the stack
 */

// prettier-ignore
function Stack() {
  var collection = []; // eslint-disable-line no-var
  this.print = function() {
    console.log(collection); // eslint-disable-line no-console
  };
  // Only change code below this line

  /**
   * Push an element to the top of the stack
   * @param {*} element - Element to add to the stack
   */
  this.push = function(element) {
    collection.push(element);
  };

  /**
   * Remove and return the top element of the stack
   * @returns {*} The top element of the stack, or undefined if stack is empty
   */
  this.pop = function() {
    return collection.pop();
  };

  /**
   * Look at the top element in the stack without removing it
   * @returns {*} The top element of the stack, or undefined if stack is empty
   */
  this.peek = function() {
    return collection[collection.length - 1];
  };

  /**
   * Check if the stack is empty
   * @returns {boolean} True if stack is empty, false otherwise
   */
  this.isEmpty = function() {
    return collection.length === 0;
  };

  /**
   * Remove all elements from the stack
   */
  this.clear = function() {
    collection = [];
  };

  // Only change code above this line
}

export default Stack;
