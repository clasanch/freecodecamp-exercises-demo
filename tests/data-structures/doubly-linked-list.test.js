/**
 * Tests for Create a Doubly Linked List
 * TDD Implementation - Tests define expected behavior
 */

import DoublyLinkedList from '../../src/data-structures/doubly-linked-list.js';

describe('Create a Doubly Linked List', () => {
  let doublyLinkedList;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  describe('FreeCodeCamp Required Tests', () => {
    test('The DoublyLinkedList data structure should exist', () => {
      expect(DoublyLinkedList).toBeDefined();
      expect(typeof DoublyLinkedList).toBe('function');
      expect(doublyLinkedList).toBeInstanceOf(DoublyLinkedList);
      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
    });

    test('The DoublyLinkedList should have a method called add', () => {
      expect(doublyLinkedList.add).toBeDefined();
      expect(typeof doublyLinkedList.add).toBe('function');
    });

    test('The DoublyLinkedList should have a method called remove', () => {
      expect(doublyLinkedList.remove).toBeDefined();
      expect(typeof doublyLinkedList.remove).toBe('function');
    });

    test('Removing an item from an empty list should return null', () => {
      const result = doublyLinkedList.remove('nonexistent');
      expect(result).toBeNull();
      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
    });

    test('The add method should add items to the list', () => {
      doublyLinkedList.add('first');
      expect(doublyLinkedList.head).not.toBeNull();
      expect(doublyLinkedList.head.data).toBe('first');
      expect(doublyLinkedList.tail).not.toBeNull();
      expect(doublyLinkedList.tail.data).toBe('first');

      doublyLinkedList.add('second');
      expect(doublyLinkedList.head.data).toBe('first');
      expect(doublyLinkedList.tail.data).toBe('second');
    });

    test('Each node should keep track of the previous node', () => {
      doublyLinkedList.add('first');
      doublyLinkedList.add('second');
      doublyLinkedList.add('third');

      // Check forward linking
      expect(doublyLinkedList.head.data).toBe('first');
      expect(doublyLinkedList.head.next.data).toBe('second');
      expect(doublyLinkedList.head.next.next.data).toBe('third');

      // Check backward linking
      expect(doublyLinkedList.tail.data).toBe('third');
      expect(doublyLinkedList.tail.prev.data).toBe('second');
      expect(doublyLinkedList.tail.prev.prev.data).toBe('first');

      // Check bidirectional consistency
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.tail.next).toBeNull();
    });

    test('The first item should be removable from the list', () => {
      doublyLinkedList.add('first');
      doublyLinkedList.add('second');
      doublyLinkedList.add('third');

      doublyLinkedList.remove('first');

      expect(doublyLinkedList.head.data).toBe('second');
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.head.next.data).toBe('third');
      expect(doublyLinkedList.tail.data).toBe('third');
    });

    test('The last item should be removable from the list', () => {
      doublyLinkedList.add('first');
      doublyLinkedList.add('second');
      doublyLinkedList.add('third');

      doublyLinkedList.remove('third');

      expect(doublyLinkedList.head.data).toBe('first');
      expect(doublyLinkedList.tail.data).toBe('second');
      expect(doublyLinkedList.tail.next).toBeNull();
      expect(doublyLinkedList.tail.prev.data).toBe('first');
    });
  });

  describe('Add Method Comprehensive Tests', () => {
    test('should add single element to empty list', () => {
      doublyLinkedList.add('onlyElement');

      expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.head.data).toBe('onlyElement');
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.head.next).toBeNull();
    });

    test('should add multiple elements maintaining proper order', () => {
      const elements = ['first', 'second', 'third', 'fourth'];
      elements.forEach(element => doublyLinkedList.add(element));

      // Forward traversal
      let current = doublyLinkedList.head;
      const forwardElements = [];
      while (current !== null) {
        forwardElements.push(current.data);
        current = current.next;
      }
      expect(forwardElements).toEqual(elements);

      // Backward traversal
      current = doublyLinkedList.tail;
      const backwardElements = [];
      while (current !== null) {
        backwardElements.push(current.data);
        current = current.prev;
      }
      expect(backwardElements).toEqual([...elements].reverse());
    });

    test('should handle different data types', () => {
      doublyLinkedList.add(42);
      doublyLinkedList.add('string');
      doublyLinkedList.add({ key: 'value' });
      doublyLinkedList.add([1, 2, 3]);

      expect(doublyLinkedList.head.data).toBe(42);
      expect(doublyLinkedList.head.next.data).toBe('string');
      expect(doublyLinkedList.head.next.next.data).toEqual({ key: 'value' });
      expect(doublyLinkedList.tail.data).toEqual([1, 2, 3]);
    });

    test('should maintain consistent head and tail references', () => {
      doublyLinkedList.add('first');
      expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);

      doublyLinkedList.add('second');
      expect(doublyLinkedList.head).not.toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.head.next).toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.tail.prev).toBe(doublyLinkedList.head);
    });
  });

  describe('Remove Method Comprehensive Tests', () => {
    test('should remove all occurrences of specified element', () => {
      doublyLinkedList.add('A');
      doublyLinkedList.add('B');
      doublyLinkedList.add('A');
      doublyLinkedList.add('C');
      doublyLinkedList.add('A');

      doublyLinkedList.remove('A');

      // Collect remaining elements
      const remaining = [];
      let current = doublyLinkedList.head;
      while (current !== null) {
        remaining.push(current.data);
        current = current.next;
      }
      expect(remaining).toEqual(['B', 'C']);
    });

    test('should handle removal of single element list', () => {
      doublyLinkedList.add('onlyElement');
      doublyLinkedList.remove('onlyElement');

      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
    });

    test('should handle removal of middle elements', () => {
      doublyLinkedList.add('first');
      doublyLinkedList.add('middle');
      doublyLinkedList.add('last');

      doublyLinkedList.remove('middle');

      expect(doublyLinkedList.head.data).toBe('first');
      expect(doublyLinkedList.tail.data).toBe('last');
      expect(doublyLinkedList.head.next).toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.tail.prev).toBe(doublyLinkedList.head);
    });

    test('should handle removal of nonexistent element', () => {
      doublyLinkedList.add('existing');
      const result = doublyLinkedList.remove('nonexistent');

      expect(result).toBeUndefined(); // Not null, as list is not empty
      expect(doublyLinkedList.head.data).toBe('existing');
    });

    test('should maintain proper links after multiple removals', () => {
      const elements = ['A', 'B', 'C', 'B', 'D', 'B', 'E'];
      elements.forEach(element => doublyLinkedList.add(element));

      doublyLinkedList.remove('B');

      // Check remaining elements: A, C, D, E
      const remaining = [];
      let current = doublyLinkedList.head;
      while (current !== null) {
        remaining.push(current.data);
        current = current.next;
      }
      expect(remaining).toEqual(['A', 'C', 'D', 'E']);

      // Verify bidirectional linking integrity
      current = doublyLinkedList.tail;
      const backwardRemaining = [];
      while (current !== null) {
        backwardRemaining.push(current.data);
        current = current.prev;
      }
      expect(backwardRemaining).toEqual(['E', 'D', 'C', 'A']);
    });
  });

  describe('Edge Cases and Integration Tests', () => {
    test('should handle repeated adds and removes', () => {
      doublyLinkedList.add('persistent');
      doublyLinkedList.add('remove1');
      doublyLinkedList.add('persistent');
      doublyLinkedList.add('remove2');

      doublyLinkedList.remove('remove1');
      doublyLinkedList.remove('remove2');

      const remaining = [];
      let current = doublyLinkedList.head;
      while (current !== null) {
        remaining.push(current.data);
        current = current.next;
      }
      expect(remaining).toEqual(['persistent', 'persistent']);
    });

    test('should handle removal that empties the list', () => {
      doublyLinkedList.add('same');
      doublyLinkedList.add('same');
      doublyLinkedList.add('same');

      doublyLinkedList.remove('same');

      expect(doublyLinkedList.head).toBeNull();
      expect(doublyLinkedList.tail).toBeNull();
    });

    test('should maintain correct structure with complex operations', () => {
      // Build: A -> B -> C -> B -> D
      ['A', 'B', 'C', 'B', 'D'].forEach(el => doublyLinkedList.add(el));

      // Remove B (should remove both occurrences)
      doublyLinkedList.remove('B');

      // Result should be: A -> C -> D
      expect(doublyLinkedList.head.data).toBe('A');
      expect(doublyLinkedList.head.next.data).toBe('C');
      expect(doublyLinkedList.head.next.next.data).toBe('D');
      expect(doublyLinkedList.tail.data).toBe('D');

      // Verify reverse links
      expect(doublyLinkedList.tail.prev.data).toBe('C');
      expect(doublyLinkedList.tail.prev.prev.data).toBe('A');
      expect(doublyLinkedList.head.prev).toBeNull();
    });
  });

  describe('Return Value and State Validation', () => {
    test('should return appropriate values from remove method', () => {
      // Empty list
      expect(doublyLinkedList.remove('anything')).toBeNull();

      // Non-empty list
      doublyLinkedList.add('element');
      expect(doublyLinkedList.remove('nonexistent')).toBeUndefined();
      expect(doublyLinkedList.remove('element')).toBeUndefined();
    });

    test('should maintain consistent internal state', () => {
      doublyLinkedList.add('test');

      // Single element case
      expect(doublyLinkedList.head).toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.head.next).toBeNull();

      doublyLinkedList.add('test2');

      // Two element case
      expect(doublyLinkedList.head).not.toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.head.next).toBe(doublyLinkedList.tail);
      expect(doublyLinkedList.tail.prev).toBe(doublyLinkedList.head);
      expect(doublyLinkedList.head.prev).toBeNull();
      expect(doublyLinkedList.tail.next).toBeNull();
    });
  });
});
