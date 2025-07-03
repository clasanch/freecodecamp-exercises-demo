/**
 * Selection Sort Algorithm Implementation
 *
 * Selection sort works by finding the minimum element from the unsorted portion
 * and placing it at the beginning. It maintains two subarrays: sorted and unsorted.
 *
 * Time Complexity: O(n²) for all cases (best, average, worst)
 * Space Complexity: O(1) - in-place sorting algorithm
 *
 * Algorithm Steps:
 * 1. Find the minimum element in the unsorted array
 * 2. Swap it with the first element of the unsorted portion
 * 3. Move the boundary between sorted and unsorted portions
 * 4. Repeat until the entire array is sorted
 *
 * @param {number[]} array - Array of integers to sort
 * @returns {number[]} New sorted array from least to greatest
 *
 * @example
 * selectionSort([64, 34, 25, 12, 22, 11, 90]) // [11, 12, 22, 25, 34, 64, 90]
 * selectionSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 * selectionSort([]) // []
 */
function selectionSort(array) {
  // Only change code below this line

  // Create immutable copy - handles edge cases naturally
  const result = [...array];
  const length = result.length;

  // Selection sort: find minimum and place at correct position
  for (let currentIndex = 0; currentIndex < length - 1; currentIndex++) {
    const minIndex = findMinimumIndex(result, currentIndex, length);

    // Swap only if minimum is not already in place
    if (minIndex !== currentIndex) {
      swapElements(result, currentIndex, minIndex);
    }
  }

  return result;

  // Only change code above this line
}

/**
 * Finds the index of the minimum element in the unsorted portion
 * @param {number[]} array - Array to search
 * @param {number} startIndex - Starting index for search
 * @param {number} endIndex - Ending index for search
 * @returns {number} Index of minimum element
 */
function findMinimumIndex(array, startIndex, endIndex) {
  let minIndex = startIndex;

  for (let i = startIndex + 1; i < endIndex; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

/**
 * Swaps two elements in an array using ES6 destructuring
 * @param {number[]} array - Array containing elements to swap
 * @param {number} firstIndex - Index of first element
 * @param {number} secondIndex - Index of second element
 */
function swapElements(array, firstIndex, secondIndex) {
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

export default selectionSort;
