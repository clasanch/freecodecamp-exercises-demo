/**
 * Tests for Use .has and .size on an ES6 Set
 * TDD Implementation - Tests BEFORE implementation
 */

import checkSet from '../../src/data-structures/use-has-and-size-on-set.js';

describe('Use .has and .size on an ES6 Set', () => {
  describe('Basic cases with required FreeCodeCamp test', () => {
    test('should return [false, 3] for checkSet([4, 5, 6], 3)', () => {
      const result = checkSet([4, 5, 6], 3);
      expect(result).toEqual([false, 3]);
    });

    test('should return [true, 3] when value exists in set', () => {
      const result = checkSet([1, 2, 3], 2);
      expect(result).toEqual([true, 3]);
    });

    test('should return [true, 1] for single element array with existing value', () => {
      const result = checkSet([5], 5);
      expect(result).toEqual([true, 1]);
    });

    test('should return [false, 1] for single element array with non-existing value', () => {
      const result = checkSet([5], 10);
      expect(result).toEqual([false, 1]);
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle empty array', () => {
      const result = checkSet([], 1);
      expect(result).toEqual([false, 0]);
    });

    test('should handle array with duplicates - removes duplicates in Set', () => {
      const result = checkSet([1, 1, 2, 2, 3], 2);
      expect(result).toEqual([true, 3]);
    });

    test('should handle array with duplicates - check for non-existing value', () => {
      const result = checkSet([1, 1, 2, 2, 3], 5);
      expect(result).toEqual([false, 3]);
    });

    test('should handle null value in array', () => {
      const result = checkSet([1, null, 3], null);
      expect(result).toEqual([true, 3]);
    });

    test('should handle undefined value in array', () => {
      const result = checkSet([1, undefined, 3], undefined);
      expect(result).toEqual([true, 3]);
    });
  });

  describe('Different data types in Set', () => {
    test('should handle string values', () => {
      const result = checkSet(['a', 'b', 'c'], 'b');
      expect(result).toEqual([true, 3]);
    });

    test('should handle string values - not found', () => {
      const result = checkSet(['a', 'b', 'c'], 'd');
      expect(result).toEqual([false, 3]);
    });

    test('should handle mixed data types', () => {
      const result = checkSet([1, 'a', true, null], 'a');
      expect(result).toEqual([true, 4]);
    });

    test('should handle mixed data types - not found', () => {
      const result = checkSet([1, 'a', true, null], 'b');
      expect(result).toEqual([false, 4]);
    });

    test('should handle boolean values', () => {
      const result = checkSet([true, false], true);
      expect(result).toEqual([true, 2]);
    });

    test('should handle boolean values - not found', () => {
      const result = checkSet([true, false], 'true');
      expect(result).toEqual([false, 2]);
    });
  });

  describe('Complex cases and stress testing', () => {
    test('should handle large array with many duplicates', () => {
      const largeArray = Array(1000).fill(1).concat(Array(1000).fill(2));
      const result = checkSet(largeArray, 1);
      expect(result).toEqual([true, 2]);
    });

    test('should handle large array - value not found', () => {
      const largeArray = Array(1000).fill(1).concat(Array(1000).fill(2));
      const result = checkSet(largeArray, 3);
      expect(result).toEqual([false, 2]);
    });

    test('should handle array with object references', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const result = checkSet([obj1, obj2], obj1);
      expect(result).toEqual([true, 2]);
    });

    test('should handle array with object references - not found', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const obj3 = { id: 1 }; // Different reference, same content
      const result = checkSet([obj1, obj2], obj3);
      expect(result).toEqual([false, 2]);
    });

    test('should handle zero value correctly', () => {
      const result = checkSet([0, 1, 2], 0);
      expect(result).toEqual([true, 3]);
    });

    test('should handle negative numbers', () => {
      const result = checkSet([-1, -2, -3], -2);
      expect(result).toEqual([true, 3]);
    });
  });
});
