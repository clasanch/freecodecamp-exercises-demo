/**
 * Tests for Binary Search Tree - isPresent Method
 * TDD Implementation - Tests BEFORE implementation validation
 * Comprehensive coverage including BST structure validation and edge cases
 */

import BinarySearchTree, { Node, displayTree } from '../../src/data-structures/bst-is-present.js';

describe('Binary Search Tree - isPresent Method', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Data structure existence and method availability', () => {
    test('BinarySearchTree data structure should exist', () => {
      expect(bst).toBeDefined();
      expect(bst.constructor.name).toBe('BinarySearchTree');
    });

    test('binary search tree should have a method called isPresent', () => {
      expect(typeof bst.isPresent).toBe('function');
    });

    test('isPresent method should return boolean values', () => {
      const result = bst.isPresent(1);
      expect(typeof result).toBe('boolean');
    });

    test('Node constructor should be available and create proper nodes', () => {
      const testNode = new Node(42);
      expect(testNode.value).toBe(42);
      expect(testNode.left).toBe(null);
      expect(testNode.right).toBe(null);
    });

    test('displayTree function should be available', () => {
      expect(typeof displayTree).toBe('function');
      // Test that it doesn't throw error with null tree
      expect(() => displayTree(null)).not.toThrow();
    });
  });

  describe('Empty tree cases', () => {
    test('isPresent should handle cases where the tree is empty', () => {
      expect(bst.isPresent(1)).toBe(false);
      expect(bst.isPresent(0)).toBe(false);
      expect(bst.isPresent(-1)).toBe(false);
      expect(bst.isPresent(100)).toBe(false);
    });

    test('isPresent should return false for any value when root is null', () => {
      expect(bst.root).toBe(null);
      expect(bst.isPresent(42)).toBe(false);
    });
  });

  describe('Single node tree cases', () => {
    beforeEach(() => {
      // Add a helper method to manually create nodes for testing
      bst.root = { value: 10, left: null, right: null };
    });

    test('should find root value in single node tree', () => {
      expect(bst.isPresent(10)).toBe(true);
    });

    test('should not find non-existent values in single node tree', () => {
      expect(bst.isPresent(5)).toBe(false);
      expect(bst.isPresent(15)).toBe(false);
      expect(bst.isPresent(0)).toBe(false);
    });
  });

  describe('Multi-level tree structure tests', () => {
    beforeEach(() => {
      // Create a sample BST structure manually for testing
      //       15
      //      /  \\
      //     10   20
      //    / \\   / \\
      //   8  12 17  25
      bst.root = {
        value: 15,
        left: {
          value: 10,
          left: { value: 8, left: null, right: null },
          right: { value: 12, left: null, right: null },
        },
        right: {
          value: 20,
          left: { value: 17, left: null, right: null },
          right: { value: 25, left: null, right: null },
        },
      };
    });

    test('should find root value', () => {
      expect(bst.isPresent(15)).toBe(true);
    });

    test('should find left subtree values', () => {
      expect(bst.isPresent(10)).toBe(true);
      expect(bst.isPresent(8)).toBe(true);
      expect(bst.isPresent(12)).toBe(true);
    });

    test('should find right subtree values', () => {
      expect(bst.isPresent(20)).toBe(true);
      expect(bst.isPresent(17)).toBe(true);
      expect(bst.isPresent(25)).toBe(true);
    });

    test('should not find non-existent values', () => {
      expect(bst.isPresent(5)).toBe(false);
      expect(bst.isPresent(9)).toBe(false);
      expect(bst.isPresent(11)).toBe(false);
      expect(bst.isPresent(13)).toBe(false);
      expect(bst.isPresent(16)).toBe(false);
      expect(bst.isPresent(18)).toBe(false);
      expect(bst.isPresent(21)).toBe(false);
      expect(bst.isPresent(30)).toBe(false);
    });
  });

  describe('BST property validation tests', () => {
    beforeEach(() => {
      // Create a balanced BST
      bst.root = {
        value: 50,
        left: {
          value: 30,
          left: { value: 20, left: null, right: null },
          right: { value: 40, left: null, right: null },
        },
        right: {
          value: 70,
          left: { value: 60, left: null, right: null },
          right: { value: 80, left: null, right: null },
        },
      };
    });

    test('should correctly navigate BST structure for existing values', () => {
      // Test that search follows BST invariant
      expect(bst.isPresent(30)).toBe(true); // Left of root
      expect(bst.isPresent(70)).toBe(true); // Right of root
      expect(bst.isPresent(20)).toBe(true); // Deep left
      expect(bst.isPresent(80)).toBe(true); // Deep right
    });

    test('should efficiently reject values outside BST range', () => {
      expect(bst.isPresent(10)).toBe(false); // Smaller than minimum
      expect(bst.isPresent(90)).toBe(false); // Larger than maximum
    });
  });

  describe('Edge cases and boundary conditions', () => {
    test('should handle negative values', () => {
      bst.root = { value: -5, left: null, right: null };
      expect(bst.isPresent(-5)).toBe(true);
      expect(bst.isPresent(-10)).toBe(false);
    });

    test('should handle zero value', () => {
      bst.root = { value: 0, left: null, right: null };
      expect(bst.isPresent(0)).toBe(true);
      expect(bst.isPresent(1)).toBe(false);
    });

    test('should handle large numbers', () => {
      bst.root = { value: 1000000, left: null, right: null };
      expect(bst.isPresent(1000000)).toBe(true);
      expect(bst.isPresent(999999)).toBe(false);
    });
  });

  describe('Unbalanced tree performance cases', () => {
    beforeEach(() => {
      // Create a worst-case unbalanced tree (linked list structure)
      bst.root = {
        value: 1,
        left: null,
        right: {
          value: 2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: {
              value: 4,
              left: null,
              right: { value: 5, left: null, right: null },
            },
          },
        },
      };
    });

    test('should handle unbalanced tree structure correctly', () => {
      expect(bst.isPresent(1)).toBe(true);
      expect(bst.isPresent(3)).toBe(true);
      expect(bst.isPresent(5)).toBe(true);
      expect(bst.isPresent(6)).toBe(false);
    });

    test('should perform linear search in worst-case unbalanced tree', () => {
      // Even in worst case, algorithm should be correct
      expect(bst.isPresent(4)).toBe(true);
      expect(bst.isPresent(0)).toBe(false);
    });
  });
});
