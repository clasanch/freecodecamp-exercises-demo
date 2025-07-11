/**
 * Tests for Reverse a Doubly Linked List
 * TDD Implementation - Tests BEFORE implementation
 */

import DoublyLinkedList from '../../src/data-structures/reverse-doubly-linked-list.js';

describe('Reverse a Doubly Linked List', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe('Data structure and method existence', () => {
    test('should create DoublyLinkedList data structure', () => {
      expect(list).toBeInstanceOf(DoublyLinkedList);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    test('should have a method called reverse', () => {
      expect(typeof list.reverse).toBe('function');
    });
  });

  describe('Empty list handling', () => {
    test('should return null when reversing an empty list', () => {
      const result = list.reverse();
      expect(result).toBe(null);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe('Single node list reversal', () => {
    test('should handle single node list correctly', () => {
      list.add('only');

      const result = list.reverse();

      // Should not return null for non-empty list
      expect(result).not.toBe(null);

      // Head and tail should point to the same node
      expect(list.head).toBe(list.tail);
      expect(list.head.data).toBe('only');
      expect(list.head.next).toBe(null);
      expect(list.head.prev).toBe(null);
    });
  });

  describe('Two node list reversal', () => {
    test('should correctly reverse two node list', () => {
      list.add('first');
      list.add('second');

      const originalHead = list.head;
      const originalTail = list.tail;

      const result = list.reverse();

      // Should not return null
      expect(result).not.toBe(null);

      // Head should be the previous tail
      expect(list.head).toBe(originalTail);
      expect(list.head.data).toBe('second');

      // Tail should be the previous head
      expect(list.tail).toBe(originalHead);
      expect(list.tail.data).toBe('first');

      // Verify linking integrity
      expect(list.head.next).toBe(list.tail);
      expect(list.head.prev).toBe(null);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev).toBe(list.head);
    });
  });

  describe('Multiple node list reversal', () => {
    test('should correctly reverse three node list', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const result = list.reverse();

      // Should not return null
      expect(result).not.toBe(null);

      // Verify order reversal by traversing forward
      const forwardTraversal = [];
      let current = list.head;
      while (current !== null) {
        forwardTraversal.push(current.data);
        current = current.next;
      }
      expect(forwardTraversal).toEqual(['third', 'second', 'first']);

      // Verify backward traversal
      const backwardTraversal = [];
      current = list.tail;
      while (current !== null) {
        backwardTraversal.push(current.data);
        current = current.prev;
      }
      expect(backwardTraversal).toEqual(['first', 'second', 'third']);
    });

    test('should correctly reverse five node list', () => {
      const elements = ['A', 'B', 'C', 'D', 'E'];
      elements.forEach(element => list.add(element));

      const result = list.reverse();

      // Should not return null
      expect(result).not.toBe(null);

      // Verify complete reversal
      const traversed = [];
      let current = list.head;
      while (current !== null) {
        traversed.push(current.data);
        current = current.next;
      }
      expect(traversed).toEqual(['E', 'D', 'C', 'B', 'A']);
    });
  });

  describe('Bidirectional linking integrity', () => {
    test('should maintain correct next and previous references after reversal', () => {
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);

      list.reverse();

      // Verify all forward links
      expect(list.head.data).toBe(4);
      expect(list.head.next.data).toBe(3);
      expect(list.head.next.next.data).toBe(2);
      expect(list.head.next.next.next.data).toBe(1);
      expect(list.head.next.next.next.next).toBe(null);

      // Verify all backward links
      expect(list.tail.data).toBe(1);
      expect(list.tail.prev.data).toBe(2);
      expect(list.tail.prev.prev.data).toBe(3);
      expect(list.tail.prev.prev.prev.data).toBe(4);
      expect(list.tail.prev.prev.prev.prev).toBe(null);

      // Verify head and tail boundary conditions
      expect(list.head.prev).toBe(null);
      expect(list.tail.next).toBe(null);
    });

    test('should allow traversal in both directions after reversal', () => {
      const originalOrder = ['alpha', 'beta', 'gamma', 'delta'];
      originalOrder.forEach(item => list.add(item));

      list.reverse();

      // Forward traversal should give reversed order
      const forward = [];
      let current = list.head;
      while (current !== null) {
        forward.push(current.data);
        current = current.next;
      }
      expect(forward).toEqual(['delta', 'gamma', 'beta', 'alpha']);

      // Backward traversal should give original order
      const backward = [];
      current = list.tail;
      while (current !== null) {
        backward.push(current.data);
        current = current.prev;
      }
      expect(backward).toEqual(['alpha', 'beta', 'gamma', 'delta']);
    });
  });

  describe('Multiple reversals', () => {
    test('should handle multiple consecutive reversals correctly', () => {
      list.add('X');
      list.add('Y');
      list.add('Z');

      // First reversal
      list.reverse();
      let traversal = [];
      let current = list.head;
      while (current !== null) {
        traversal.push(current.data);
        current = current.next;
      }
      expect(traversal).toEqual(['Z', 'Y', 'X']);

      // Second reversal (should restore original order)
      list.reverse();
      traversal = [];
      current = list.head;
      while (current !== null) {
        traversal.push(current.data);
        current = current.next;
      }
      expect(traversal).toEqual(['X', 'Y', 'Z']);

      // Third reversal
      list.reverse();
      traversal = [];
      current = list.head;
      while (current !== null) {
        traversal.push(current.data);
        current = current.next;
      }
      expect(traversal).toEqual(['Z', 'Y', 'X']);
    });
  });

  describe('Data preservation', () => {
    test('should preserve all node data during reversal', () => {
      const testData = [42, 'string', { key: 'value' }, [1, 2, 3], null, true];
      testData.forEach(data => list.add(data));

      list.reverse();

      const preservedData = [];
      let current = list.head;
      while (current !== null) {
        preservedData.push(current.data);
        current = current.next;
      }

      // Data should be preserved in reverse order
      expect(preservedData).toEqual([true, null, [1, 2, 3], { key: 'value' }, 'string', 42]);

      // Verify object and array references are maintained
      expect(preservedData[2]).toBe(testData[3]); // Array reference
      expect(preservedData[3]).toBe(testData[2]); // Object reference
    });
  });

  describe('Remove method coverage for 100% completeness', () => {
    test('should cover remove method with empty list', () => {
      const result = list.remove('anything');
      expect(result).toBe(null);
    });

    test('should cover remove method - head removal case', () => {
      list.add('first');
      list.add('second');

      const result = list.remove('first');
      expect(result).toBe(undefined);
      expect(list.head.data).toBe('second');
      expect(list.head.prev).toBe(null);
    });

    test('should cover remove method - tail removal case', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const result = list.remove('third');
      expect(result).toBe(undefined);
      expect(list.tail.data).toBe('second');
      expect(list.tail.next).toBe(null);
    });

    test('should cover remove method - single element list becomes empty', () => {
      list.add('only');

      const result = list.remove('only');
      expect(result).toBe(undefined);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    test('should cover remove method with existing elements', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const result = list.remove('second');
      expect(result).toBe(undefined);

      // Verify removal worked
      const traversal = [];
      let current = list.head;
      while (current !== null) {
        traversal.push(current.data);
        current = current.next;
      }
      expect(traversal).toEqual(['first', 'third']);
    });

    test('should cover add method for complete coverage', () => {
      list.add('test1');
      list.add('test2');
      expect(list.head.data).toBe('test1');
      expect(list.tail.data).toBe('test2');
    });
  });

  describe('Edge cases and stress testing', () => {
    test('should handle alternating add and reverse operations', () => {
      list.add('first');
      list.reverse();
      expect(list.head.data).toBe('first');

      list.add('second');
      list.reverse();
      const traversal = [];
      let current = list.head;
      while (current !== null) {
        traversal.push(current.data);
        current = current.next;
      }
      expect(traversal).toEqual(['second', 'first']);
    });

    test('should handle large list reversal efficiently', () => {
      // Create list with 100 elements
      for (let i = 0; i < 100; i++) {
        list.add(i);
      }

      const startTime = Date.now();
      list.reverse();
      const endTime = Date.now();

      // Verify reversal correctness
      expect(list.head.data).toBe(99);
      expect(list.tail.data).toBe(0);

      // Operation should be reasonably fast (less than 50ms for 100 elements)
      expect(endTime - startTime).toBeLessThan(50);
    });
  });
});
