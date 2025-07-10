/**
 * Tests for Remove Elements from a Linked List by Index
 * TDD Implementation - Tests BEFORE implementation
 */

import LinkedList from '../../src/data-structures/remove-elements-from-a-linked-list-by-index.js';

describe('Remove Elements from a Linked List by Index', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('Method existence and basic functionality', () => {
    test('should have a removeAt method', () => {
      expect(typeof list.removeAt).toBe('function');
    });

    test('should preserve existing methods from skeleton', () => {
      expect(typeof list.add).toBe('function');
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

  describe('FreeCodeCamp Test Requirements', () => {
    test('FCC Test 1: Your LinkedList class should have a removeAt method', () => {
      expect(typeof list.removeAt).toBe('function');
    });

    test('FCC Test 2: Your removeAt method should reduce the length of the linked list by one', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const initialLength = list.size();
      list.removeAt(1);
      const finalLength = list.size();

      expect(finalLength).toBe(initialLength - 1);
    });

    test('FCC Test 3: Your removeAt method should remove the element at the specified index from the linked list', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      list.removeAt(1); // Remove 'second'

      // Verify 'second' is no longer in the list by checking remaining elements
      expect(list.size()).toBe(2);
      // The list should now contain only 'first' and 'third'
      // We need a way to verify this - we'll add a simple check
      const head = list.head();
      expect(head.element).toBe('first');
      expect(head.next.element).toBe('third');
      expect(head.next.next).toBeNull();
    });

    test('FCC Test 4: When only one element is present in the linked list, your removeAt method should remove and return the element at specified index, and reduce the length of the linked list', () => {
      list.add('single');

      const removedElement = list.removeAt(0);

      expect(removedElement).toBe('single');
      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();
    });

    test('FCC Test 5: Your removeAt method should return the element of the removed node', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const removedElement = list.removeAt(1);
      expect(removedElement).toBe('second');
    });

    test('FCC Test 6: Your removeAt method should return null and the linked list should not change if the given index is less than 0', () => {
      list.add('first');
      list.add('second');

      const initialLength = list.size();
      const result = list.removeAt(-1);
      const finalLength = list.size();

      expect(result).toBeNull();
      expect(finalLength).toBe(initialLength);
      expect(list.head().element).toBe('first');
    });

    test('FCC Test 7: Your removeAt method should return null and the linked list should not change if the given index is greater than or equal to the length of the list', () => {
      list.add('first');
      list.add('second');

      const initialLength = list.size();

      // Test index equal to length
      const resultEqual = list.removeAt(2);
      expect(resultEqual).toBeNull();
      expect(list.size()).toBe(initialLength);

      // Test index greater than length
      const resultGreater = list.removeAt(5);
      expect(resultGreater).toBeNull();
      expect(list.size()).toBe(initialLength);

      // Verify list structure unchanged
      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('second');
    });
  });

  describe('Index validation and edge cases', () => {
    test('should return null for empty list with any index', () => {
      expect(list.removeAt(0)).toBeNull();
      expect(list.removeAt(1)).toBeNull();
      expect(list.removeAt(-1)).toBeNull();
      expect(list.size()).toBe(0);
    });

    test('should handle various negative indices correctly', () => {
      list.add('element');

      const initialLength = list.size();

      expect(list.removeAt(-1)).toBeNull();
      expect(list.removeAt(-5)).toBeNull();
      expect(list.removeAt(-100)).toBeNull();

      expect(list.size()).toBe(initialLength);
      expect(list.head().element).toBe('element');
    });

    test('should handle various out-of-bounds positive indices', () => {
      list.add('first');
      list.add('second');

      const initialLength = list.size();

      expect(list.removeAt(2)).toBeNull(); // Equal to length
      expect(list.removeAt(3)).toBeNull(); // Greater than length
      expect(list.removeAt(10)).toBeNull(); // Much greater than length

      expect(list.size()).toBe(initialLength);
    });

    test('should handle floating point indices gracefully', () => {
      list.add('element');

      const initialLength = list.size();

      expect(list.removeAt(0.5)).toBeNull();
      expect(list.removeAt(1.9)).toBeNull();
      expect(list.removeAt(-0.1)).toBeNull();

      expect(list.size()).toBe(initialLength);
    });
  });

  describe('Head removal scenarios (index 0)', () => {
    test('should remove head from single-element list', () => {
      list.add('single');

      const removedElement = list.removeAt(0);

      expect(removedElement).toBe('single');
      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();
    });

    test('should remove head from multi-element list and update head pointer', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      const removedElement = list.removeAt(0);

      expect(removedElement).toBe('first');
      expect(list.size()).toBe(2);
      expect(list.head().element).toBe('second');
      expect(list.head().next.element).toBe('third');
    });

    test('should remove head from two-element list', () => {
      list.add('first');
      list.add('second');

      const removedElement = list.removeAt(0);

      expect(removedElement).toBe('first');
      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('second');
      expect(list.head().next).toBeNull();
    });
  });

  describe('Middle removal scenarios', () => {
    test('should remove middle element and maintain connections', () => {
      list.add('first');
      list.add('middle');
      list.add('last');

      const removedElement = list.removeAt(1);

      expect(removedElement).toBe('middle');
      expect(list.size()).toBe(2);
      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('last');
      expect(list.head().next.next).toBeNull();
    });

    test('should remove middle element from larger list', () => {
      const elements = ['a', 'b', 'c', 'd', 'e'];
      elements.forEach(el => list.add(el));

      const removedElement = list.removeAt(2); // Remove 'c'

      expect(removedElement).toBe('c');
      expect(list.size()).toBe(4);

      // Verify connections: a -> b -> d -> e
      let current = list.head();
      expect(current.element).toBe('a');
      current = current.next;
      expect(current.element).toBe('b');
      current = current.next;
      expect(current.element).toBe('d');
      current = current.next;
      expect(current.element).toBe('e');
      expect(current.next).toBeNull();
    });
  });

  describe('Tail removal scenarios', () => {
    test('should remove tail element from multi-element list', () => {
      list.add('first');
      list.add('second');
      list.add('tail');

      const removedElement = list.removeAt(2);

      expect(removedElement).toBe('tail');
      expect(list.size()).toBe(2);
      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('second');
      expect(list.head().next.next).toBeNull();
    });

    test('should remove tail from longer list', () => {
      const elements = ['a', 'b', 'c', 'd', 'e'];
      elements.forEach(el => list.add(el));

      const removedElement = list.removeAt(4); // Remove 'e'

      expect(removedElement).toBe('e');
      expect(list.size()).toBe(4);

      // Verify chain ends at 'd'
      let current = list.head();
      for (let i = 0; i < 3; i++) {
        current = current.next;
      }
      expect(current.element).toBe('d');
      expect(current.next).toBeNull();
    });
  });

  describe('Data type handling', () => {
    test('should handle different data types removal', () => {
      list.add(42);
      list.add('string');
      list.add(true);
      list.add(null);
      list.add(undefined);

      expect(list.removeAt(1)).toBe('string');
      expect(list.removeAt(2)).toBe(null); // Index 2 is now 'true' shifted to position
      expect(list.removeAt(0)).toBe(42);

      expect(list.size()).toBe(2);
    });

    test('should handle object removal', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const obj3 = { id: 3 };

      list.add(obj1);
      list.add(obj2);
      list.add(obj3);

      const removedObject = list.removeAt(1);

      expect(removedObject).toBe(obj2);
      expect(list.size()).toBe(2);
      expect(list.head().element).toBe(obj1);
      expect(list.head().next.element).toBe(obj3);
    });
  });

  describe('Sequential operations and stress testing', () => {
    test('should handle multiple sequential removals', () => {
      const elements = ['a', 'b', 'c', 'd', 'e'];
      elements.forEach(el => list.add(el));

      // Remove from different positions
      expect(list.removeAt(2)).toBe('c'); // Remove middle
      expect(list.size()).toBe(4);

      expect(list.removeAt(0)).toBe('a'); // Remove new head
      expect(list.size()).toBe(3);

      expect(list.removeAt(2)).toBe('e'); // Remove tail
      expect(list.size()).toBe(2);

      // Final state should be ['b', 'd']
      expect(list.head().element).toBe('b');
      expect(list.head().next.element).toBe('d');
      expect(list.head().next.next).toBeNull();
    });

    test('should handle removal from larger dataset', () => {
      // Build list with 10 elements
      for (let i = 0; i < 10; i++) {
        list.add(`item${i}`);
      }

      expect(list.size()).toBe(10);

      // Remove middle elements
      expect(list.removeAt(5)).toBe('item5');
      expect(list.removeAt(4)).toBe('item4'); // Indices shift after removal
      expect(list.removeAt(7)).toBe('item9'); // Was at index 9, now at 7

      expect(list.size()).toBe(7);
    });

    test('should maintain performance with runner technique', () => {
      // Build larger list
      const size = 100;
      for (let i = 0; i < size; i++) {
        list.add(`element${i}`);
      }

      // Test removals at various positions
      expect(list.removeAt(50)).toBe('element50');
      expect(list.removeAt(0)).toBe('element0');
      expect(list.removeAt(97)).toBe('element99'); // Was at end, now at 97

      expect(list.size()).toBe(97);
    });

    test('should handle edge case of removing all elements one by one', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      expect(list.removeAt(1)).toBe('second'); // Size becomes 2
      expect(list.removeAt(1)).toBe('third'); // Size becomes 1
      expect(list.removeAt(0)).toBe('first'); // Size becomes 0

      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();

      // Try to remove from empty list
      expect(list.removeAt(0)).toBeNull();
    });
  });

  describe('Integration with existing methods', () => {
    test('should work correctly after add operations', () => {
      list.add('original');
      expect(list.removeAt(0)).toBe('original');
      expect(list.size()).toBe(0);

      // Add new elements
      list.add('new1');
      list.add('new2');
      expect(list.removeAt(1)).toBe('new2');
      expect(list.size()).toBe(1);
    });

    test('should maintain list integrity after mixed operations', () => {
      list.add('a');
      list.add('b');
      list.add('c');

      expect(list.removeAt(1)).toBe('b'); // Remove middle

      list.add('d'); // Add to end

      // List should now be: a -> c -> d
      expect(list.size()).toBe(3);
      expect(list.head().element).toBe('a');
      expect(list.head().next.element).toBe('c');
      expect(list.head().next.next.element).toBe('d');
    });
  });
});
