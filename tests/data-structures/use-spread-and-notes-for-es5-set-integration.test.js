/**
 * Tests for Use Spread and Notes for ES5 Set() Integration
 * TDD Implementation - Tests BEFORE implementation
 */

import checkSet from '../../src/data-structures/use-spread-and-notes-for-es5-set-integration.js';

describe('Use Spread and Notes for ES5 Set() Integration', () => {
  describe('FreeCodeCamp required test cases', () => {
    test('checkSet(new Set([1,2,3,4,5,6,7]) should return [1, 2, 3, 4, 5, 6, 7]', () => {
      const inputSet = new Set([1, 2, 3, 4, 5, 6, 7]);
      const result = checkSet(inputSet);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe('Basic functionality tests', () => {
    test('should convert simple Set to array', () => {
      const inputSet = new Set([1, 2, 3]);
      const result = checkSet(inputSet);
      expect(result).toEqual([1, 2, 3]);
    });

    test('should preserve Set order in array', () => {
      const inputSet = new Set(['a', 'b', 'c']);
      const result = checkSet(inputSet);
      expect(result).toEqual(['a', 'b', 'c']);
    });

    test('should handle Set with mixed data types', () => {
      const inputSet = new Set([1, 'two', 3, 'four']);
      const result = checkSet(inputSet);
      expect(result).toEqual([1, 'two', 3, 'four']);
    });

    test('should return array type', () => {
      const inputSet = new Set([1, 2, 3]);
      const result = checkSet(inputSet);
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle empty Set', () => {
      const inputSet = new Set();
      const result = checkSet(inputSet);
      expect(result).toEqual([]);
    });

    test('should handle Set with single element', () => {
      const inputSet = new Set([42]);
      const result = checkSet(inputSet);
      expect(result).toEqual([42]);
    });

    test('should handle Set with duplicate values (already unique)', () => {
      const inputSet = new Set([1, 1, 2, 2, 3]);
      const result = checkSet(inputSet);
      expect(result).toEqual([1, 2, 3]);
    });

    test('should handle Set with null and undefined', () => {
      const inputSet = new Set([null, undefined, 1]);
      const result = checkSet(inputSet);
      expect(result).toEqual([null, undefined, 1]);
    });

    test('should handle Set with boolean values', () => {
      const inputSet = new Set([true, false, 1, 0]);
      const result = checkSet(inputSet);
      expect(result).toEqual([true, false, 1, 0]);
    });
  });

  describe('Data integrity tests', () => {
    test('should not modify original Set', () => {
      const inputSet = new Set([1, 2, 3]);
      const originalSize = inputSet.size;
      const originalValues = [...inputSet];

      checkSet(inputSet);

      expect(inputSet.size).toBe(originalSize);
      expect([...inputSet]).toEqual(originalValues);
    });

    test('should create new array instance', () => {
      const inputSet = new Set([1, 2, 3]);
      const result1 = checkSet(inputSet);
      const result2 = checkSet(inputSet);

      expect(result1).not.toBe(result2);
      expect(result1).toEqual(result2);
    });

    test('should handle Set with object references', () => {
      const obj1 = { name: 'test1' };
      const obj2 = { name: 'test2' };
      const inputSet = new Set([obj1, obj2]);
      const result = checkSet(inputSet);

      expect(result).toEqual([obj1, obj2]);
      expect(result[0]).toBe(obj1);
      expect(result[1]).toBe(obj2);
    });
  });

  describe('Performance and edge cases', () => {
    test('should handle large Set efficiently', () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => i);
      const inputSet = new Set(largeArray);
      const result = checkSet(inputSet);

      expect(result).toHaveLength(1000);
      expect(result).toEqual(largeArray);
    });

    test('should handle Set with symbols', () => {
      const sym1 = Symbol('test1');
      const sym2 = Symbol('test2');
      const inputSet = new Set([sym1, sym2]);
      const result = checkSet(inputSet);

      expect(result).toEqual([sym1, sym2]);
    });

    test('should handle Set with functions', () => {
      const func1 = () => 'test1';
      const func2 = () => 'test2';
      const inputSet = new Set([func1, func2]);
      const result = checkSet(inputSet);

      expect(result).toEqual([func1, func2]);
      expect(typeof result[0]).toBe('function');
    });
  });
});
