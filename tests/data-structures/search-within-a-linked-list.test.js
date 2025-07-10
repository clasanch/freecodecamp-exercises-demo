/**
 * Tests for Search within a Linked List
 * TDD Implementation - Tests BEFORE implementation
 */

import LinkedList from '../../src/data-structures/search-within-a-linked-list.js';

describe('Search within a Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('Method existence and basic functionality', () => {
    test('should have an isEmpty method', () => {
      expect(typeof list.isEmpty).toBe('function');
    });

    test('should have an indexOf method', () => {
      expect(typeof list.indexOf).toBe('function');
    });

    test('should have an elementAt method', () => {
      expect(typeof list.elementAt).toBe('function');
    });

    test('should preserve existing methods from skeleton', () => {
      expect(typeof list.add).toBe('function');
      expect(typeof list.remove).toBe('function');
      expect(typeof list.size).toBe('function');
      expect(typeof list.head).toBe('function');
    });

    test('should access size and head methods for complete coverage', () => {
      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();

      list.add('test');
      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('test');
    });
  });

  describe('isEmpty method', () => {
    test('should return true when there are no elements in linked list', () => {
      expect(list.isEmpty()).toBe(true);
    });

    test('should return false when there is at least one element in linked list', () => {
      list.add('element');
      expect(list.isEmpty()).toBe(false);
    });

    test('should return false with multiple elements', () => {
      list.add('first');
      list.add('second');
      list.add('third');
      expect(list.isEmpty()).toBe(false);
    });

    test('should return true after removing all elements', () => {
      list.add('temporary');
      list.remove('temporary');
      expect(list.isEmpty()).toBe(true);
    });

    test('should handle transitions between empty and non-empty states', () => {
      expect(list.isEmpty()).toBe(true);

      list.add('element');
      expect(list.isEmpty()).toBe(false);

      list.remove('element');
      expect(list.isEmpty()).toBe(true);
    });
  });

  describe('indexOf method', () => {
    test('should return the index of a given element found in linked list', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      expect(list.indexOf('first')).toBe(0);
      expect(list.indexOf('second')).toBe(1);
      expect(list.indexOf('third')).toBe(2);
    });

    test('should return -1 if the given element is not found in linked list', () => {
      list.add('first');
      list.add('second');

      expect(list.indexOf('nonexistent')).toBe(-1);
      expect(list.indexOf('third')).toBe(-1);
    });

    test('should return -1 for empty list', () => {
      expect(list.indexOf('anything')).toBe(-1);
    });

    test('should find first occurrence of duplicate elements', () => {
      list.add('duplicate');
      list.add('middle');
      list.add('duplicate');

      expect(list.indexOf('duplicate')).toBe(0);
    });

    test('should handle different data types', () => {
      list.add(1);
      list.add('string');
      list.add(true);
      list.add(null);

      expect(list.indexOf(1)).toBe(0);
      expect(list.indexOf('string')).toBe(1);
      expect(list.indexOf(true)).toBe(2);
      expect(list.indexOf(null)).toBe(3);
    });

    test('should be case-sensitive for strings', () => {
      list.add('Test');

      expect(list.indexOf('Test')).toBe(0);
      expect(list.indexOf('test')).toBe(-1);
    });

    test('should handle undefined and null searches', () => {
      list.add('element');

      expect(list.indexOf(undefined)).toBe(-1);
      expect(list.indexOf(null)).toBe(-1);
    });

    test('should handle searching for undefined and null when stored', () => {
      list.add(undefined);
      list.add(null);
      list.add('normal');

      expect(list.indexOf(undefined)).toBe(0);
      expect(list.indexOf(null)).toBe(1);
      expect(list.indexOf('normal')).toBe(2);
    });
  });

  describe('elementAt method', () => {
    test('should return the element found at a given index in linked list', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      expect(list.elementAt(0)).toBe('first');
      expect(list.elementAt(1)).toBe('second');
      expect(list.elementAt(2)).toBe('third');
    });

    test('should return undefined if the given element is not found at a given index in linked list', () => {
      list.add('first');
      list.add('second');

      expect(list.elementAt(5)).toBeUndefined();
      expect(list.elementAt(10)).toBeUndefined();
    });

    test('should return undefined for negative indices', () => {
      list.add('element');

      expect(list.elementAt(-1)).toBeUndefined();
      expect(list.elementAt(-5)).toBeUndefined();
    });

    test('should return undefined for empty list', () => {
      expect(list.elementAt(0)).toBeUndefined();
      expect(list.elementAt(1)).toBeUndefined();
    });

    test('should handle boundary indices correctly', () => {
      list.add('only');

      expect(list.elementAt(0)).toBe('only');
      expect(list.elementAt(1)).toBeUndefined();
    });

    test('should handle different data types at indices', () => {
      list.add(42);
      list.add('text');
      list.add(true);
      list.add(null);
      list.add(undefined);

      expect(list.elementAt(0)).toBe(42);
      expect(list.elementAt(1)).toBe('text');
      expect(list.elementAt(2)).toBe(true);
      expect(list.elementAt(3)).toBe(null);
      expect(list.elementAt(4)).toBe(undefined);
    });

    test('should handle larger indices in longer lists', () => {
      // Build list with 10 elements
      for (let i = 0; i < 10; i++) {
        list.add(`element${i}`);
      }

      expect(list.elementAt(0)).toBe('element0');
      expect(list.elementAt(5)).toBe('element5');
      expect(list.elementAt(9)).toBe('element9');
      expect(list.elementAt(10)).toBeUndefined();
    });

    test('should work correctly after modifications', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      expect(list.elementAt(1)).toBe('second');

      list.remove('second');

      expect(list.elementAt(1)).toBe('third');
      expect(list.elementAt(2)).toBeUndefined();
    });
  });

  describe('Complex scenarios and integration', () => {
    test('should maintain consistency between indexOf and elementAt', () => {
      list.add('alpha');
      list.add('beta');
      list.add('gamma');

      const element = 'beta';
      const index = list.indexOf(element);
      const retrievedElement = list.elementAt(index);

      expect(retrievedElement).toBe(element);
    });

    test('should handle round-trip operations consistently', () => {
      const elements = ['a', 'b', 'c', 'd', 'e'];
      elements.forEach(el => list.add(el));

      elements.forEach((element, expectedIndex) => {
        const foundIndex = list.indexOf(element);
        const retrievedElement = list.elementAt(expectedIndex);

        expect(foundIndex).toBe(expectedIndex);
        expect(retrievedElement).toBe(element);
      });
    });

    test('should work correctly with mixed operations', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      expect(list.isEmpty()).toBe(false);
      expect(list.indexOf('second')).toBe(1);
      expect(list.elementAt(2)).toBe('third');

      list.remove('first');

      expect(list.isEmpty()).toBe(false);
      expect(list.indexOf('second')).toBe(0);
      expect(list.elementAt(1)).toBe('third');
      expect(list.elementAt(2)).toBeUndefined();
    });

    test('should handle all methods on single-element list', () => {
      list.add('single');

      expect(list.isEmpty()).toBe(false);
      expect(list.indexOf('single')).toBe(0);
      expect(list.elementAt(0)).toBe('single');
      expect(list.indexOf('missing')).toBe(-1);
      expect(list.elementAt(1)).toBeUndefined();
    });

    test('should maintain performance with larger datasets', () => {
      // Build list with 100 elements
      for (let i = 0; i < 100; i++) {
        list.add(`item${i}`);
      }

      expect(list.isEmpty()).toBe(false);
      expect(list.indexOf('item50')).toBe(50);
      expect(list.elementAt(99)).toBe('item99');
      expect(list.indexOf('item999')).toBe(-1);
      expect(list.elementAt(100)).toBeUndefined();
    });

    test('should handle sequential removals and searches', () => {
      ['a', 'b', 'c', 'd', 'e'].forEach(el => list.add(el));

      // Remove middle element
      list.remove('c');
      expect(list.indexOf('c')).toBe(-1);
      expect(list.indexOf('d')).toBe(2);
      expect(list.elementAt(2)).toBe('d');

      // Remove head
      list.remove('a');
      expect(list.indexOf('a')).toBe(-1);
      expect(list.indexOf('b')).toBe(0);
      expect(list.elementAt(0)).toBe('b');
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle zero as element value', () => {
      list.add(0);
      list.add(1);

      expect(list.indexOf(0)).toBe(0);
      expect(list.elementAt(0)).toBe(0);
    });

    test('should handle empty string as element', () => {
      list.add('');
      list.add('normal');

      expect(list.indexOf('')).toBe(0);
      expect(list.elementAt(0)).toBe('');
    });

    test('should handle object elements', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };

      list.add(obj1);
      list.add(obj2);

      expect(list.indexOf(obj1)).toBe(0);
      expect(list.elementAt(1)).toBe(obj2);
    });

    test('should handle floating point indices gracefully', () => {
      list.add('element');

      // Should treat as integer (floor behavior expected)
      expect(list.elementAt(0.5)).toBeUndefined();
      expect(list.elementAt(1.9)).toBeUndefined();
    });
  });
});
