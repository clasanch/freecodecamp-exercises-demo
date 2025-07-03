/**
 * Binary Search Algorithm
 *
 * Efficient O(log n) algorithm for searching a sorted array by repeatedly
 * halving the search space. Returns the path of middle values examined
 * during the search process.
 *
 * Algorithm works by:
 * 1. Find middle value of current search range
 * 2. Compare middle value with target
 * 3. If equal, target found - add to path and return
 * 4. If middle < target, search right half
 * 5. If middle > target, search left half
 * 6. Repeat until found or search space exhausted
 *
 * Time Complexity: O(log n) - halves search space each iteration
 * Space Complexity: O(1) - iterative implementation with constant space
 *
 * @param {number[]} searchList - Sorted array of numbers to search
 * @param {number} value - Target value to find
 * @returns {number[]|string} Array of middle values examined, or "Value Not Found"
 *
 * @example
 * binarySearch([1, 2, 3, 4, 5, 6, 7], 5) // [4, 6, 5]
 *
 * @example
 * binarySearch([0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70], 0)
 * // [13, 5, 2, 0]
 *
 * @example
 * binarySearch([1, 2, 3, 4, 5], 6) // "Value Not Found"
 */
function binarySearch(searchList, value) {
  const arrayPath = [];
  let left = 0;
  let right = searchList.length - 1;

  // Continue searching while there's a valid range
  while (left <= right) {
    // Calculate middle index using Math.floor for consistent behavior
    const middle = Math.floor((left + right) / 2);
    const middleValue = searchList[middle];

    // Add middle value to path
    arrayPath.push(middleValue);

    // Check if we found the target
    if (middleValue === value) {
      return arrayPath;
    }

    // Adjust search range based on comparison
    if (middleValue < value) {
      // Target is in right half
      left = middle + 1;
    } else {
      // Target is in left half
      right = middle - 1;
    }
  }

  // Value not found after exhausting search space
  return 'Value Not Found';
}

export default binarySearch;
