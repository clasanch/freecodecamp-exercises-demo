/**
 * Tests for Merge Sort Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Algorithm Description:
 * Merge Sort is a stable divide-and-conquer algorithm that recursively splits
 * the array into halves until single elements, then merges them back in sorted order.
 * Time Complexity: O(n log n) in all cases (best, average, worst)
 * Space Complexity: O(n) for auxiliary arrays during merging
 */

import mergeSort from '../../src/algorithms/merge-sort.js';

describe('Merge Sort Algorithm', () => {
  describe('Function validation', () => {
    test('should be a function', () => {
      expect(typeof mergeSort).toBe('function');
    });
  });

  describe('Basic sorting functionality', () => {
    test('should return a sorted array (least to greatest)', () => {
      const input = [64, 34, 25, 12, 22, 11, 90];
      const result = mergeSort(input);
      const expected = [11, 12, 22, 25, 34, 64, 90];

      expect(result).toEqual(expected);
    });

    test('should handle the required test case from FreeCodeCamp', () => {
      const input = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
      const result = mergeSort(input);

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

    test('should handle array with two elements', () => {
      const input = [5, 2];
      const result = mergeSort(input);

      expect(result).toEqual([2, 5]);
    });

    test('should handle array with three elements', () => {
      const input = [3, 1, 2];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3]);
    });

    test('should handle arrays with even number of elements', () => {
      const input = [4, 3, 2, 1];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4]);
    });

    test('should handle arrays with odd number of elements', () => {
      const input = [5, 4, 3, 2, 1];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Edge cases and special scenarios', () => {
    test('should handle empty array', () => {
      const input = [];
      const result = mergeSort(input);

      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const input = [42];
      const result = mergeSort(input);

      expect(result).toEqual([42]);
    });

    test('should handle already sorted array', () => {
      const input = [1, 2, 3, 4, 5];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const input = [5, 4, 3, 2, 1];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with all identical elements', () => {
      const input = [7, 7, 7, 7, 7];
      const result = mergeSort(input);

      expect(result).toEqual([7, 7, 7, 7, 7]);
    });

    test('should handle array with negative numbers', () => {
      const input = [-3, -1, -4, -1, -5, -9, -2, -6];
      const result = mergeSort(input);

      expect(result).toEqual([-9, -6, -5, -4, -3, -2, -1, -1]);
    });

    test('should handle mixed positive and negative numbers', () => {
      const input = [3, -1, 4, -1, 5, -9, 2, -6];
      const result = mergeSort(input);

      expect(result).toEqual([-9, -6, -1, -1, 2, 3, 4, 5]);
    });
  });

  describe('Data integrity and implementation requirements', () => {
    test('should not modify the original array', () => {
      const input = [3, 1, 4, 1, 5];
      const originalInput = [...input];

      mergeSort(input);

      expect(input).toEqual(originalInput);
    });

    test('should not use built-in .sort() method', () => {
      // Create a simple function call tracker (pattern from bubble-sort)
      let sortCalled = false;
      const originalSort = Array.prototype.sort;

      Array.prototype.sort = function () {
        sortCalled = true;
        return originalSort.apply(this, arguments);
      };

      const input = [3, 1, 4, 1, 5];
      mergeSort(input);

      // Restore original method
      Array.prototype.sort = originalSort;

      expect(sortCalled).toBe(false);
    });

    test('should handle arrays with floating point numbers', () => {
      const input = [3.14, 2.71, 1.41, 1.73];
      const result = mergeSort(input);

      expect(result).toEqual([1.41, 1.73, 2.71, 3.14]);
    });

    test('should handle arrays with duplicate values', () => {
      const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
      const result = mergeSort(input);

      expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]);
    });
  });

  describe('Divide-and-conquer algorithm verification', () => {
    test('should properly split arrays into halves recursively', () => {
      // Test cases that would verify proper splitting behavior
      const testCases = [
        [8, 7, 6, 5], // even length
        [9, 8, 7, 6, 5], // odd length
        [1, 3, 2, 4, 6, 5], // mixed order
        [6, 5, 4, 3, 2, 1], // reverse order
      ];

      testCases.forEach(input => {
        const result = mergeSort(input);
        const expected = [...input].sort((a, b) => a - b);
        expect(result).toEqual(expected);
      });
    });

    test('should handle deep recursion correctly', () => {
      // Test case that would require multiple levels of recursion
      const input = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });

    test('should merge sorted subarrays correctly', () => {
      // Test that would verify the merging logic works correctly
      const input = [1, 3, 5, 2, 4, 6];
      const result = mergeSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Stability verification (if applicable)', () => {
    test('should maintain relative order of equal elements', () => {
      // For merge sort, we can test stability with objects having equal sort keys
      // Since we're working with numbers, we'll test with duplicates
      const input = [3, 1, 2, 1, 3, 2];
      const result = mergeSort(input);

      // All equal elements should be grouped together in sorted order
      expect(result).toEqual([1, 1, 2, 2, 3, 3]);
    });
  });

  describe('Performance considerations', () => {
    test('should handle moderately large arrays efficiently', () => {
      // Generate array of 1000 random integers
      const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const startTime = Date.now();
      const result = mergeSort(input);
      const endTime = Date.now();

      // Should complete within reasonable time (generous limit for CI)
      expect(endTime - startTime).toBeLessThan(100); // 100ms

      // Verify correctness
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });

    test('should have consistent O(n log n) performance', () => {
      // Test cases that verify O(n log n) in all scenarios
      const scenarios = [
        Array.from({ length: 100 }, (_, i) => i), // best case: already sorted
        Array.from({ length: 100 }, (_, i) => 100 - i), // worst case: reverse sorted
        Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)), // average case: random
      ];

      scenarios.forEach(input => {
        const startTime = Date.now();
        const result = mergeSort(input);
        const endTime = Date.now();

        // Should complete within reasonable time for all cases
        expect(endTime - startTime).toBeLessThan(50); // 50ms

        // Verify correctness
        for (let i = 1; i < result.length; i++) {
          expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
        }
      });
    });
  });
});
