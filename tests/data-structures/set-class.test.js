/**
 * Tests for Set Class Implementation
 * TDD Implementation - Tests BEFORE implementation
 *
 * Following enhanced TDD methodology with FreeCodeCamp compliance priority:
 * 🔴 Red Phase: Write failing tests first
 * 🟢 Green Phase: Minimal implementation to pass tests
 * 🔵 Refactor Phase: Optimize while maintaining test coverage
 */

import Set from '../../src/data-structures/set-class.js';

describe('Set Class Implementation', () => {
  describe('Class structure and initialization', () => {
    test('should create a Set class with proper initialization', () => {
      const mySet = new Set();
      expect(mySet).toBeInstanceOf(Set);
      expect(mySet.dictionary).toEqual({});
      expect(mySet).toHaveLength(0);
    });

    test('should have all required methods', () => {
      const mySet = new Set();
      expect(typeof mySet.has).toBe('function');
      expect(typeof mySet.values).toBe('function');
      expect(typeof mySet.add).toBe('function');
      expect(typeof mySet.remove).toBe('function');
      expect(typeof mySet.size).toBe('function');
    });

    test('should have working has method from skeleton', () => {
      const mySet = new Set();
      expect(mySet.has('test')).toBe(false);
    });

    test('should have working values method from skeleton', () => {
      const mySet = new Set();
      expect(mySet.values()).toEqual([]);
    });
  });

  describe('FreeCodeCamp Test Requirements - Add Method', () => {
    test('should have an add method', () => {
      const mySet = new Set();
      expect(typeof mySet.add).toBe('function');
    });

    test('should add a value successfully and return true', () => {
      const mySet = new Set();
      const result = mySet.add('test');
      expect(result).toBe(true);
      expect(mySet.has('test')).toBe(true);
    });

    test('should not add duplicate values', () => {
      const mySet = new Set();
      mySet.add('test');
      mySet.add('test'); // duplicate
      expect(mySet.values()).toHaveLength(1);
      expect(mySet.values()).toEqual(['test']);
    });

    test('should return false when a duplicate value is added', () => {
      const mySet = new Set();
      mySet.add('test');
      const result = mySet.add('test'); // duplicate
      expect(result).toBe(false);
    });

    test('should add multiple unique values successfully', () => {
      const mySet = new Set();
      expect(mySet.add('a')).toBe(true);
      expect(mySet.add('b')).toBe(true);
      expect(mySet.add('c')).toBe(true);
      expect(mySet.values()).toHaveLength(3);
    });
  });

  describe('FreeCodeCamp Test Requirements - Remove Method', () => {
    test('should have a remove method', () => {
      const mySet = new Set();
      expect(typeof mySet.remove).toBe('function');
    });

    test('should only remove items that are present in the set', () => {
      const mySet = new Set();
      mySet.add('test');
      const beforeLength = mySet.values().length;

      const result = mySet.remove('nonexistent');
      expect(result).toBe(false);
      expect(mySet.values()).toHaveLength(beforeLength);
    });

    test('should remove the given item from the set', () => {
      const mySet = new Set();
      mySet.add('test');

      expect(mySet.has('test')).toBe(true);
      const result = mySet.remove('test');
      expect(result).toBe(true);
      expect(mySet.has('test')).toBe(false);
    });

    test('should return true when successfully removing an item', () => {
      const mySet = new Set();
      mySet.add('test');
      const result = mySet.remove('test');
      expect(result).toBe(true);
    });

    test('should return false when trying to remove non-existent item', () => {
      const mySet = new Set();
      const result = mySet.remove('nonexistent');
      expect(result).toBe(false);
    });
  });

  describe('FreeCodeCamp Test Requirements - Size Method', () => {
    test('should have a size method', () => {
      const mySet = new Set();
      expect(typeof mySet.size).toBe('function');
    });

    test('should return the number of elements in the collection', () => {
      const mySet = new Set();

      expect(mySet.size()).toBe(0);

      mySet.add('a');
      expect(mySet.size()).toBe(1);

      mySet.add('b');
      expect(mySet.size()).toBe(2);

      mySet.remove('a');
      expect(mySet.size()).toBe(1);
    });

    test('should maintain accurate size during operations', () => {
      const mySet = new Set();

      // Add operations
      mySet.add('item1');
      mySet.add('item2');
      mySet.add('item3');
      expect(mySet.size()).toBe(3);

      // Try to add duplicate
      mySet.add('item1');
      expect(mySet.size()).toBe(3); // Should remain same

      // Remove operations
      mySet.remove('item2');
      expect(mySet.size()).toBe(2);

      // Try to remove non-existent
      mySet.remove('nonexistent');
      expect(mySet.size()).toBe(2); // Should remain same
    });
  });

  describe('Edge cases and complex scenarios', () => {
    test('should handle different data types correctly', () => {
      const mySet = new Set();

      expect(mySet.add(1)).toBe(true);
      expect(mySet.add('1')).toBe(true); // String '1' different from number 1
      expect(mySet.add(true)).toBe(true);
      expect(mySet.add(false)).toBe(true);
      expect(mySet.add(null)).toBe(true);
      expect(mySet.add(undefined)).toBe(true);

      expect(mySet.size()).toBe(6);
    });

    test('should handle falsy values correctly', () => {
      const mySet = new Set();

      expect(mySet.add(0)).toBe(true);
      expect(mySet.add('')).toBe(true);
      expect(mySet.add(false)).toBe(true);
      expect(mySet.add(null)).toBe(true);

      expect(mySet.has(0)).toBe(true);
      expect(mySet.has('')).toBe(true);
      expect(mySet.has(false)).toBe(true);
      expect(mySet.has(null)).toBe(true);

      expect(mySet.size()).toBe(4);
    });

    test('should maintain consistency between has(), values() and size()', () => {
      const mySet = new Set();
      const items = ['a', 'b', 'c', 1, 2, true, false, null];

      // Add all items
      items.forEach(item => mySet.add(item));

      // Verify consistency
      expect(mySet.size()).toBe(items.length);
      expect(mySet.values()).toHaveLength(items.length);

      items.forEach(item => {
        expect(mySet.has(item)).toBe(true);
      });
    });

    test('should handle empty set operations gracefully', () => {
      const mySet = new Set();

      expect(mySet.size()).toBe(0);
      expect(mySet.values()).toEqual([]);
      expect(mySet.remove('anything')).toBe(false);
      expect(mySet.has('anything')).toBe(false);
    });
  });

  describe('Performance and stress testing', () => {
    test('should handle large number of operations efficiently', () => {
      const mySet = new Set();
      const itemCount = 1000;

      const startTime = Date.now();

      // Add 1000 items
      for (let i = 0; i < itemCount; i++) {
        mySet.add(`item${i}`);
      }

      expect(mySet.size()).toBe(itemCount);

      // Remove half of them
      for (let i = 0; i < itemCount / 2; i++) {
        mySet.remove(`item${i}`);
      }

      expect(mySet.size()).toBe(itemCount / 2);

      const endTime = Date.now();
      const duration = endTime - startTime;

      // Should complete in reasonable time (< 100ms on modern hardware)
      expect(duration).toBeLessThan(100);
    });

    test('should demonstrate O(1) operations empirically', () => {
      const mySet = new Set();

      // Pre-populate with many items to test O(1) behavior
      for (let i = 0; i < 10000; i++) {
        mySet.add(`item${i}`);
      }

      const startTime = Date.now();

      // These operations should be O(1) regardless of set size
      mySet.add('testItem');
      mySet.has('testItem');
      mySet.size();
      mySet.remove('testItem');

      const endTime = Date.now();
      const duration = endTime - startTime;

      // O(1) operations should be very fast even with large set
      expect(duration).toBeLessThan(10);
    });
  });
});
