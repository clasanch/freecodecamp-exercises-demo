/**
 * Tests for Quick Sort Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Algorithm Description:
 * Quick Sort is a divide-and-conquer algorithm that picks a pivot element
 * and partitions the array around the pivot, recursively sorting subarrays.
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(log n) average case due to recursion stack
 */

import quickSort from '../../src/algorithms/quick-sort.js';

describe('Quick Sort Algorithm', () => {
  describe('Function validation', () => {
    test('should be a function', () => {
      expect(typeof quickSort).toBe('function');
    });
  });

  describe('Basic sorting functionality', () => {
    test('should return a sorted array (least to greatest)', () => {
      const input = [64, 34, 25, 12, 22, 11, 90];
      const result = quickSort(input);
      const expected = [11, 12, 22, 25, 34, 64, 90];

      expect(result).toEqual(expected);
    });

    test('should handle the required test case from FreeCodeCamp', () => {
      const input = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
      const result = quickSort(input);

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
      const result = quickSort(input);

      expect(result).toEqual([2, 5]);
    });

    test('should handle array with three elements', () => {
      const input = [3, 1, 2];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('Edge cases and special scenarios', () => {
    test('should handle empty array', () => {
      const input = [];
      const result = quickSort(input);

      expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
      const input = [42];
      const result = quickSort(input);

      expect(result).toEqual([42]);
    });

    test('should handle already sorted array', () => {
      const input = [1, 2, 3, 4, 5];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle reverse sorted array', () => {
      const input = [5, 4, 3, 2, 1];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle array with all identical elements', () => {
      const input = [7, 7, 7, 7, 7];
      const result = quickSort(input);

      expect(result).toEqual([7, 7, 7, 7, 7]);
    });

    test('should handle array with negative numbers', () => {
      const input = [-3, -1, -4, -1, -5, -9, -2, -6];
      const result = quickSort(input);

      expect(result).toEqual([-9, -6, -5, -4, -3, -2, -1, -1]);
    });

    test('should handle mixed positive and negative numbers', () => {
      const input = [3, -1, 4, -1, 5, -9, 2, -6];
      const result = quickSort(input);

      expect(result).toEqual([-9, -6, -1, -1, 2, 3, 4, 5]);
    });
  });

  describe('Data integrity and implementation requirements', () => {
    test('should not modify the original array', () => {
      const input = [3, 1, 4, 1, 5];
      const originalInput = [...input];

      quickSort(input);

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
      quickSort(input);

      // Restore original method
      Array.prototype.sort = originalSort;

      expect(sortCalled).toBe(false);
    });

    test('should handle arrays with floating point numbers', () => {
      const input = [3.14, 2.71, 1.41, 1.73];
      const result = quickSort(input);

      expect(result).toEqual([1.41, 1.73, 2.71, 3.14]);
    });

    test('should handle arrays with duplicate values', () => {
      const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
      const result = quickSort(input);

      expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]);
    });
  });

  describe('Divide-and-conquer algorithm verification', () => {
    test('should properly handle pivot partitioning with different pivot positions', () => {
      // Test multiple scenarios that would test different pivot behaviors
      const testCases = [
        [1, 3, 2], // pivot as middle
        [3, 1, 2], // pivot as first (larger)
        [2, 3, 1], // pivot as first (smaller)
        [1, 2, 3, 4, 5], // already sorted
        [5, 4, 3, 2, 1], // reverse sorted
      ];

      testCases.forEach(input => {
        const result = quickSort(input);
        const expected = [...input].sort((a, b) => a - b);
        expect(result).toEqual(expected);
      });
    });

    test('should handle recursive calls correctly', () => {
      // Test case that would require multiple levels of recursion
      const input = [8, 3, 5, 4, 7, 6, 1, 2];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Performance considerations', () => {
    test('should handle moderately large arrays efficiently', () => {
      // Generate array of 1000 random integers
      const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

      const startTime = Date.now();
      const result = quickSort(input);
      const endTime = Date.now();

      // Should complete within reasonable time (generous limit for CI)
      expect(endTime - startTime).toBeLessThan(100); // 100ms

      // Verify correctness
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
      }
    });

    test('should handle best case scenario (balanced partitions)', () => {
      // Array that would create balanced partitions with first element as pivot
      const input = [5, 3, 7, 1, 4, 6, 8, 2];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('should handle worst case scenario (already sorted with first pivot)', () => {
      // This could be O(n²) if pivot selection is poor, but should still work
      const input = [1, 2, 3, 4, 5, 6, 7, 8];
      const result = quickSort(input);

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
