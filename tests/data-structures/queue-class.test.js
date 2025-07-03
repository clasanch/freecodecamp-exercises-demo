/**
 * Tests for Queue Class - FIFO Data Structure
 *
 * TDD Implementation following Red-Green-Refactor methodology
 * Tests written BEFORE implementation to define expected behavior
 *
 * Queue operations follow First-In First-Out principle:
 * - Elements are added to the tail (enqueue)
 * - Elements are removed from the front (dequeue)
 * - Front element can be viewed without removal (front)
 */

import Queue from '../../src/data-structures/queue-class.js';

describe('Queue Class - FIFO Data Structure', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('Method existence and basic functionality', () => {
    test('should have enqueue method', () => {
      expect(typeof queue.enqueue).toBe('function');
    });

    test('should have dequeue method', () => {
      expect(typeof queue.dequeue).toBe('function');
    });

    test('should have front method', () => {
      expect(typeof queue.front).toBe('function');
    });

    test('should have size method', () => {
      expect(typeof queue.size).toBe('function');
    });

    test('should have isEmpty method', () => {
      expect(typeof queue.isEmpty).toBe('function');
    });
  });

  describe('Queue state management', () => {
    test('should be empty when created', () => {
      expect(queue.isEmpty()).toBe(true);
      expect(queue.size()).toBe(0);
    });

    test('should return undefined when dequeue from empty queue', () => {
      expect(queue.dequeue()).toBeUndefined();
    });

    test('should return undefined when front called on empty queue', () => {
      expect(queue.front()).toBeUndefined();
    });
  });

  describe('Enqueue operation - adding elements to tail', () => {
    test('should add single element and update state', () => {
      queue.enqueue('first');

      expect(queue.isEmpty()).toBe(false);
      expect(queue.size()).toBe(1);
      expect(queue.front()).toBe('first');
    });

    test('should add multiple elements maintaining FIFO order', () => {
      queue.enqueue('first');
      queue.enqueue('second');
      queue.enqueue('third');

      expect(queue.size()).toBe(3);
      expect(queue.front()).toBe('first'); // Front should be first added
    });

    test('should handle different data types', () => {
      queue.enqueue(1);
      queue.enqueue('string');
      queue.enqueue([1, 2, 3]);
      queue.enqueue({ key: 'value' });

      expect(queue.size()).toBe(4);
      expect(queue.front()).toBe(1);
    });
  });

  describe('Dequeue operation - removing elements from front', () => {
    test('should remove and return front element', () => {
      queue.enqueue('first');
      queue.enqueue('second');

      const removed = queue.dequeue();

      expect(removed).toBe('first');
      expect(queue.size()).toBe(1);
      expect(queue.front()).toBe('second');
    });

    test('should maintain FIFO order with multiple dequeue operations', () => {
      const elements = ['a', 'b', 'c', 'd'];

      // Enqueue all elements
      elements.forEach(element => queue.enqueue(element));

      // Dequeue should return elements in same order
      elements.forEach(expectedElement => {
        expect(queue.dequeue()).toBe(expectedElement);
      });

      expect(queue.isEmpty()).toBe(true);
    });

    test('should handle mixed enqueue and dequeue operations', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.dequeue()).toBe(1); // Remove first

      queue.enqueue(3);

      expect(queue.dequeue()).toBe(2); // Remove second
      expect(queue.dequeue()).toBe(3); // Remove third
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe('Front operation - viewing front element', () => {
    test('should return front element without removing it', () => {
      queue.enqueue('peek-me');
      queue.enqueue('second');

      expect(queue.front()).toBe('peek-me');
      expect(queue.front()).toBe('peek-me'); // Should be idempotent
      expect(queue.size()).toBe(2); // Size unchanged
    });

    test('should update when front element is dequeued', () => {
      queue.enqueue('first');
      queue.enqueue('second');

      expect(queue.front()).toBe('first');
      queue.dequeue();
      expect(queue.front()).toBe('second');
    });
  });

  describe('Size operation - counting elements', () => {
    test('should track size accurately during operations', () => {
      expect(queue.size()).toBe(0);

      queue.enqueue(1);
      expect(queue.size()).toBe(1);

      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).toBe(3);

      queue.dequeue();
      expect(queue.size()).toBe(2);

      queue.dequeue();
      queue.dequeue();
      expect(queue.size()).toBe(0);
    });
  });

  describe('isEmpty operation - checking empty state', () => {
    test('should return false when queue has elements', () => {
      queue.enqueue('not-empty');
      expect(queue.isEmpty()).toBe(false);
    });

    test('should return true after removing all elements', () => {
      queue.enqueue(1);
      queue.enqueue(2);

      queue.dequeue();
      expect(queue.isEmpty()).toBe(false);

      queue.dequeue();
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe('Edge cases and stress testing', () => {
    test('should handle large number of operations efficiently', () => {
      const largeNumber = 1000;

      // Enqueue large number of elements
      for (let i = 0; i < largeNumber; i++) {
        queue.enqueue(i);
      }

      expect(queue.size()).toBe(largeNumber);
      expect(queue.front()).toBe(0);

      // Dequeue all elements
      for (let i = 0; i < largeNumber; i++) {
        expect(queue.dequeue()).toBe(i);
      }

      expect(queue.isEmpty()).toBe(true);
    });

    test('should handle falsy values correctly', () => {
      const falsyValues = [0, '', false, null];

      falsyValues.forEach(value => queue.enqueue(value));

      expect(queue.size()).toBe(4);
      expect(queue.isEmpty()).toBe(false);

      falsyValues.forEach(expectedValue => {
        expect(queue.dequeue()).toBe(expectedValue);
      });
    });
  });
});
