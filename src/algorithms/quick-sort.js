/**
 * Quick Sort Algorithm
 *
 * Efficient divide-and-conquer sorting algorithm that selects a pivot element
 * and partitions the array around it, recursively sorting the subarrays.
 *
 * Algorithm works by:
 * 1. Choose a pivot element (first element for simplicity)
 * 2. Partition array: elements < pivot go left, elements > pivot go right
 * 3. Recursively apply quickSort to both left and right subarrays
 * 4. Combine results: left + [pivot] + right
 * 5. Base case: arrays with 0 or 1 elements are already sorted
 *
 * Time Complexity:
 * - Best case: O(n log n) - balanced partitions
 * - Average case: O(n log n) - random pivot selection
 * - Worst case: O(n²) - consistently unbalanced partitions (sorted array with first pivot)
 *
 * Space Complexity: O(log n) average case due to recursion stack, O(n) worst case
 *
 * @param {number[]} array - Array of numbers to be sorted
 * @returns {number[]} New array with elements sorted in ascending order
 *
 * @example
 * quickSort([3, 1, 4, 1, 5]) // [1, 1, 3, 4, 5]
 *
 * @example
 * quickSort([64, 34, 25, 12, 22, 11, 90]) // [11, 12, 22, 25, 34, 64, 90]
 *
 * @example
 * quickSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 */
function quickSort(array) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (array.length <= 1) {
    return [...array];
  }

  // Create a copy to avoid modifying the original array
  const workingArray = [...array];

  // Choose pivot (first element for simplicity)
  const pivot = workingArray[0];
  const left = [];
  const right = [];

  // Partition: iterate from second element (index 1)
  for (let i = 1; i < workingArray.length; i++) {
    if (workingArray[i] < pivot) {
      left.push(workingArray[i]);
    } else {
      right.push(workingArray[i]);
    }
  }

  // Recursive calls and combine results
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;
