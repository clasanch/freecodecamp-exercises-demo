/**
 * Insertion Sort Algorithm
 *
 * Builds a sorted array one element at a time by inserting each element
 * into its correct position within the already sorted portion of the array.
 *
 * Algorithm works by:
 * 1. Starting with the second element (index 1)
 * 2. Comparing it with elements to the left
 * 3. Shifting larger elements to the right
 * 4. Inserting the current element in the correct position
 * 5. Repeating for all remaining elements
 *
 * Time Complexity:
 * - Best case: O(n) - already sorted array
 * - Average case: O(n²) - random order
 * - Worst case: O(n²) - reverse sorted array
 *
 * Space Complexity: O(1) - in-place sorting with O(n) for creating new array
 *
 * @param {number[]} array - Array of integers to be sorted
 * @returns {number[]} New array with elements sorted in ascending order
 *
 * @example
 * insertionSort([5, 4, 33, 2, 8]) // [2, 4, 5, 8, 33]
 *
 * @example
 * insertionSort([64, 34, 25, 12, 22, 11, 90]) // [11, 12, 22, 25, 34, 64, 90]
 */
function insertionSort(array) {
  // Create a copy to avoid modifying the original array
  const result = [...array];

  // Start from second element (index 1)
  for (let i = 1; i < result.length; i++) {
    const currentElement = result[i];
    let j = i - 1;

    // Shift elements greater than currentElement to the right
    while (j >= 0 && result[j] > currentElement) {
      result[j + 1] = result[j];
      j--;
    }

    // Insert currentElement in its correct position
    result[j + 1] = currentElement;
  }

  return result;
}

export default insertionSort;
