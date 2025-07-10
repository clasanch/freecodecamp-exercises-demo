/**
 * Tests for Remove Elements from a Linked List
 * TDD Implementation - Tests BEFORE implementation
 */

import LinkedList from '../../src/data-structures/remove-elements-from-a-linked-list.js';

describe('Remove Elements from a Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('Method existence and basic functionality', () => {
    test('should have a remove method', () => {
      expect(typeof list.remove).toBe('function');
    });

    test('should remove single element from single-node list', () => {
      list.add('only');
      list.remove('only');
      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();
    });

    test('should decrease length by one when element is removed', () => {
      list.add('first');
      list.add('second');
      const initialSize = list.size();
      list.remove('first');
      expect(list.size()).toBe(initialSize - 1);
    });
  });

  describe('Head node removal', () => {
    test('should reassign head to second node when first node is removed', () => {
      list.add('first');
      list.add('second');
      list.add('third');

      list.remove('first');

      expect(list.head().element).toBe('second');
      expect(list.size()).toBe(2);
    });

    test('should handle head removal when only one node exists', () => {
      list.add('single');
      list.remove('single');

      expect(list.head()).toBeNull();
      expect(list.size()).toBe(0);
    });

    test('should handle head removal with two nodes', () => {
      list.add('first');
      list.add('second');

      list.remove('first');

      expect(list.head().element).toBe('second');
      expect(list.head().next).toBeNull();
      expect(list.size()).toBe(1);
    });
  });

  describe('Middle node removal', () => {
    test('should reassign previous node reference to skip removed node', () => {
      list.add('first');
      list.add('middle');
      list.add('last');

      list.remove('middle');

      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('last');
      expect(list.size()).toBe(2);
    });

    test('should handle middle removal in longer list', () => {
      list.add('a');
      list.add('b');
      list.add('c');
      list.add('d');
      list.add('e');

      list.remove('c');

      // Verify connection: b -> d (skipping c)
      let current = list.head();
      expect(current.element).toBe('a');
      current = current.next;
      expect(current.element).toBe('b');
      current = current.next;
      expect(current.element).toBe('d'); // c was skipped
      expect(list.size()).toBe(4);
    });

    test('should handle multiple middle removals', () => {
      list.add('a');
      list.add('b');
      list.add('c');
      list.add('d');

      list.remove('b');
      list.remove('c');

      expect(list.head().element).toBe('a');
      expect(list.head().next.element).toBe('d');
      expect(list.size()).toBe(2);
    });
  });

  describe('Tail node removal', () => {
    test('should remove last node and update previous node next to null', () => {
      list.add('first');
      list.add('second');
      list.add('last');

      list.remove('last');

      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('second');
      expect(list.head().next.next).toBeNull();
      expect(list.size()).toBe(2);
    });

    test('should handle tail removal when only two nodes exist', () => {
      list.add('first');
      list.add('last');

      list.remove('last');

      expect(list.head().element).toBe('first');
      expect(list.head().next).toBeNull();
      expect(list.size()).toBe(1);
    });
  });

  describe('Non-existent element handling', () => {
    test('should not change list when removing non-existent element', () => {
      list.add('first');
      list.add('second');
      const originalSize = list.size();

      list.remove('nonexistent');

      expect(list.size()).toBe(originalSize);
      expect(list.head().element).toBe('first');
      expect(list.head().next.element).toBe('second');
    });

    test('should not change empty list when removing element', () => {
      list.remove('anything');

      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();
    });

    test('should handle case-sensitive element comparison', () => {
      list.add('Test');
      list.remove('test'); // Different case

      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('Test');
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle undefined element removal', () => {
      list.add('first');
      list.remove(undefined);

      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('first');
    });

    test('should handle null element removal', () => {
      list.add('first');
      list.remove(null);

      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('first');
    });

    test('should handle removing actual null element if stored', () => {
      list.add(null);
      list.add('second');

      list.remove(null);

      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('second');
    });

    test('should handle numeric elements', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      list.remove(2);

      expect(list.size()).toBe(2);
      expect(list.head().element).toBe(1);
      expect(list.head().next.element).toBe(3);
    });

    test('should handle boolean elements', () => {
      list.add(true);
      list.add(false);

      list.remove(true);

      expect(list.size()).toBe(1);
      expect(list.head().element).toBe(false);
    });
  });

  describe('Complex scenarios', () => {
    test('should handle removing all elements one by one', () => {
      list.add('a');
      list.add('b');
      list.add('c');

      list.remove('b');
      expect(list.size()).toBe(2);

      list.remove('a');
      expect(list.size()).toBe(1);
      expect(list.head().element).toBe('c');

      list.remove('c');
      expect(list.size()).toBe(0);
      expect(list.head()).toBeNull();
    });

    test('should handle duplicate elements (remove first occurrence)', () => {
      list.add('duplicate');
      list.add('middle');
      list.add('duplicate');

      list.remove('duplicate');

      expect(list.size()).toBe(2);
      expect(list.head().element).toBe('middle');
      expect(list.head().next.element).toBe('duplicate');
    });

    test('should maintain list integrity after multiple operations', () => {
      // Build: a -> b -> c -> d -> e
      ['a', 'b', 'c', 'd', 'e'].forEach(element => list.add(element));

      // Remove: c, a, e (middle, head, tail)
      list.remove('c');
      list.remove('a');
      list.remove('e');

      // Should have: b -> d
      expect(list.size()).toBe(2);
      expect(list.head().element).toBe('b');
      expect(list.head().next.element).toBe('d');
      expect(list.head().next.next).toBeNull();
    });
  });
});
