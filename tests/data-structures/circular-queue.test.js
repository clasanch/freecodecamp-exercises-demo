/**
 * Tests for Circular Queue Class
 * TDD Implementation - Tests BEFORE implementation
 *
 * Fixed-size circular buffer with wraparound pointer logic
 * O(1) enqueue/dequeue operations with boundary checking
 */

import CircularQueue from '../../src/data-structures/circular-queue.js';

describe('Circular Queue Class - Fixed-size Circular Buffer', () => {
  describe('Constructor and initialization', () => {
    test('should create CircularQueue with specified size', () => {
      const queue = new CircularQueue(5);
      expect(queue).toBeInstanceOf(CircularQueue);
      expect(queue.queue).toEqual([null, null, null, null, null]);
      expect(queue.read).toBe(0);
      expect(queue.write).toBe(0);
      expect(queue.max).toBe(4); // size - 1
    });

    test('should initialize queue with correct max value', () => {
      const queue3 = new CircularQueue(3);
      const queue10 = new CircularQueue(10);
      expect(queue3.max).toBe(2);
      expect(queue10.max).toBe(9);
    });
  });

  describe('Enqueue operation - circular buffer insertion', () => {
    test('should successfully add items to empty queue', () => {
      const queue = new CircularQueue(5);
      const result = queue.enqueue('A');
      expect(result).toBe('A');
      expect(queue.write).toBe(1);
    });

    test('should add multiple items advancing write pointer', () => {
      const queue = new CircularQueue(5);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      expect(queue.write).toBe(3);
    });

    test('should wrap write pointer to beginning when reaching end', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      // Queue full, write should wrap but not overwrite
      const result = queue.enqueue('D');
      expect(result).toBeNull(); // Cannot enqueue past read pointer
    });

    test('should NOT move past read pointer when queue is full', () => {
      const queue = new CircularQueue(4);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      queue.enqueue('D');
      // Queue is full, cannot add more
      const result = queue.enqueue('E');
      expect(result).toBeNull();
    });

    test('should handle wraparound correctly after dequeue operations', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.dequeue(); // Read advances, creating space
      const result = queue.enqueue('C');
      expect(result).toBe('C');
    });
  });

  describe('Dequeue operation - circular buffer removal', () => {
    test('should return null when dequeuing from empty queue', () => {
      const queue = new CircularQueue(5);
      const result = queue.dequeue();
      expect(result).toBeNull();
    });

    test('should successfully remove and return items from queue', () => {
      const queue = new CircularQueue(5);
      queue.enqueue('A');
      queue.enqueue('B');
      const result = queue.dequeue();
      expect(result).toBe('A');
      expect(queue.read).toBe(1);
    });

    test('should reset dequeued position to null', () => {
      const queue = new CircularQueue(5);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.dequeue();
      // Position 0 should be reset to null
      expect(queue.queue[0]).toBeNull();
    });

    test('should NOT advance past write pointer', () => {
      const queue = new CircularQueue(5);
      queue.enqueue('A');
      queue.dequeue(); // Remove the only item
      const result = queue.dequeue(); // Try to dequeue again
      expect(result).toBeNull();
    });

    test('should handle multiple dequeue operations correctly', () => {
      const queue = new CircularQueue(5);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');

      expect(queue.dequeue()).toBe('A');
      expect(queue.dequeue()).toBe('B');
      expect(queue.dequeue()).toBe('C');
      expect(queue.dequeue()).toBeNull(); // Empty queue
    });
  });

  describe('Basic circular behavior', () => {
    test('should handle basic wraparound correctly', () => {
      const queue = new CircularQueue(3);

      // Basic enqueue/dequeue cycle
      queue.enqueue('A');
      queue.enqueue('B');
      expect(queue.dequeue()).toBe('A');
      expect(queue.dequeue()).toBe('B');
      expect(queue.dequeue()).toBe(null); // Empty
    });
  });

  describe('Edge cases and boundary conditions', () => {
    test('should handle single element queue correctly', () => {
      const queue = new CircularQueue(1);
      expect(queue.enqueue('A')).toBe('A');
      expect(queue.enqueue('B')).toBe(null); // Queue full
      expect(queue.dequeue()).toBe('A');
      expect(queue.dequeue()).toBe(null); // Queue empty
    });

    test('should handle different data types', () => {
      const queue = new CircularQueue(3);
      expect(queue.enqueue(1)).toBe(1);
      expect(queue.enqueue('string')).toBe('string');

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe('string');
      expect(queue.dequeue()).toBe(null); // Queue empty
    });
  });

  describe('FreeCodeCamp required test cases', () => {
    test('1. The enqueue method should add items to the circular queue', () => {
      const queue = new CircularQueue(5);
      expect(queue.enqueue('A')).toBe('A');
      expect(queue.enqueue('B')).toBe('B');
      expect(queue.queue[0]).toBe('A');
      expect(queue.queue[1]).toBe('B');
    });

    test('2. You should not enqueue items past the read pointer', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      queue.enqueue('C');
      // Queue is full, cannot add more
      expect(queue.enqueue('D')).toBe(null);
    });

    test('3. The dequeue method should dequeue items from the queue', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.enqueue('B');
      expect(queue.dequeue()).toBe('A');
      expect(queue.dequeue()).toBe('B');
    });

    test('4. After an item is dequeued, its position in the queue should be reset to null', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.dequeue();
      expect(queue.queue[0]).toBe(null);
    });

    test('5. Trying to dequeue past the write pointer should return null and does not advance the write pointer', () => {
      const queue = new CircularQueue(3);
      queue.enqueue('A');
      queue.dequeue(); // Remove the only item
      const originalWrite = queue.write;
      expect(queue.dequeue()).toBe(null);
      expect(queue.write).toBe(originalWrite); // Write pointer unchanged
    });
  });

  describe('Performance and stress testing', () => {
    test('should handle large number of operations efficiently', () => {
      const queue = new CircularQueue(100);
      const start = Date.now();

      // Perform many operations
      for (let i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
          queue.enqueue(`item-${i}`);
        } else {
          queue.dequeue();
        }
      }

      const duration = Date.now() - start;
      expect(duration).toBeLessThan(100); // Should be very fast O(1) operations
    });

    test('should maintain O(1) complexity for all operations', () => {
      const queue = new CircularQueue(50);

      // Fill half the queue
      for (let i = 0; i < 25; i++) {
        queue.enqueue(`item-${i}`);
      }

      // Measure enqueue time
      const enqueueStart = Date.now();
      queue.enqueue('test');
      const enqueueTime = Date.now() - enqueueStart;

      // Measure dequeue time
      const dequeueStart = Date.now();
      queue.dequeue();
      const dequeueTime = Date.now() - dequeueStart;

      // Both should be very fast (O(1))
      expect(enqueueTime).toBeLessThan(10);
      expect(dequeueTime).toBeLessThan(10);
    });
  });
});
