/**
 * Tests for Stack Data Structure
 * TDD Implementation - Tests BEFORE implementation
 */

import stackOperations from '../../src/data-structures/stack.js';

describe('Stack Data Structure', () => {
  describe('FreeCodeCamp Requirements', () => {
    test('homeworkStack should only contain 4 elements', () => {
      const result = stackOperations();
      expect(result.homeworkStack).toHaveLength(4);
    });

    test('the last element in homeworkStack should be "CS50"', () => {
      const result = stackOperations();
      expect(result.homeworkStack[result.homeworkStack.length - 1]).toBe('CS50');
    });

    test('homeworkStack should not contain "PSY44"', () => {
      const result = stackOperations();
      expect(result.homeworkStack).not.toContain('PSY44');
    });

    test('the initial declaration of the homeworkStack should not be changed', () => {
      const result = stackOperations();
      // Initial array should still have the first 3 elements in same order
      expect(result.homeworkStack[0]).toBe('BIO12');
      expect(result.homeworkStack[1]).toBe('HIS80');
      expect(result.homeworkStack[2]).toBe('MAT122');
    });
  });

  describe('Stack Operations Validation', () => {
    test('should demonstrate LIFO (Last-In-First-Out) behavior', () => {
      const result = stackOperations();
      // After operations: pop "PSY44", push "CS50"
      // Stack should be: ["BIO12", "HIS80", "MAT122", "CS50"]
      expect(result.homeworkStack).toEqual(['BIO12', 'HIS80', 'MAT122', 'CS50']);
    });

    test('should maintain stack integrity after operations', () => {
      const result = stackOperations();
      // Verify the stack maintains proper order and contains expected elements
      expect(result.homeworkStack).toEqual(['BIO12', 'HIS80', 'MAT122', 'CS50']);
      expect(result.homeworkStack).toHaveLength(4);
    });

    test('should return the operations performed', () => {
      const result = stackOperations();
      expect(result.poppedElement).toBe('PSY44');
      expect(result.pushedElement).toBe('CS50');
    });
  });

  describe('Stack Behavior Analysis', () => {
    test('should demonstrate proper stack top manipulation', () => {
      const result = stackOperations();
      // Top of stack (last element) should be what we pushed
      const topElement = result.homeworkStack[result.homeworkStack.length - 1];
      expect(topElement).toBe('CS50');
    });

    test('should preserve base elements of the stack', () => {
      const result = stackOperations();
      // Base elements should remain unchanged
      expect(result.homeworkStack.slice(0, 3)).toEqual(['BIO12', 'HIS80', 'MAT122']);
    });

    test('should demonstrate stack modification without affecting initial structure', () => {
      const result = stackOperations();
      // The implementation should show understanding of stack operations
      expect(Array.isArray(result.homeworkStack)).toBe(true);
      expect(result.homeworkStack).toHaveLength(4);
    });
  });

  describe('Edge Cases and Validation', () => {
    test('should handle stack operations correctly', () => {
      const result = stackOperations();
      // Verify no unexpected elements were added
      const expectedElements = ['BIO12', 'HIS80', 'MAT122', 'CS50'];
      expect(result.homeworkStack).toEqual(expectedElements);
    });

    test('should maintain array type after operations', () => {
      const result = stackOperations();
      expect(Array.isArray(result.homeworkStack)).toBe(true);
    });

    test('should demonstrate understanding of stack principle', () => {
      const result = stackOperations();
      // The last element should be the most recently added
      expect(result.homeworkStack[result.homeworkStack.length - 1]).toBe(result.pushedElement);
    });
  });
});
