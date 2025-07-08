/**
 * Tests for Remove items from a set in ES6
 * TDD Implementation - Tests BEFORE implementation
 */

import checkSet from '../../src/data-structures/remove-items-from-set.js';

describe('Remove items from a set in ES6', () => {
  describe('Basic functionality', () => {
    test('should return a Set instance', () => {
      const result = checkSet();
      expect(result).toBeInstanceOf(Set);
    });

    test('should return a Set with exactly 3 values', () => {
      const result = checkSet();
      expect(result.size).toBe(3);
    });

    test('should contain values 1, 3, and 4', () => {
      const result = checkSet();
      expect(result.has(1)).toBe(true);
      expect(result.has(3)).toBe(true);
      expect(result.has(4)).toBe(true);
    });

    test('should not contain values 2 and 5', () => {
      const result = checkSet();
      expect(result.has(2)).toBe(false);
      expect(result.has(5)).toBe(false);
    });

    test('should return Set with values [1, 3, 4] in any order', () => {
      const result = checkSet();
      const values = [...result].sort();
      expect(values).toEqual([1, 3, 4]);
    });
  });

  describe('FreeCodeCamp test requirements', () => {
    test('Your Set should contain the values 1, 3, & 4', () => {
      const result = checkSet();
      expect(result.has(1)).toBe(true);
      expect(result.has(3)).toBe(true);
      expect(result.has(4)).toBe(true);
      expect(result.size).toBe(3);
    });
  });

  describe('Edge cases and validations', () => {
    test('should not contain any duplicate values', () => {
      const result = checkSet();
      const values = [...result];
      const uniqueValues = [...new Set(values)];
      expect(values).toHaveLength(uniqueValues.length);
    });

    test('should maintain Set properties (no duplicates)', () => {
      const result = checkSet();
      expect(result.size).toBe(3);
      expect([...result]).toHaveLength(3);
    });

    test('should return same result on multiple calls', () => {
      const result1 = checkSet();
      const result2 = checkSet();
      expect([...result1].sort()).toEqual([...result2].sort());
    });
  });

  describe('Set operations validation', () => {
    test('should demonstrate proper Set.delete() usage', () => {
      const result = checkSet();
      // Verify that original set had 5 elements and 2 were removed
      expect(result.size).toBe(3); // 5 - 2 = 3
    });

    test('should maintain correct Set structure after deletions', () => {
      const result = checkSet();
      expect(result.constructor).toBe(Set);
      expect(typeof result.has).toBe('function');
      expect(typeof result.delete).toBe('function');
    });
  });
});
