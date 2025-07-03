/**
 * Stack Data Structure - FreeCodeCamp Exercise
 *
 * Demonstrates Last-In-First-Out (LIFO) behavior using JavaScript array methods.
 * A stack is a data structure where elements are added and removed from the top.
 *
 * Operations:
 * - push(): Add element to the top of the stack
 * - pop(): Remove element from the top of the stack
 *
 * Requirements:
 * - Remove top element "PSY44" from stack
 * - Add "CS50" as new top element
 * - Maintain 4 elements total
 * - Preserve initial order of base elements
 *
 * @returns {Object} Object containing modified stack and operation details
 *
 * @example
 * const result = stackOperations();
 * result.homeworkStack // ["BIO12", "HIS80", "MAT122", "CS50"]
 * result.poppedElement // "PSY44"
 * result.pushedElement // "CS50"
 */
function stackOperations() {
  // Initial homework stack as provided by FreeCodeCamp
  const homeworkStack = ['BIO12', 'HIS80', 'MAT122', 'PSY44'];

  // Only change code below this line

  // Remove the top element "PSY44" from the stack using pop()
  const poppedElement = homeworkStack.pop();

  // Add "CS50" to be the new top element of the stack using push()
  const pushedElement = 'CS50';
  homeworkStack.push(pushedElement);

  // Return result object for testing purposes
  return {
    homeworkStack: homeworkStack,
    poppedElement: poppedElement,
    pushedElement: pushedElement,
  };
}

export default stackOperations;
