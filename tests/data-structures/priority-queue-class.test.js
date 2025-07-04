/**
 * Tests for Priority Queue Class - Priority-based Queue Data Structure
 *
 * TDD Implementation following Red-Green-Refactor methodology
 * Tests written BEFORE implementation to define expected behavior
 *
 * Priority Queue operations follow priority-based processing:
 * - Elements with lower priority numbers have higher precedence (1 > 2 > 3)
 * - Elements with same priority follow FIFO order
 * - enqueue adds elements in priority order
 * - dequeue removes highest priority element
 * - front views highest priority element without removal
 */

import PriorityQueue from '../../src/data-structures/priority-queue-class.js';

describe('Priority Queue Class - Priority-based Queue Data Structure', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  describe('Method existence and initialization', () => {
    test('should have enqueue method', () => {
      expect(typeof pq.enqueue).toBe('function');
    });

    test('should have dequeue method', () => {
      expect(typeof pq.dequeue).toBe('function');
    });

    test('should have front method', () => {
      expect(typeof pq.front).toBe('function');
    });

    test('should have size method', () => {
      expect(typeof pq.size).toBe('function');
    });

    test('should have isEmpty method', () => {
      expect(typeof pq.isEmpty).toBe('function');
    });

    test('should be empty when created', () => {
      expect(pq.isEmpty()).toBe(true);
      expect(pq.size()).toBe(0);
    });

    test('should have printCollection method from skeleton', () => {
      expect(typeof pq.printCollection).toBe('function');
    });

    test('should have working printCollection method that calls console.log', () => {
      const originalConsoleLog = console.log;
      let loggedValue;

      console.log = value => {
        loggedValue = value;
      };

      pq.enqueue(['task1', 2]);
      pq.enqueue(['urgent', 1]);
      pq.printCollection();

      expect(loggedValue).toEqual([
        ['urgent', 1],
        ['task1', 2],
      ]);

      console.log = originalConsoleLog;
    });
  });

  describe('Enqueue operation - priority-based insertion', () => {
    test('should add single element with priority', () => {
      pq.enqueue(['task1', 2]);

      expect(pq.isEmpty()).toBe(false);
      expect(pq.size()).toBe(1);
      expect(pq.front()).toBe('task1');
    });

    test('should add elements in priority order (lower number = higher priority)', () => {
      pq.enqueue(['normal', 3]);
      pq.enqueue(['urgent', 1]);
      pq.enqueue(['high', 2]);

      expect(pq.size()).toBe(3);
      expect(pq.front()).toBe('urgent'); // Priority 1 should be first
    });

    test('should maintain FIFO order for same priority elements', () => {
      pq.enqueue(['first', 2]);
      pq.enqueue(['second', 2]);
      pq.enqueue(['third', 2]);

      expect(pq.front()).toBe('first'); // First added with priority 2
      expect(pq.dequeue()).toBe('first');
      expect(pq.front()).toBe('second'); // Second added with priority 2
    });

    test('should insert in correct position based on priority', () => {
      pq.enqueue(['low', 5]);
      pq.enqueue(['medium', 3]);
      pq.enqueue(['high', 1]);
      pq.enqueue(['very-high', 0]);

      expect(pq.front()).toBe('very-high'); // Priority 0 (highest)
      expect(pq.dequeue()).toBe('very-high');
      expect(pq.front()).toBe('high'); // Priority 1 (second highest)
    });

    test('should handle mixed priority insertion - FreeCodeCamp example', () => {
      // Example from problem statement
      pq.enqueue(['kitten', 2]);
      pq.enqueue(['dog', 2]);
      pq.enqueue(['rabbit', 2]);
      pq.enqueue(['human', 1]);

      expect(pq.front()).toBe('human'); // Priority 1 should be first
      expect(pq.dequeue()).toBe('human');
      expect(pq.front()).toBe('kitten'); // First added with priority 2
    });
  });

  describe('Dequeue operation - priority-based removal', () => {
    test('should return undefined when dequeue from empty queue', () => {
      expect(pq.dequeue()).toBeUndefined();
    });

    test('should remove and return highest priority element value only', () => {
      pq.enqueue(['task1', 3]);
      pq.enqueue(['urgent', 1]);
      pq.enqueue(['task2', 2]);

      const removed = pq.dequeue();

      expect(removed).toBe('urgent'); // Should return value, not [value, priority]
      expect(pq.size()).toBe(2);
      expect(pq.front()).toBe('task2'); // Priority 2 is now highest
    });

    test('should maintain priority order with multiple dequeue operations', () => {
      const elements = [
        ['low', 3],
        ['high', 1],
        ['medium', 2],
        ['urgent', 0],
      ];

      elements.forEach(element => pq.enqueue(element));

      // Should dequeue in priority order (0, 1, 2, 3)
      expect(pq.dequeue()).toBe('urgent'); // Priority 0
      expect(pq.dequeue()).toBe('high'); // Priority 1
      expect(pq.dequeue()).toBe('medium'); // Priority 2
      expect(pq.dequeue()).toBe('low'); // Priority 3

      expect(pq.isEmpty()).toBe(true);
    });

    test('should handle FIFO order for same priority elements', () => {
      pq.enqueue(['first', 2]);
      pq.enqueue(['second', 2]);
      pq.enqueue(['third', 2]);

      expect(pq.dequeue()).toBe('first');
      expect(pq.dequeue()).toBe('second');
      expect(pq.dequeue()).toBe('third');
    });
  });

  describe('Front operation - viewing highest priority element', () => {
    test('should return undefined when front called on empty queue', () => {
      expect(pq.front()).toBeUndefined();
    });

    test('should return highest priority element value without removing it', () => {
      pq.enqueue(['task1', 3]);
      pq.enqueue(['urgent', 1]);
      pq.enqueue(['task2', 2]);

      expect(pq.front()).toBe('urgent'); // Should return value, not [value, priority]
      expect(pq.front()).toBe('urgent'); // Should be idempotent
      expect(pq.size()).toBe(3); // Size should remain unchanged
    });

    test('should update when highest priority element is dequeued', () => {
      pq.enqueue(['first', 1]);
      pq.enqueue(['second', 2]);
      pq.enqueue(['third', 3]);

      expect(pq.front()).toBe('first');
      pq.dequeue();
      expect(pq.front()).toBe('second');
      pq.dequeue();
      expect(pq.front()).toBe('third');
    });
  });

  describe('Size and isEmpty operations', () => {
    test('should track size accurately during enqueue operations', () => {
      expect(pq.size()).toBe(0);

      pq.enqueue(['task1', 1]);
      expect(pq.size()).toBe(1);

      pq.enqueue(['task2', 2]);
      pq.enqueue(['task3', 3]);
      expect(pq.size()).toBe(3);
    });

    test('should track size accurately during dequeue operations', () => {
      pq.enqueue(['task1', 1]);
      pq.enqueue(['task2', 2]);
      pq.enqueue(['task3', 3]);

      expect(pq.size()).toBe(3);

      pq.dequeue();
      expect(pq.size()).toBe(2);

      pq.dequeue();
      pq.dequeue();
      expect(pq.size()).toBe(0);
    });

    test('should return false for isEmpty when queue has elements', () => {
      pq.enqueue(['task1', 1]);
      expect(pq.isEmpty()).toBe(false);
    });

    test('should return true for isEmpty after removing all elements', () => {
      pq.enqueue(['task1', 1]);
      pq.enqueue(['task2', 2]);

      pq.dequeue();
      expect(pq.isEmpty()).toBe(false);

      pq.dequeue();
      expect(pq.isEmpty()).toBe(true);
    });
  });

  describe('Edge cases and complex scenarios', () => {
    test('should handle single element correctly', () => {
      pq.enqueue(['only', 1]);

      expect(pq.front()).toBe('only');
      expect(pq.size()).toBe(1);
      expect(pq.isEmpty()).toBe(false);

      expect(pq.dequeue()).toBe('only');
      expect(pq.isEmpty()).toBe(true);
    });

    test('should handle mixed enqueue and dequeue operations', () => {
      pq.enqueue(['first', 2]);
      pq.enqueue(['urgent', 1]);

      expect(pq.dequeue()).toBe('urgent'); // Priority 1

      pq.enqueue(['new-urgent', 0]);
      expect(pq.front()).toBe('new-urgent'); // Priority 0 should be first

      expect(pq.dequeue()).toBe('new-urgent');
      expect(pq.dequeue()).toBe('first');
      expect(pq.isEmpty()).toBe(true);
    });

    test('should handle falsy values correctly', () => {
      pq.enqueue([0, 1]);
      pq.enqueue(['', 2]);
      pq.enqueue([false, 3]);
      pq.enqueue([null, 4]);

      expect(pq.size()).toBe(4);
      expect(pq.isEmpty()).toBe(false);

      expect(pq.dequeue()).toBe(0);
      expect(pq.dequeue()).toBe('');
      expect(pq.dequeue()).toBe(false);
      expect(pq.dequeue()).toBe(null);
    });

    test('should handle negative and zero priorities', () => {
      pq.enqueue(['negative', -1]);
      pq.enqueue(['zero', 0]);
      pq.enqueue(['positive', 1]);

      expect(pq.front()).toBe('negative'); // Priority -1 (highest)
      expect(pq.dequeue()).toBe('negative');
      expect(pq.front()).toBe('zero'); // Priority 0 (second highest)
    });

    test('should handle large number of operations efficiently', () => {
      const largeNumber = 100;

      // Add elements with random priorities
      for (let i = 0; i < largeNumber; i++) {
        pq.enqueue([`task${i}`, Math.floor(Math.random() * 10)]);
      }

      expect(pq.size()).toBe(largeNumber);

      // Remove all elements - should maintain priority order
      while (!pq.isEmpty()) {
        const element = pq.dequeue();
        expect(element).toBeDefined();
        expect(typeof element).toBe('string');
      }

      expect(pq.size()).toBe(0);
      expect(pq.isEmpty()).toBe(true);
    });
  });
});
