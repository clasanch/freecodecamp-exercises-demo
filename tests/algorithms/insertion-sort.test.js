/**
 * Tests for Insertion Sort Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Algorithm Description:
 * Insertion Sort builds a sorted array one element at a time by inserting
 * each element into its correct position within the already sorted portion.
 * Time Complexity: O(n²) average and worst case, O(n) best case
 * Space Complexity: O(1) - in-place sorting
 */

import insertionSort from '../../src/algorithms/insertion-sort.js';

describe('Insertion Sort Algorithm', () => {
  describe('Function validation', () => {
    test('should be a function', () => {
      expect(typeof insertionSort).toBe('function');
    });
  });

  describe('Basic sorting functionality', () => {
    test('should return a sorted array (least to greatest)', () => {
      const input = [64, 34, 25, 12, 22, 11, 90];
      const result = insertionSort(input);
      const expected = [11, 12, 22, 25, 34, 64, 90];

      expect(result).toEqual(expected);
    });

    test('should handle the required test case [5, 4, 33, 2, 8]', () => {
      const input = [5, 4, 33, 2, 8];
      const result = insertionSort(input);
      const expected = [2, 4, 5, 8, 33];

      expect(result).toEqual(expected);
    });

    test('should handle large array with duplicates', () => {
      const input = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
      const result = insertionSort(input);

      // Should be sorted
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }

      // Should contain same elements (unchanged except for order)
      expect(result).toHaveLength(input.length);

      // Check that all original elements are present
      const inputSorted = [...input].sort((a, b) => a - b);
      expect(result).toEqual(inputSorted);
    });
  });

  describe('Edge cases and special scenarios', () => {
    test('should handle empty array', () => {
      const input = [];
      const result = insertionSort(input);

      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const input = [42];
      const result = insertionSort(input);

      expect(result).toEqual([42]);
    });

    test('should handle already sorted array', () => {
      const input = [1, 2, 3, 4, 5];
      const result = insertionSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const input = [5, 4, 3, 2, 1];
      const result = insertionSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with all identical elements', () => {
      const input = [7, 7, 7, 7, 7];
      const result = insertionSort(input);

      expect(result).toEqual([7, 7, 7, 7, 7]);
    });

    test('should handle array with negative numbers', () => {
      const input = [-3, -1, -4, -1, -5, -9, -2, -6];
      const result = insertionSort(input);

      expect(result).toEqual([-9, -6, -5, -4, -3, -2, -1, -1]);
    });

    test('should handle mixed positive and negative numbers', () => {
      const input = [3, -1, 4, -1, 5, -9, 2, -6];
      const result = insertionSort(input);

      expect(result).toEqual([-9, -6, -1, -1, 2, 3, 4, 5]);
    });
  });

  describe('Data integrity and implementation requirements', () => {
    test('should not modify the original array', () => {
      const input = [3, 1, 4, 1, 5];
      const originalInput = [...input];

      insertionSort(input);

      expect(input).toEqual(originalInput);
    });

    test('should not use built-in .sort() method', () => {
      // Create a simple function call tracker instead of spy (due to ESM limitations)
      let sortCalled = false;
      const originalSort = Array.prototype.sort;

      Array.prototype.sort = function () {
        sortCalled = true;
        return originalSort.apply(this, arguments);
      };

      const input = [3, 1, 4, 1, 5];
      insertionSort(input);

      // Restore original method
      Array.prototype.sort = originalSort;

      expect(sortCalled).toBe(false);
    });

    test('should handle arrays with floating point numbers', () => {
      const input = [3.14, 2.71, 1.41, 1.73];
      const result = insertionSort(input);

      expect(result).toEqual([1.41, 1.73, 2.71, 3.14]);
    });
  });

  describe('Performance considerations', () => {
    test('should handle moderately large arrays efficiently', () => {
      // Generate array of 1000 random integers
      const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const startTime = Date.now();
      const result = insertionSort(input);
      const endTime = Date.now();

      // Should complete within reasonable time (generous limit for CI)
      expect(endTime - startTime).toBeLessThan(100); // 100ms

      // Verify correctness
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });
  });
});
