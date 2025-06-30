/**
 * Tests for Symmetric Difference Algorithm
 * TDD Implementation - Tests BEFORE implementation
 */

import sym from '../../src/algorithms/symmetric-difference.js';

describe('Symmetric Difference Algorithm', () => {
  describe('Basic cases with two arrays', () => {
    test('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
      const result = sym([1, 2, 3], [5, 2, 1, 4]);
      expect(result.sort()).toEqual([3, 4, 5]);
    });

    test('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements', () => {
      const result = sym([1, 2, 3], [5, 2, 1, 4]);
      expect(result).toHaveLength(3);
    });
  });

  describe('Cases with arrays containing duplicates', () => {
    test('sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
      const result = sym([1, 2, 3, 3], [5, 2, 1, 4]);
      expect(result.sort()).toEqual([3, 4, 5]);
    });

    test('sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements', () => {
      const result = sym([1, 2, 3, 3], [5, 2, 1, 4]);
      expect(result).toHaveLength(3);
    });

    test('sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5]', () => {
      const result = sym([1, 2, 3], [5, 2, 1, 4, 5]);
      expect(result.sort()).toEqual([3, 4, 5]);
    });

    test('sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements', () => {
      const result = sym([1, 2, 3], [5, 2, 1, 4, 5]);
      expect(result).toHaveLength(3);
    });
  });

  describe('Cases with three arrays', () => {
    test('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
      const result = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
      expect(result.sort()).toEqual([1, 4, 5]);
    });

    test('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements', () => {
      const result = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
      expect(result).toHaveLength(3);
    });

    test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', () => {
      const result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
      expect(result.sort()).toEqual([1, 4, 5]);
    });

    test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements', () => {
      const result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
      expect(result).toHaveLength(3);
    });
  });

  describe('Complex cases with multiple arrays', () => {
    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]', () => {
      const result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
      expect(result.sort()).toEqual([2, 3, 4, 6, 7]);
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements', () => {
      const result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
      expect(result).toHaveLength(5);
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
      const result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
      expect(result.sort()).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
    });

    test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements', () => {
      const result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
      expect(result).toHaveLength(8);
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle empty arrays', () => {
      const result = sym([], [1, 2, 3]);
      expect(result.sort()).toEqual([1, 2, 3]);
    });

    test('should handle single element arrays', () => {
      const result = sym([1], [2]);
      expect(result.sort()).toEqual([1, 2]);
    });

    test('should return empty array when arrays are identical', () => {
      const result = sym([1, 2, 3], [1, 2, 3]);
      expect(result).toEqual([]);
    });
  });
});
