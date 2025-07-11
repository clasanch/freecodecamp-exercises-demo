/**
 * Tests for Add Elements at a Specific Index in a Linked List
 * TDD Implementation - Tests define expected behavior
 */

import LinkedList from '../../src/data-structures/add-elements-at-specific-index-linked-list.js';

describe('Add Elements at Specific Index in Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('FreeCodeCamp Required Tests', () => {
    test('addAt method should reassign head to the new node when the given index is 0', () => {
      // Add initial element
      linkedList.add('first');
      const originalHead = linkedList.head();

      // Add at index 0 (new head)
      linkedList.addAt(0, 'newHead');

      // Verify new head
      const newHead = linkedList.head();
      expect(newHead.element).toBe('newHead');
      expect(newHead.next).toBe(originalHead);
      expect(linkedList.size()).toBe(2);
    });

    test('addAt method should increase the length of the linked list by one for each new node added', () => {
      const initialSize = linkedList.size();

      // Add elements at various positions
      linkedList.add('first');
      expect(linkedList.size()).toBe(initialSize + 1);

      linkedList.addAt(1, 'second');
      expect(linkedList.size()).toBe(initialSize + 2);

      linkedList.addAt(0, 'newFirst');
      expect(linkedList.size()).toBe(initialSize + 3);

      linkedList.addAt(2, 'middle');
      expect(linkedList.size()).toBe(initialSize + 4);
    });

    test('addAt method should return false if a node was unable to be added', () => {
      linkedList.add('first');
      linkedList.add('second');

      // Test invalid indices
      expect(linkedList.addAt(-1, 'invalid')).toBe(false);
      expect(linkedList.addAt(-5, 'invalid')).toBe(false);
      expect(linkedList.addAt(10, 'invalid')).toBe(false);
      expect(linkedList.addAt(3, 'invalid')).toBe(false);

      // Verify length unchanged
      expect(linkedList.size()).toBe(2);
    });
  });

  describe('Basic Functionality Tests', () => {
    test('should add element at index 0 in empty list', () => {
      linkedList.addAt(0, 'onlyElement');

      expect(linkedList.head().element).toBe('onlyElement');
      expect(linkedList.head().next).toBeNull();
      expect(linkedList.size()).toBe(1);
    });

    test('should add element at the end of list', () => {
      linkedList.add('first');
      linkedList.add('second');

      linkedList.addAt(2, 'last');

      // Traverse to verify order
      let current = linkedList.head();
      expect(current.element).toBe('first');

      current = current.next;
      expect(current.element).toBe('second');

      current = current.next;
      expect(current.element).toBe('last');
      expect(current.next).toBeNull();

      expect(linkedList.size()).toBe(3);
    });

    test('should add element in the middle of list', () => {
      linkedList.add('first');
      linkedList.add('third');

      linkedList.addAt(1, 'second');

      // Verify insertion order
      let current = linkedList.head();
      expect(current.element).toBe('first');

      current = current.next;
      expect(current.element).toBe('second');

      current = current.next;
      expect(current.element).toBe('third');
      expect(current.next).toBeNull();

      expect(linkedList.size()).toBe(3);
    });
  });

  describe('Edge Cases and Validations', () => {
    test('should handle negative indices correctly', () => {
      linkedList.add('element');
      const originalSize = linkedList.size();

      expect(linkedList.addAt(-1, 'invalid')).toBe(false);
      expect(linkedList.addAt(-10, 'invalid')).toBe(false);
      expect(linkedList.size()).toBe(originalSize);
    });

    test('should handle indices beyond list length', () => {
      linkedList.add('first');
      linkedList.add('second');
      const originalSize = linkedList.size();

      expect(linkedList.addAt(3, 'invalid')).toBe(false);
      expect(linkedList.addAt(10, 'invalid')).toBe(false);
      expect(linkedList.size()).toBe(originalSize);
    });

    test('should handle adding at index equal to length (append)', () => {
      linkedList.add('first');
      linkedList.add('second');

      linkedList.addAt(2, 'append');

      // Verify element was appended
      let current = linkedList.head();
      while (current.next !== null) {
        current = current.next;
      }
      expect(current.element).toBe('append');
      expect(linkedList.size()).toBe(3);
    });

    test('should work with different data types', () => {
      linkedList.addAt(0, 42);
      linkedList.addAt(1, 'string');
      linkedList.addAt(2, { key: 'value' });
      linkedList.addAt(3, [1, 2, 3]);

      let current = linkedList.head();
      expect(current.element).toBe(42);

      current = current.next;
      expect(current.element).toBe('string');

      current = current.next;
      expect(current.element).toEqual({ key: 'value' });

      current = current.next;
      expect(current.element).toEqual([1, 2, 3]);

      expect(linkedList.size()).toBe(4);
    });
  });

  describe('Complex Scenarios', () => {
    test('should handle multiple insertions at index 0', () => {
      linkedList.addAt(0, 'first');
      linkedList.addAt(0, 'second');
      linkedList.addAt(0, 'third');

      // Verify reverse order (last inserted becomes head)
      let current = linkedList.head();
      expect(current.element).toBe('third');

      current = current.next;
      expect(current.element).toBe('second');

      current = current.next;
      expect(current.element).toBe('first');

      expect(linkedList.size()).toBe(3);
    });

    test('should maintain proper chain links after multiple insertions', () => {
      linkedList.add('A');
      linkedList.add('C');
      linkedList.add('E');

      linkedList.addAt(1, 'B');
      linkedList.addAt(3, 'D');
      linkedList.addAt(0, 'Start');

      // Verify complete chain: Start → A → B → C → D → E
      const elements = [];
      let current = linkedList.head();
      while (current !== null) {
        elements.push(current.element);
        current = current.next;
      }

      expect(elements).toEqual(['Start', 'A', 'B', 'C', 'D', 'E']);
      expect(linkedList.size()).toBe(6);
    });

    test('should work correctly when building list only with addAt', () => {
      linkedList.addAt(0, 'first');
      linkedList.addAt(1, 'second');
      linkedList.addAt(2, 'third');
      linkedList.addAt(1, 'inserted');

      // Expected order: first → inserted → second → third
      const elements = [];
      let current = linkedList.head();
      while (current !== null) {
        elements.push(current.element);
        current = current.next;
      }

      expect(elements).toEqual(['first', 'inserted', 'second', 'third']);
      expect(linkedList.size()).toBe(4);
    });
  });

  describe('Return Value Validation', () => {
    test('should return undefined for successful insertions', () => {
      const result1 = linkedList.addAt(0, 'element');
      expect(result1).toBeUndefined();

      const result2 = linkedList.addAt(1, 'element2');
      expect(result2).toBeUndefined();
    });

    test('should return false only for invalid indices', () => {
      linkedList.add('element');

      expect(linkedList.addAt(-1, 'invalid')).toBe(false);
      expect(linkedList.addAt(2, 'invalid')).toBe(false);

      // Valid indices should not return false
      expect(linkedList.addAt(0, 'valid')).not.toBe(false);
      expect(linkedList.addAt(2, 'valid')).not.toBe(false);
    });
  });

  describe('Integration with Existing Methods', () => {
    test('should work properly with add() method', () => {
      linkedList.add('added');
      linkedList.addAt(0, 'inserted');
      linkedList.add('appended');
      linkedList.addAt(2, 'middle');

      // Expected: inserted → added → middle → appended
      const elements = [];
      let current = linkedList.head();
      while (current !== null) {
        elements.push(current.element);
        current = current.next;
      }

      expect(elements).toEqual(['inserted', 'added', 'middle', 'appended']);
      expect(linkedList.size()).toBe(4);
    });

    test('should maintain consistent head() and size() behavior', () => {
      const originalHead = linkedList.head();
      expect(originalHead).toBeNull();
      expect(linkedList.size()).toBe(0);

      linkedList.addAt(0, 'newHead');
      expect(linkedList.head().element).toBe('newHead');
      expect(linkedList.size()).toBe(1);

      linkedList.addAt(0, 'newerHead');
      expect(linkedList.head().element).toBe('newerHead');
      expect(linkedList.size()).toBe(2);
    });
  });
});
