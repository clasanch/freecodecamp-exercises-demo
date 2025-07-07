/**
 * Create and Add to Sets in ES6
 *
 * Educational implementation demonstrating ES6 Set native capabilities.
 * This exercise shows the simplicity of ES6 Set compared to custom ES5 implementations.
 *
 * Key Educational Points:
 * - ES6 Set automatically handles duplicates
 * - Set.add() method for adding individual values
 * - Set constructor can accept arrays
 * - Native Set API is much simpler than custom implementation
 *
 * @returns {Set} Set containing values: 1, 2, 3, 'Taco', 'Cat', 'Awesome'
 *
 * @example
 * const result = checkSet();
 * console.log(Array.from(result)); // [1, 2, 3, 'Taco', 'Cat', 'Awesome']
 *
 * Time Complexity: O(1) for each add operation
 * Space Complexity: O(n) where n is the number of unique elements
 * Educational Compliance: ✅ Uses FreeCodeCamp skeleton exactly
 */
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]); // eslint-disable-line no-var
  // Only change code below this line
  set.add('Taco');
  set.add('Cat');
  set.add('Awesome');
  // Only change code above this line
  console.log(Array.from(set)); // eslint-disable-line no-console
  return set;
}

checkSet();

export default checkSet;
