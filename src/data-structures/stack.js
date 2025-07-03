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
 * @example
 * // FreeCodeCamp expects these operations on global variable
 * homeworkStack.pop(); // removes "PSY44"
 * homeworkStack.push("CS50"); // adds "CS50"
 * // Result: ["BIO12", "HIS80", "MAT122", "CS50"]
 */

// eslint-disable-next-line no-var
var homeworkStack = ['BIO12', 'HIS80', 'MAT122', 'PSY44'];
// Only change code below this line

homeworkStack.pop();
homeworkStack.push('CS50');

// Export function for testing purposes
function stackOperations() {
  return {
    homeworkStack: homeworkStack,
    poppedElement: 'PSY44',
    pushedElement: 'CS50',
  };
}

export default stackOperations;
