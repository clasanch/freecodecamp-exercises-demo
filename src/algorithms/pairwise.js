/**
 * Pairwise Algorithm
 *
 * Given an array arr, find element pairs whose sum equal the second argument arg
 * and return the sum of their indices.
 *
 * Key constraints:
 * - Use lowest possible available indices for each pair
 * - Once an element is used, it cannot be reused
 * - Multiple pairs with same numeric elements but different indices are allowed
 *
 * Algorithm approach:
 * - Greedy approach: iterate left to right to ensure lowest indices priority
 * - For each unused element, find its complement in remaining unused elements
 * - Mark paired elements as used to prevent reuse
 * - Accumulate sum of all valid pair indices
 *
 * Time Complexity: O(n²) - nested iteration through array
 * Space Complexity: O(n) - boolean array for tracking used elements
 *
 * @param {number[]} arr - Array of numbers to search for pairs
 * @param {number} arg - Target sum for pairs
 * @returns {number} Sum of indices of all valid pairs, 0 if no pairs found
 *
 * @example
 * pairwise([1, 4, 2, 3, 0, 5], 7) // 11
 * // Pairs found: [4,3] at indices (1,3), [2,5] at indices (2,5)
 * // Index sum: 1+3+2+5 = 11
 *
 * @example
 * pairwise([1, 1, 1], 2) // 1
 * // Pair found: [1,1] at indices (0,1) - uses lowest available indices
 * // Index sum: 0+1 = 1
 */
function pairwise(arr, arg) {
  return findPairwiseSumOfIndices(arr, arg);
}

/**
 * Helper function to find pairs and calculate sum of indices
 * Separated for single responsibility and testability
 *
 * @param {number[]} arr - Array of numbers
 * @param {number} target - Target sum
 * @returns {number} Sum of indices of valid pairs
 */
function findPairwiseSumOfIndices(arr, target) {
  // Early return for edge cases
  if (arr.length < 2) {
    return 0;
  }

  // Track used indices to prevent element reuse
  const used = new Array(arr.length).fill(false);
  let sumOfIndices = 0;

  // Greedy search: iterate from left to ensure lowest indices priority
  for (let i = 0; i < arr.length - 1; i++) {
    if (used[i]) continue;

    // Find complement in remaining elements
    const complement = target - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (used[j]) continue;

      if (arr[j] === complement) {
        // Valid pair found: mark as used and add indices
        used[i] = true;
        used[j] = true;
        sumOfIndices += i + j;
        break; // Move to next i since current element is now used
      }
    }
  }

  return sumOfIndices;
}

export default pairwise;
