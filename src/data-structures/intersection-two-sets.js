/**
 * Set Class with Intersection Operation
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Prioritizes clarity and compliance over premature optimization.
 *
 * This implementation extends the basic Set class to include intersection operations
 * between two sets, returning a new set containing only elements common to both sets.
 *
 * Key Design Decisions:
 * - Uses object dictionary for O(1) lookups instead of array O(n)
 * - Maintains length property for O(1) size operations
 * - FreeCodeCamp skeleton preserved exactly as specified with Object.keys()
 * - Dictionary stores boolean true values as per original skeleton
 * - Intersection method creates new Set instance without modifying originals
 * - Optimized to iterate over smaller set for better performance
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const setA = new Set();
 * setA.add('a');
 * setA.add('b');
 * setA.add('c');
 *
 * const setB = new Set();
 * setB.add('a');
 * setB.add('b');
 * setB.add('d');
 * setB.add('e');
 *
 * const intersectionSet = setA.intersection(setB); // ['a', 'b']
 *
 * Time Complexity: O(min(n, m)) where n and m are sizes of the two sets
 * Space Complexity: O(min(n, m)) for the new intersection set
 * Educational Compliance: ✅ Preserves exact FreeCodeCamp skeleton structure
 */

class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    });
    set.values().forEach(value => {
      newSet.add(value);
    });

    return newSet;
  }
  // Only change code below this line

  /**
   * Intersection method - performs intersection operation on two sets
   *
   * Creates a new set containing only elements that exist in both this set
   * and the other set. Does not modify original sets.
   *
   * Algorithm: O(min(n, m)) time complexity where n and m are the sizes of the sets.
   * Iterates through the smaller set and checks membership in the larger set.
   *
   * @param {Set} otherSet - The other set to intersect with
   * @returns {Set} - A new Set containing the intersection of both sets
   *
   * @example
   * // FreeCodeCamp required example
   * const setA = new Set();
   * setA.add('a'); setA.add('b'); setA.add('c');
   * const setB = new Set();
   * setB.add('a'); setB.add('b'); setB.add('d'); setB.add('e');
   * const intersectionSet = setA.intersection(setB); // ['a', 'b']
   * console.log(intersectionSet.size()); // 2
   */
  intersection(otherSet) {
    // Create a new Set for the intersection result
    const intersectionSet = new Set();

    // Optimize by iterating over the smaller set
    // This reduces time complexity from O(max(n,m)) to O(min(n,m))
    const smallerSet = this.size() <= otherSet.size() ? this : otherSet;
    const largerSet = this.size() <= otherSet.size() ? otherSet : this;

    // Get values from the smaller set
    const smallerValues = smallerSet.values();

    // For each element in the smaller set, check if it exists in the larger set
    for (const element of smallerValues) {
      if (largerSet.has(element)) {
        intersectionSet.add(element);
      }
    }

    return intersectionSet;
  }

  // Only change code above this line
}

export default Set;
