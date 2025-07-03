/**
 * Tests for Binary Search Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Algorithm Description:
 * Binary Search is an efficient O(log n) algorithm for searching sorted arrays.
 * It works by repeatedly halving the search space and comparing the middle element
 * with the target value, returning the path of middle values examined.
 * Time Complexity: O(log n)
 * Space Complexity: O(1) for iterative, O(log n) for recursive
 */

import binarySearch from '../../src/algorithms/binary-search.js';

// Test array as specified in FreeCodeCamp requirements
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70,
];

describe('Binary Search Algorithm', () => {
  describe('Function validation', () => {
    test('should be a function', () => {
      expect(typeof binarySearch).toBe('function');
    });
  });

  describe('FreeCodeCamp required test cases', () => {
    test('binarySearch(testArray, 0) should return [13, 5, 2, 0]', () => {
      const result = binarySearch(testArray, 0);
      expect(result).toEqual([13, 5, 2, 0]);
    });

    test('binarySearch(testArray, 1) should return [13, 5, 2, 0, 1]', () => {
      const result = binarySearch(testArray, 1);
      expect(result).toEqual([13, 5, 2, 0, 1]);
    });

    test('binarySearch(testArray, 2) should return [13, 5, 2]', () => {
      const result = binarySearch(testArray, 2);
      expect(result).toEqual([13, 5, 2]);
    });

    test('binarySearch(testArray, 6) should return "Value Not Found"', () => {
      const result = binarySearch(testArray, 6);
      expect(result).toBe('Value Not Found');
    });

    test('binarySearch(testArray, 11) should return [13, 5, 10, 11]', () => {
      const result = binarySearch(testArray, 11);
      expect(result).toEqual([13, 5, 10, 11]);
    });

    test('binarySearch(testArray, 13) should return [13]', () => {
      const result = binarySearch(testArray, 13);
      expect(result).toEqual([13]);
    });

    test('binarySearch(testArray, 70) should return [13, 19, 22, 49, 70]', () => {
      const result = binarySearch(testArray, 70);
      expect(result).toEqual([13, 19, 22, 49, 70]);
    });
  });

  describe('Edge cases and additional scenarios', () => {
    test('should handle empty array', () => {
      const result = binarySearch([], 5);
      expect(result).toBe('Value Not Found');
    });

    test('should handle single element array - target found', () => {
      const result = binarySearch([42], 42);
      expect(result).toEqual([42]);
    });

    test('should handle single element array - target not found', () => {
      const result = binarySearch([42], 10);
      expect(result).toBe('Value Not Found');
    });

    test('should handle two element array - first element', () => {
      const result = binarySearch([1, 3], 1);
      expect(result).toEqual([1]);
    });

    test('should handle two element array - second element', () => {
      const result = binarySearch([1, 3], 3);
      expect(result).toEqual([1, 3]);
    });

    test('should handle two element array - not found', () => {
      const result = binarySearch([1, 3], 2);
      expect(result).toBe('Value Not Found');
    });

    test('should find first element in larger array', () => {
      const arr = [1, 3, 5, 7, 9, 11, 13, 15];
      const result = binarySearch(arr, 1);
      expect(result).toEqual([7, 3, 1]);
    });

    test('should find last element in larger array', () => {
      const arr = [1, 3, 5, 7, 9, 11, 13, 15];
      const result = binarySearch(arr, 15);
      expect(result).toEqual([7, 11, 13, 15]);
    });
  });

  describe('Path tracking validation', () => {
    test('should track correct path for left-side search', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const result = binarySearch(arr, 2);
      // Middle at index 3 (value 4), then left half middle at index 1 (value 2)
      expect(result).toEqual([4, 2]);
    });

    test('should track correct path for right-side search', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const result = binarySearch(arr, 7);
      // Middle at index 3 (value 4), then right half middle at index 5 (value 6), then right again
      expect(result).toEqual([4, 6, 7]);
    });

    test('should include target value as last element in path', () => {
      const arr = [10, 20, 30, 40, 50];
      const result = binarySearch(arr, 30);
      expect(result[result.length - 1]).toBe(30);
    });

    test('should track complete path for deep search', () => {
      // Array with 16 elements to test deeper recursion
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      const result = binarySearch(arr, 1);
      // Should show path of middle values examined
      expect(Array.isArray(result)).toBe(true);
      expect(result[result.length - 1]).toBe(1);
    });
  });

  describe('Math.floor() requirement validation', () => {
    test('should use Math.floor() for consistent halving with odd-length arrays', () => {
      // Test with odd-length array to verify Math.floor() behavior
      const arr = [1, 2, 3, 4, 5];
      const result = binarySearch(arr, 1);
      // With Math.floor(), middle of [1,2,3,4,5] should be index 2 (value 3)
      expect(result[0]).toBe(3);
    });

    test('should use Math.floor() for consistent halving with even-length arrays', () => {
      // Test with even-length array to verify Math.floor() behavior
      const arr = [1, 2, 3, 4];
      const result = binarySearch(arr, 1);
      // With Math.floor(), middle of [1,2,3,4] should be index 1 (value 2)
      expect(result[0]).toBe(2);
    });
  });

  describe('Algorithm correctness', () => {
    test('should work with negative numbers', () => {
      const arr = [-10, -5, 0, 5, 10];
      const result = binarySearch(arr, -5);
      expect(Array.isArray(result)).toBe(true);
      expect(result[result.length - 1]).toBe(-5);
    });

    test('should work with floating point numbers', () => {
      const arr = [1.1, 2.2, 3.3, 4.4, 5.5];
      const result = binarySearch(arr, 3.3);
      expect(Array.isArray(result)).toBe(true);
      expect(result[result.length - 1]).toBe(3.3);
    });

    test('should handle duplicate values correctly', () => {
      const arr = [1, 2, 2, 2, 3, 4, 5];
      const result = binarySearch(arr, 2);
      // Should find one of the 2s and include it as last element
      expect(Array.isArray(result)).toBe(true);
      expect(result[result.length - 1]).toBe(2);
    });
  });

  describe('Performance characteristics', () => {
    test('should handle large sorted arrays efficiently', () => {
      // Generate large sorted array
      const largeArray = Array.from({ length: 1000 }, (_, i) => i * 2);

      const startTime = Date.now();
      const result = binarySearch(largeArray, 500);
      const endTime = Date.now();

      // Should complete quickly due to O(log n) complexity
      expect(endTime - startTime).toBeLessThan(10); // 10ms

      // Should find the target
      expect(Array.isArray(result)).toBe(true);
      expect(result[result.length - 1]).toBe(500);
    });

    test('should have logarithmic path length', () => {
      // For array of length 1024, path should be at most log2(1024) = 10 steps
      const largeArray = Array.from({ length: 1024 }, (_, i) => i);
      const result = binarySearch(largeArray, 0);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(10);
    });
  });
});
