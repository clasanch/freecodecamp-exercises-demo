/**
 * Set Class with Difference Operation
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Prioritizes clarity and compliance over premature optimization.
 *
 * This implementation extends the basic Set class to include difference operations
 * between two sets, returning a new set containing elements present in the first
 * set that are absent in the second set.
 *
 * Key Design Decisions:
 * - Uses object dictionary for O(1) lookups instead of array O(n)
 * - Maintains length property for O(1) size operations
 * - FreeCodeCamp skeleton preserved exactly as specified with Object.keys()
 * - Dictionary stores boolean true values as per original skeleton
 * - Difference method creates new Set instance without modifying originals
 * - Asymmetric operation: setA.difference(setB) ≠ setB.difference(setA)
 * - Note: intersection() method in skeleton has unreachable code (lines 96-97) due to
 *   dictionary.length being undefined, but preserved for educational compliance
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
 * const differenceSet = setA.difference(setB); // ['c']
 *
 * Time Complexity: O(n) where n is the size of the first set
 * Space Complexity: O(k) where k is the number of unique elements in difference
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
  // This is our intersection method
  intersection(set) {
    const newSet = new Set();

    let largeSet;
    let smallSet;
    if (this.dictionary.length > set.length) {
      largeSet = this;
      smallSet = set;
    } else {
      largeSet = set;
      smallSet = this;
    }

    smallSet.values().forEach(value => {
      if (largeSet.dictionary[value]) {
        newSet.add(value);
      }
    });

    return newSet;
  }
  // Only change code below this line

  /**
   * Difference method - performs difference operation on two sets
   *
   * Creates a new set containing only elements that exist in this set
   * but do not exist in the other set. Does not modify original sets.
   * This is an asymmetric operation: setA.difference(setB) ≠ setB.difference(setA)
   *
   * Algorithm: O(n) time complexity where n is the size of this set.
   * Iterates through this set and checks non-membership in the other set.
   *
   * @param {Set} otherSet - The other set to compare against
   * @returns {Set} - A new Set containing the difference (this - otherSet)
   *
   * @example
   * // FreeCodeCamp required example
   * const setA = new Set();
   * setA.add('a'); setA.add('b'); setA.add('c');
   * const setB = new Set();
   * setB.add('a'); setB.add('b'); setB.add('d'); setB.add('e');
   * const differenceSet = setA.difference(setB); // ['c']
   * console.log(differenceSet.size()); // 1
   */
  difference(otherSet) {
    // Create a new Set for the difference result
    const differenceSet = new Set();

    // Get values from this set
    const thisValues = this.values();

    // For each element in this set, check if it's NOT in the other set
    for (const element of thisValues) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    }

    return differenceSet;
  }

  // Only change code above this line
}

export default Set;
