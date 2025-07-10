/**
 * Tests for Linked List Class
 * TDD Implementation - Tests BEFORE implementation
 */

import LinkedList from '../../src/data-structures/linked-list-class.js';

describe('LinkedList Class', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('Basic structure and methods', () => {
    test('should create a LinkedList instance', () => {
      expect(linkedList).toBeDefined();
      expect(typeof linkedList).toBe('object');
    });

    test('should have an add method', () => {
      expect(typeof linkedList.add).toBe('function');
    });

    test('should have a head method', () => {
      expect(typeof linkedList.head).toBe('function');
    });

    test('should have a size method', () => {
      expect(typeof linkedList.size).toBe('function');
    });

    test('should initialize with empty head', () => {
      expect(linkedList.head()).toBeNull();
    });

    test('should initialize with zero size', () => {
      expect(linkedList.size()).toBe(0);
    });
  });

  describe('Adding single element', () => {
    test('should assign head to the first node added', () => {
      linkedList.add('first');
      const headNode = linkedList.head();

      expect(headNode).not.toBeNull();
      expect(headNode.element).toBe('first');
      expect(headNode.next).toBeNull();
    });

    test('should increment size when adding first element', () => {
      linkedList.add('first');
      expect(linkedList.size()).toBe(1);
    });

    test('should work with different data types', () => {
      linkedList.add(42);
      expect(linkedList.head().element).toBe(42);
      expect(linkedList.size()).toBe(1);
    });
  });

  describe('Adding multiple elements', () => {
    test('should maintain head as first element when adding multiple elements', () => {
      linkedList.add('first');
      linkedList.add('second');
      linkedList.add('third');

      const headNode = linkedList.head();
      expect(headNode.element).toBe('first');
    });

    test('should create proper chain of references', () => {
      linkedList.add('first');
      linkedList.add('second');
      linkedList.add('third');

      const headNode = linkedList.head();
      expect(headNode.element).toBe('first');
      expect(headNode.next.element).toBe('second');
      expect(headNode.next.next.element).toBe('third');
      expect(headNode.next.next.next).toBeNull();
    });

    test('should increment size correctly with multiple additions', () => {
      linkedList.add('first');
      expect(linkedList.size()).toBe(1);

      linkedList.add('second');
      expect(linkedList.size()).toBe(2);

      linkedList.add('third');
      expect(linkedList.size()).toBe(3);
    });

    test('should maintain proper order of elements', () => {
      const elements = ['a', 'b', 'c', 'd'];
      elements.forEach(element => linkedList.add(element));

      let current = linkedList.head();
      for (let i = 0; i < elements.length; i++) {
        expect(current.element).toBe(elements[i]);
        current = current.next;
      }
      expect(current).toBeNull();
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle null values', () => {
      linkedList.add(null);
      expect(linkedList.head().element).toBeNull();
      expect(linkedList.size()).toBe(1);
    });

    test('should handle undefined values', () => {
      linkedList.add(undefined);
      expect(linkedList.head().element).toBeUndefined();
      expect(linkedList.size()).toBe(1);
    });

    test('should handle empty string', () => {
      linkedList.add('');
      expect(linkedList.head().element).toBe('');
      expect(linkedList.size()).toBe(1);
    });

    test('should handle zero value', () => {
      linkedList.add(0);
      expect(linkedList.head().element).toBe(0);
      expect(linkedList.size()).toBe(1);
    });

    test('should handle boolean values', () => {
      linkedList.add(true);
      linkedList.add(false);

      expect(linkedList.head().element).toBe(true);
      expect(linkedList.head().next.element).toBe(false);
      expect(linkedList.size()).toBe(2);
    });
  });

  describe('Complex scenarios', () => {
    test('should handle objects as elements', () => {
      const obj1 = { name: 'John', age: 30 };
      const obj2 = { name: 'Jane', age: 25 };

      linkedList.add(obj1);
      linkedList.add(obj2);

      expect(linkedList.head().element).toBe(obj1);
      expect(linkedList.head().next.element).toBe(obj2);
      expect(linkedList.size()).toBe(2);
    });

    test('should handle arrays as elements', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];

      linkedList.add(arr1);
      linkedList.add(arr2);

      expect(linkedList.head().element).toBe(arr1);
      expect(linkedList.head().next.element).toBe(arr2);
      expect(linkedList.size()).toBe(2);
    });

    test('should handle large number of elements', () => {
      const count = 100;
      for (let i = 0; i < count; i++) {
        linkedList.add(i);
      }

      expect(linkedList.size()).toBe(count);
      expect(linkedList.head().element).toBe(0);

      // Verify chain integrity
      let current = linkedList.head();
      for (let i = 0; i < count; i++) {
        expect(current.element).toBe(i);
        current = current.next;
      }
      expect(current).toBeNull();
    });
  });

  describe('FreeCodeCamp specific tests', () => {
    test('LinkedList class should have an add method', () => {
      expect(linkedList.add).toBeDefined();
      expect(typeof linkedList.add).toBe('function');
    });

    test('LinkedList class should assign head to the first node added', () => {
      linkedList.add('test');
      const headNode = linkedList.head();

      expect(headNode).not.toBeNull();
      expect(headNode.element).toBe('test');
    });

    test('previous node should have reference to the newest node created', () => {
      linkedList.add('first');
      linkedList.add('second');

      const headNode = linkedList.head();
      expect(headNode.next).not.toBeNull();
      expect(headNode.next.element).toBe('second');
    });

    test('size should equal the amount of nodes in the linked list', () => {
      expect(linkedList.size()).toBe(0);

      linkedList.add('first');
      expect(linkedList.size()).toBe(1);

      linkedList.add('second');
      expect(linkedList.size()).toBe(2);

      linkedList.add('third');
      expect(linkedList.size()).toBe(3);
    });
  });
});
