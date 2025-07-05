/**
 * Tests for Intersection Two Sets
 * TDD Implementation - Tests BEFORE implementation
 *
 * Following FreeCodeCamp requirements:
 * 1. Your Set class should have a intersection method
 * 2. The proper collection should be returned
 */

import Set from '../../src/data-structures/intersection-two-sets.js';

describe('Intersection Two Sets', () => {
  describe('Method existence and basic functionality', () => {
    test('should have an intersection method', () => {
      const mySet = new Set();
      expect(typeof mySet.intersection).toBe('function');
    });

    test('should return a Set instance', () => {
      const setA = new Set();
      const setB = new Set();
      const result = setA.intersection(setB);
      expect(result).toBeInstanceOf(Set);
    });
  });

  describe('Basic intersection cases', () => {
    test('should return intersection of two sets with common elements', () => {
      // FreeCodeCamp example: setA = ['a','b','c'] and setB = ['a','b','d','e']
      const setA = new Set();
      setA.add('a');
      setA.add('b');
      setA.add('c');

      const setB = new Set();
      setB.add('a');
      setB.add('b');
      setB.add('d');
      setB.add('e');

      const intersection = setA.intersection(setB);
      const result = intersection.values().sort();

      expect(result).toEqual(['a', 'b']);
      expect(intersection.size()).toBe(2);
    });

    test('should return intersection with single common element', () => {
      const setA = new Set();
      setA.add('x');
      setA.add('y');

      const setB = new Set();
      setB.add('y');
      setB.add('z');

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual(['y']);
      expect(intersection.size()).toBe(1);
    });

    test('should return intersection with numeric elements', () => {
      const setA = new Set();
      setA.add('1');
      setA.add('2');
      setA.add('3');

      const setB = new Set();
      setB.add('2');
      setB.add('3');
      setB.add('4');

      const intersection = setA.intersection(setB);
      const result = intersection.values().sort();

      expect(result).toEqual(['2', '3']);
      expect(intersection.size()).toBe(2);
    });
  });

  describe('Edge cases and validations', () => {
    test('should return empty set when no common elements', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('c');
      setB.add('d');

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual([]);
      expect(intersection.size()).toBe(0);
    });

    test('should return empty set when one set is empty', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual([]);
      expect(intersection.size()).toBe(0);
    });

    test('should return empty set when both sets are empty', () => {
      const setA = new Set();
      const setB = new Set();

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual([]);
      expect(intersection.size()).toBe(0);
    });

    test('should return intersection when sets are identical', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('a');
      setB.add('b');

      const intersection = setA.intersection(setB);
      const result = intersection.values().sort();

      expect(result).toEqual(['a', 'b']);
      expect(intersection.size()).toBe(2);
    });

    test('should handle single element sets', () => {
      const setA = new Set();
      setA.add('single');

      const setB = new Set();
      setB.add('single');

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual(['single']);
      expect(intersection.size()).toBe(1);
    });
  });

  describe('Complex cases and data integrity', () => {
    test('should handle larger sets with multiple intersections', () => {
      const setA = new Set();
      ['a', 'b', 'c', 'd', 'e'].forEach(item => setA.add(item));

      const setB = new Set();
      ['c', 'd', 'e', 'f', 'g', 'h'].forEach(item => setB.add(item));

      const intersection = setA.intersection(setB);
      const result = intersection.values().sort();

      expect(result).toEqual(['c', 'd', 'e']);
      expect(intersection.size()).toBe(3);
    });

    test('should not modify original sets', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('b');
      setB.add('c');

      const originalSizeA = setA.size();
      const originalSizeB = setB.size();
      const originalValuesA = setA.values().sort();
      const originalValuesB = setB.values().sort();

      setA.intersection(setB);

      expect(setA.size()).toBe(originalSizeA);
      expect(setB.size()).toBe(originalSizeB);
      expect(setA.values().sort()).toEqual(originalValuesA);
      expect(setB.values().sort()).toEqual(originalValuesB);
    });

    test('should handle special string values', () => {
      const setA = new Set();
      setA.add('0');
      setA.add('false');
      setA.add('null');

      const setB = new Set();
      setB.add('0');
      setB.add('true');
      setB.add('undefined');

      const intersection = setA.intersection(setB);
      expect(intersection.values()).toEqual(['0']);
      expect(intersection.size()).toBe(1);
    });
  });

  describe('Coverage completeness tests', () => {
    test('should cover add method returning false for existing elements', () => {
      const mySet = new Set();
      expect(mySet.add('test')).toBe(true);
      expect(mySet.add('test')).toBe(false); // Element already exists
    });

    test('should cover remove method returning false for non-existing elements', () => {
      const mySet = new Set();
      mySet.add('test');
      expect(mySet.remove('test')).toBe(true);
      expect(mySet.remove('nonexistent')).toBe(false); // Element doesn't exist
    });

    test('should test intersection optimization with different sized sets', () => {
      // Test smaller set first (this optimization branch)
      const smallSet = new Set();
      smallSet.add('a');

      const largeSet = new Set();
      ['a', 'b', 'c', 'd', 'e'].forEach(item => largeSet.add(item));

      const intersection1 = smallSet.intersection(largeSet);
      expect(intersection1.values()).toEqual(['a']);

      // Test larger set first (other optimization branch)
      const intersection2 = largeSet.intersection(smallSet);
      expect(intersection2.values()).toEqual(['a']);
    });

    test('should cover union method from skeleton', () => {
      // Cover the union method that's part of the skeleton
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('c');
      setB.add('d');

      const unionResult = setA.union(setB);
      expect(unionResult.size()).toBe(4);
      expect(unionResult.has('a')).toBe(true);
      expect(unionResult.has('b')).toBe(true);
      expect(unionResult.has('c')).toBe(true);
      expect(unionResult.has('d')).toBe(true);
    });
  });

  describe('FreeCodeCamp compliance tests', () => {
    test('should pass the exact FreeCodeCamp example', () => {
      // Test case from the problem description
      const setA = new Set();
      setA.add('a');
      setA.add('b');
      setA.add('c');

      const setB = new Set();
      setB.add('a');
      setB.add('b');
      setB.add('d');
      setB.add('e');

      const intersection = setA.intersection(setB);

      // Should contain exactly ['a', 'b']
      expect(intersection.has('a')).toBe(true);
      expect(intersection.has('b')).toBe(true);
      expect(intersection.has('c')).toBe(false);
      expect(intersection.has('d')).toBe(false);
      expect(intersection.has('e')).toBe(false);
      expect(intersection.size()).toBe(2);
    });

    test('should work with the existing Set methods', () => {
      const setA = new Set();
      setA.add('test1');
      setA.add('test2');

      const setB = new Set();
      setB.add('test2');
      setB.add('test3');

      const intersection = setA.intersection(setB);

      // Test all inherited methods work correctly
      expect(intersection.has('test2')).toBe(true);
      expect(intersection.has('test1')).toBe(false);
      expect(intersection.values()).toEqual(['test2']);
      expect(intersection.size()).toBe(1);

      // Test add/remove work on result
      expect(intersection.add('new')).toBe(true);
      expect(intersection.remove('test2')).toBe(true);
      expect(intersection.size()).toBe(1);
    });
  });
});
