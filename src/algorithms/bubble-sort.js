/**
 * Bubble Sort Algorithm
 *
 * Time Complexity: O(n²) - quadratic time complexity for average and worst cases
 * Space Complexity: O(1) - sorts in-place with constant extra space
 *
 * The bubble sort method starts at the beginning of an unsorted array and 'bubbles up'
 * unsorted values towards the end, iterating through the array until it is completely sorted.
 * It does this by comparing adjacent items and swapping them if they are out of order.
 *
 * @param {number[]} array - Array of integers to be sorted
 * @returns {number[]} New array with integers sorted from least to greatest
 *
 * @example
 * bubbleSort([64, 34, 25, 12, 22, 11, 90]) // [11, 12, 22, 25, 34, 64, 90]
 * bubbleSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 * bubbleSort([]) // []
 */
function bubbleSort(array) {
  // Only change code below this line

  // Handle edge cases
  if (array.length <= 1) {
    return [...array];
  }

  // Create a copy to avoid mutating the original array
  const sortedArray = [...array];
  const n = sortedArray.length;

  // Bubble sort implementation
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (sortedArray[j] > sortedArray[j + 1]) {
        // Swap if they are in wrong order
        swap(sortedArray, j, j + 1);
        swapped = true;
      }
    }

    // If no swapping occurred, array is sorted
    if (!swapped) {
      break;
    }
  }

  return sortedArray;

  // Only change code above this line
}

/**
 * Helper function to swap two elements in an array
 * @param {number[]} arr - Array containing elements to swap
 * @param {number} i - Index of first element
 * @param {number} j - Index of second element
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default bubbleSort;
