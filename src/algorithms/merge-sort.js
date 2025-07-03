/**
 * Merge Sort Algorithm
 *
 * Stable divide-and-conquer sorting algorithm that recursively splits arrays
 * into halves until single elements, then merges them back in sorted order.
 *
 * Algorithm works by:
 * 1. Divide: Split array into two halves recursively until single elements
 * 2. Conquer: Single element arrays are naturally sorted (base case)
 * 3. Combine: Merge sorted halves back together maintaining order
 *
 * Time Complexity: O(n log n) in all cases (best, average, worst)
 * - log n levels of recursion, each level processes n elements
 * - Consistent performance regardless of input order
 *
 * Space Complexity: O(n) for auxiliary arrays during merging
 *
 * @param {number[]} array - Array of numbers to be sorted
 * @returns {number[]} New array with elements sorted in ascending order
 *
 * @example
 * mergeSort([3, 1, 4, 1, 5]) // [1, 1, 3, 4, 5]
 *
 * @example
 * mergeSort([64, 34, 25, 12, 22, 11, 90]) // [11, 12, 22, 25, 34, 64, 90]
 *
 * @example
 * mergeSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 */
function mergeSort(array) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (array.length <= 1) {
    return [...array];
  }

  // Divide: Split array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Conquer: Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combine: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

/**
 * Merge two sorted arrays into a single sorted array
 *
 * @param {number[]} left - First sorted array
 * @param {number[]} right - Second sorted array
 * @returns {number[]} Merged sorted array
 *
 * @example
 * merge([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]
 */
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add smaller one to result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from left array (if any)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from right array (if any)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

export default mergeSort;
