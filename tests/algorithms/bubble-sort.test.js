/**
 * Tests for Bubble Sort Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Bubble Sort: O(n²) time complexity sorting algorithm
 * Compares adjacent elements and swaps them if they're in wrong order
 */

import bubbleSort from '../../src/algorithms/bubble-sort.js';

describe('Bubble Sort', () => {
  describe('Function validation', () => {
    test('bubbleSort should be a function', () => {
      expect(typeof bubbleSort).toBe('function');
    });
  });

  describe('Basic sorting functionality', () => {
    test('should return a sorted array from least to greatest', () => {
      const input = [64, 34, 25, 12, 22, 11, 90];
      const expected = [11, 12, 22, 25, 34, 64, 90];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle single element array', () => {
      const input = [42];
      const expected = [42];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle empty array', () => {
      const input = [];
      const expected = [];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle already sorted array', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle reverse sorted array', () => {
      const input = [5, 4, 3, 2, 1];
      const expected = [1, 2, 3, 4, 5];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });
  });

  describe('Data integrity and immutability', () => {
    test('should return array with same elements (FreeCodeCamp requirement)', () => {
      const input = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
      const result = bubbleSort(input);

      // Sort both arrays to compare content regardless of order
      const sortedInput = [...input].sort((a, b) => a - b);
      const sortedResult = [...result].sort((a, b) => a - b);

      expect(sortedResult).toEqual(sortedInput);
      expect(result).toHaveLength(input.length);
    });

    test('should not modify original array', () => {
      const input = [3, 1, 4, 1, 5];
      const originalInput = [...input];

      bubbleSort(input);

      expect(input).toEqual(originalInput);
    });
  });

  describe('Edge cases and duplicates', () => {
    test('should handle array with duplicate values', () => {
      const input = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const expected = [1, 1, 2, 3, 4, 5, 5, 6, 9];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle array with all same values', () => {
      const input = [7, 7, 7, 7, 7];
      const expected = [7, 7, 7, 7, 7];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });

    test('should handle negative numbers', () => {
      const input = [-3, 1, -4, 1, 5];
      const expected = [-4, -3, 1, 1, 5];
      const result = bubbleSort(input);

      expect(result).toEqual(expected);
    });
  });

  describe('Implementation constraints', () => {
    test('should not use built-in .sort() method', () => {
      // Create a simple function call tracker instead of spy (due to ESM limitations)
      let sortCalled = false;
      const originalSort = Array.prototype.sort;

      Array.prototype.sort = function () {
        sortCalled = true;
        return originalSort.apply(this, arguments);
      };

      const input = [3, 1, 4, 1, 5];
      bubbleSort(input);

      // Restore original method
      Array.prototype.sort = originalSort;

      expect(sortCalled).toBe(false);
    });
  });
});
