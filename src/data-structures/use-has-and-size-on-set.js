/**
 * Use .has and .size on an ES6 Set
 *
 * Educational implementation demonstrating ES6 Set native methods (.has and .size).
 * This exercise focuses on using built-in Set functionality rather than implementing
 * custom Set behavior.
 *
 * Key Design Decisions:
 * - Uses native ES6 Set constructor with array parameter
 * - Leverages Set.prototype.has() for O(1) value checking
 * - Uses Set.prototype.size property for instant size retrieval
 * - Returns results as array format [hasValue, setSize] as specified
 * - Preserves FreeCodeCamp skeleton structure exactly
 *
 * @param {Array} arrToBeSet - Array to convert to ES6 Set
 * @param {*} checkValue - Value to check for existence in the Set
 * @returns {Array} Array containing [boolean, number] - [hasValue, setSize]
 *
 * @example
 * // FreeCodeCamp compatible usage
 * checkSet([4, 5, 6], 3); // returns [false, 3]
 * checkSet([1, 2, 3], 2); // returns [true, 3]
 * checkSet([1, 1, 2], 1); // returns [true, 2] (Set removes duplicates)
 *
 * Time Complexity: O(n) - for Set creation from array
 * Space Complexity: O(n) - for Set storage (unique values only)
 * Educational Compliance: ✅ Preserves FreeCodeCamp skeleton exactly
 */
function checkSet(arrToBeSet, checkValue) {
  // Only change code below this line

  // Create ES6 Set from array parameter and return [has, size]
  const set = new Set(arrToBeSet);
  return [set.has(checkValue), set.size];

  // Only change code above this line
}

export default checkSet;
