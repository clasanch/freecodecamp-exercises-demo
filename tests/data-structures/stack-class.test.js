/**
 * Tests for Stack Class
 * TDD Implementation - Tests BEFORE implementation
 */

import Stack from '../../src/data-structures/stack-class.js';

describe('Stack Class', () => {
  describe('FreeCodeCamp Requirements - Method Existence', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    test('Your Stack class should have a push method', () => {
      expect(typeof stack.push).toBe('function');
    });

    test('Your Stack class should have a pop method', () => {
      expect(typeof stack.pop).toBe('function');
    });

    test('Your Stack class should have a peek method', () => {
      expect(typeof stack.peek).toBe('function');
    });

    test('Your Stack class should have a isEmpty method', () => {
      expect(typeof stack.isEmpty).toBe('function');
    });

    test('Your Stack class should have a clear method', () => {
      expect(typeof stack.clear).toBe('function');
    });

    test('Your Stack class should have a print method (provided)', () => {
      expect(typeof stack.print).toBe('function');
    });
  });

  describe('FreeCodeCamp Requirements - Method Behavior', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    test('The peek method should return the top element of the stack', () => {
      stack.push('first');
      stack.push('second');
      stack.push('third');

      expect(stack.peek()).toBe('third');
      // Peek should not modify the stack
      expect(stack.peek()).toBe('third');
    });

    test('The pop method should remove and return the top element of the stack', () => {
      stack.push('first');
      stack.push('second');
      stack.push('third');

      expect(stack.pop()).toBe('third');
      expect(stack.peek()).toBe('second');
      expect(stack.pop()).toBe('second');
      expect(stack.peek()).toBe('first');
    });

    test('The isEmpty method should return true if a stack does not contain any elements', () => {
      expect(stack.isEmpty()).toBe(true);

      stack.push('element');
      expect(stack.isEmpty()).toBe(false);

      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });

    test('The clear method should remove all element from the stack', () => {
      stack.push('first');
      stack.push('second');
      stack.push('third');

      expect(stack.isEmpty()).toBe(false);
      stack.clear();
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('Stack Operations Integration', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    test('should demonstrate LIFO (Last-In-First-Out) behavior', () => {
      stack.push('first');
      stack.push('second');
      stack.push('third');

      expect(stack.pop()).toBe('third');
      expect(stack.pop()).toBe('second');
      expect(stack.pop()).toBe('first');
    });

    test('should handle push and peek operations correctly', () => {
      expect(stack.peek()).toBeUndefined();

      stack.push('element1');
      expect(stack.peek()).toBe('element1');

      stack.push('element2');
      expect(stack.peek()).toBe('element2');
    });

    test('should handle pop operations on empty stack', () => {
      expect(stack.pop()).toBeUndefined();
      expect(stack.isEmpty()).toBe(true);
    });

    test('should handle peek operations on empty stack', () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe('Stack State Management', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    test('should maintain correct state after multiple operations', () => {
      // Add elements
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.isEmpty()).toBe(false);
      expect(stack.peek()).toBe('c');

      // Remove one element
      expect(stack.pop()).toBe('c');
      expect(stack.peek()).toBe('b');
      expect(stack.isEmpty()).toBe(false);

      // Clear all
      stack.clear();
      expect(stack.isEmpty()).toBe(true);
      expect(stack.peek()).toBeUndefined();
    });

    test('should handle mixed data types', () => {
      stack.push(1);
      stack.push('string');
      stack.push({ key: 'value' });
      stack.push([1, 2, 3]);

      expect(stack.pop()).toEqual([1, 2, 3]);
      expect(stack.pop()).toEqual({ key: 'value' });
      expect(stack.pop()).toBe('string');
      expect(stack.pop()).toBe(1);
    });

    test('should handle clearing an already empty stack', () => {
      expect(stack.isEmpty()).toBe(true);
      stack.clear();
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe('Stack Construction and Inheritance', () => {
    test('should create new Stack instances independently', () => {
      const stack1 = new Stack();
      const stack2 = new Stack();

      stack1.push('stack1-element');
      stack2.push('stack2-element');

      expect(stack1.peek()).toBe('stack1-element');
      expect(stack2.peek()).toBe('stack2-element');

      expect(stack1.isEmpty()).toBe(false);
      expect(stack2.isEmpty()).toBe(false);

      stack1.clear();
      expect(stack1.isEmpty()).toBe(true);
      expect(stack2.isEmpty()).toBe(false);
    });

    test('should be constructable with new keyword', () => {
      const stack = new Stack();
      expect(stack).toBeInstanceOf(Stack);
    });
  });

  describe('Print Method (Helper)', () => {
    test('should have print method that calls console.log', () => {
      const stack = new Stack();
      const originalConsoleLog = console.log;
      let loggedValue;

      console.log = value => {
        loggedValue = value;
      };

      stack.push('test1');
      stack.push('test2');
      stack.print();

      expect(loggedValue).toEqual(['test1', 'test2']);

      console.log = originalConsoleLog;
    });
  });
});
