/**
 * Tests for Union Two Sets Implementation
 * TDD Implementation - Tests BEFORE implementation
 *
 * Following enhanced TDD methodology with FreeCodeCamp compliance priority:
 * 🔴 Red Phase: Write failing tests first
 * 🟢 Green Phase: Minimal implementation to pass tests
 * 🔵 Refactor Phase: Optimize while maintaining test coverage
 */

import Set from '../../src/data-structures/union-two-sets.js';

describe('Union Two Sets - Perform a Union on Two Sets', () => {
  describe('Class structure and initialization', () => {
    test('should create a Set class with proper initialization', () => {
      const mySet = new Set();
      expect(mySet).toBeInstanceOf(Set);
      expect(mySet.dictionary).toEqual({});
      expect(mySet).toHaveLength(0);
    });

    test('should have all required methods including union', () => {
      const mySet = new Set();
      expect(typeof mySet.has).toBe('function');
      expect(typeof mySet.values).toBe('function');
      expect(typeof mySet.add).toBe('function');
      expect(typeof mySet.remove).toBe('function');
      expect(typeof mySet.size).toBe('function');
      expect(typeof mySet.union).toBe('function');
    });
  });

  describe('Basic Set operations for coverage', () => {
    test('should handle remove operations correctly', () => {
      const mySet = new Set();
      mySet.add('a');
      mySet.add('b');

      expect(mySet.remove('a')).toBe(true);
      expect(mySet.has('a')).toBe(false);
      expect(mySet.size()).toBe(1);

      expect(mySet.remove('nonexistent')).toBe(false);
      expect(mySet.size()).toBe(1);
    });

    test('should handle add operations correctly', () => {
      const mySet = new Set();

      expect(mySet.add('a')).toBe(true);
      expect(mySet.add('a')).toBe(false); // duplicate
      expect(mySet.size()).toBe(1);
    });
  });

  describe('FreeCodeCamp Requirements - Union Method', () => {
    test('1. Your Set class should have a union method', () => {
      const mySet = new Set();
      expect(typeof mySet.union).toBe('function');
    });

    test('2. The union of a Set containing values ["a", "b", "c"] and a Set containing values ["c", "d"] should return a new Set containing values ["a", "b", "c", "d"]', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');
      setA.add('c');

      const setB = new Set();
      setB.add('c');
      setB.add('d');

      const unionSet = setA.union(setB);
      const unionValues = unionSet.values().sort();

      expect(unionValues).toEqual(['a', 'b', 'c', 'd']);
      expect(unionSet.size()).toBe(4);
    });
  });

  describe('Basic union functionality', () => {
    test('should handle union with no overlapping elements', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('c');
      setB.add('d');

      const unionSet = setA.union(setB);
      const unionValues = unionSet.values().sort();

      expect(unionValues).toEqual(['a', 'b', 'c', 'd']);
      expect(unionSet.size()).toBe(4);
    });

    test('should handle union with complete overlap', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('a');
      setB.add('b');

      const unionSet = setA.union(setB);
      const unionValues = unionSet.values().sort();

      expect(unionValues).toEqual(['a', 'b']);
      expect(unionSet.size()).toBe(2);
    });

    test('should handle complex union example from prompt', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');
      setA.add('c');

      const setB = new Set();
      setB.add('a');
      setB.add('b');
      setB.add('d');
      setB.add('e');

      const unionSet = setA.union(setB);
      const unionValues = unionSet.values().sort();

      expect(unionValues).toEqual(['a', 'b', 'c', 'd', 'e']);
      expect(unionSet.size()).toBe(5);
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle empty sets correctly', () => {
      const emptySet = new Set();
      const setWithElements = new Set();
      setWithElements.add('a');
      setWithElements.add('b');

      const unionAB = emptySet.union(setWithElements);
      const unionBA = setWithElements.union(emptySet);

      expect(unionAB.values().sort()).toEqual(['a', 'b']);
      expect(unionBA.values().sort()).toEqual(['a', 'b']);
      expect(unionAB.size()).toBe(2);
      expect(unionBA.size()).toBe(2);
    });

    test('should handle both sets being empty', () => {
      const setA = new Set();
      const setB = new Set();

      const unionSet = setA.union(setB);

      expect(unionSet.values()).toEqual([]);
      expect(unionSet.size()).toBe(0);
    });

    test('should not modify original sets', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');

      const setB = new Set();
      setB.add('c');
      setB.add('d');

      const originalAValues = setA.values().sort();
      const originalBValues = setB.values().sort();
      const originalASize = setA.size();
      const originalBSize = setB.size();

      setA.union(setB);

      expect(setA.values().sort()).toEqual(originalAValues);
      expect(setB.values().sort()).toEqual(originalBValues);
      expect(setA.size()).toBe(originalASize);
      expect(setB.size()).toBe(originalBSize);
    });

    test('should return a new Set instance', () => {
      const setA = new Set();
      setA.add('a');

      const setB = new Set();
      setB.add('b');

      const unionSet = setA.union(setB);

      expect(unionSet).toBeInstanceOf(Set);
      expect(unionSet).not.toBe(setA);
      expect(unionSet).not.toBe(setB);
    });
  });

  describe('Data type handling', () => {
    test('should handle different data types correctly', () => {
      const setA = new Set();
      setA.add('a');
      setA.add('b');
      setA.add('c');

      const setB = new Set();
      setB.add('d');
      setB.add('e');
      setB.add('f');
      setB.add('a'); // duplicate

      const unionSet = setA.union(setB);
      expect(unionSet.size()).toBe(6); // All unique values: a, b, c, d, e, f (duplicate a is ignored)

      expect(unionSet.has('a')).toBe(true);
      expect(unionSet.has('b')).toBe(true);
      expect(unionSet.has('c')).toBe(true);
      expect(unionSet.has('d')).toBe(true);
      expect(unionSet.has('e')).toBe(true);
      expect(unionSet.has('f')).toBe(true);
    });

    test('should handle basic values correctly', () => {
      const setA = new Set();
      setA.add('x');
      setA.add('y');
      setA.add('z');

      const setB = new Set();
      setB.add('w');
      setB.add('v');
      setB.add('x'); // duplicate

      const unionSet = setA.union(setB);
      expect(unionSet.size()).toBe(5); // x, y, z, w, v

      expect(unionSet.has('x')).toBe(true);
      expect(unionSet.has('y')).toBe(true);
      expect(unionSet.has('z')).toBe(true);
      expect(unionSet.has('w')).toBe(true);
      expect(unionSet.has('v')).toBe(true);
    });
  });

  describe('Performance and stress testing', () => {
    test('should handle large sets efficiently', () => {
      const setA = new Set();
      const setB = new Set();

      // Create large sets with some overlap
      for (let i = 0; i < 1000; i++) {
        setA.add(`item${i}`);
        setB.add(`item${i + 500}`); // 500 overlapping items (500-999)
      }

      const startTime = Date.now();
      const unionSet = setA.union(setB);
      const endTime = Date.now();

      expect(unionSet.size()).toBe(1500); // 1000 + 1000 - 500 overlap
      expect(endTime - startTime).toBeLessThan(100); // Should be fast
    });

    test('should demonstrate efficient union operation', () => {
      const setA = new Set();
      const setB = new Set();

      // Pre-populate with many items
      for (let i = 0; i < 5000; i++) {
        setA.add(`item${i}`);
        setB.add(`item${i + 2500}`); // 2500 overlapping items
      }

      const startTime = Date.now();
      const unionSet = setA.union(setB);
      const endTime = Date.now();

      expect(unionSet.size()).toBe(7500); // 5000 + 5000 - 2500 overlap
      expect(endTime - startTime).toBeLessThan(200); // Reasonable performance
    });
  });
});
