/**
 * Remove items from a set in ES6
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Creates a Set with integers 1, 2, 3, 4, & 5, removes values 2 and 5,
 * and returns the resulting set containing [1, 3, 4].
 *
 * Key Design Decisions:
 * - Preserves FreeCodeCamp skeleton exactly as provided
 * - Uses var declaration as required by educational skeleton
 * - Implements ES6 Set.delete() method for item removal
 * - Prioritizes educational clarity over optimization
 *
 * @returns {Set} Set containing values [1, 3, 4] after removals
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const result = checkSet();
 * console.log([...result]); // [1, 3, 4]
 *
 * Time Complexity: O(1) - Set.delete() is O(1) operation
 * Space Complexity: O(1) - Only removes items, no additional space
 * Educational Compliance: ✅ Verified against FreeCodeCamp skeleton
 */
function checkSet() {
  // Only change code below this line
  var set = new Set([1, 2, 3, 4, 5]); // eslint-disable-line no-var
  set.delete(2);
  set.delete(5);

  // Only change code above this line
  return set;
}

export default checkSet;
