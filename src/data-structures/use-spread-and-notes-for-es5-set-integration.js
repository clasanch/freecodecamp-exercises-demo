/**
 * Use Spread and Notes for ES5 Set() Integration
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Demonstrates the use of ES6 spread operator to convert Set objects to arrays.
 *
 * Key Design Decisions:
 * - Preserves FreeCodeCamp skeleton structure exactly
 * - Uses spread operator for educational clarity
 * - Simple and direct implementation for learning purposes
 *
 * @param {Set} set - A JavaScript Set object to convert to array
 * @returns {Array} Array containing all values from the Set
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const mySet = new Set([1, 2, 3, 4, 5]);
 * const result = checkSet(mySet);
 * console.log(result); // [1, 2, 3, 4, 5]
 *
 * Time Complexity: O(n) - where n is the number of elements in the Set
 * Space Complexity: O(n) - creates new array with all Set elements
 * Educational Compliance: ✅ Verified against FreeCodeCamp requirements
 */
function checkSet(set) {
  // Only change code below this line
  return [...set];
  // Only change code above this line
}

export default checkSet;
