/**
 * Symmetric Difference Algorithm
 *
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements
 * which are in either of the two sets but not in both.
 *
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 *
 * This function takes two or more arrays and returns an array of their symmetric difference.
 * The returned array contains only unique values (no duplicates).
 *
 * @param {...Array} args - Two or more arrays to find symmetric difference
 * @returns {Array} Array containing unique elements from symmetric difference
 *
 * @example
 * sym([1, 2, 3], [5, 2, 1, 4]) // returns [3, 4, 5]
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // returns [1, 4, 5]
 */
function sym(...args) {
  /**
   * Gets the symmetric difference between two arrays
   * @param {Array} arr1 - First array
   * @param {Array} arr2 - Second array
   * @returns {Array} Array with unique elements present in one or the other, but not both
   */
  function getSymmetricDifference(arr1, arr2) {
    // Convert arrays to Sets to remove duplicates and optimize lookups O(1)
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Get exclusive elements from each set
    const uniqueFromFirst = [...set1].filter(element => !set2.has(element));
    const uniqueFromSecond = [...set2].filter(element => !set1.has(element));

    // Combine and remove final duplicates (though there shouldn't be any)
    return [...new Set([...uniqueFromFirst, ...uniqueFromSecond])];
  }

  // Apply symmetric difference sequentially using reduce
  // Processes: (A △ B) △ C △ D...
  return args.reduce(getSymmetricDifference);
}

export default sym;
