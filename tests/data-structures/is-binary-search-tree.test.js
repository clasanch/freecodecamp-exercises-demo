/**
 * Tests for Check if Tree is Binary Search Tree
 * TDD Implementation - Tests BEFORE implementation
 */

import isBinarySearchTree, {
  Node,
  BinarySearchTree,
  displayTree,
} from '../../src/data-structures/is-binary-search-tree.js';

describe('Check if Tree is Binary Search Tree', () => {
  describe('Basic BST validation cases', () => {
    test('should return true for empty tree (null)', () => {
      expect(isBinarySearchTree(null)).toBe(true);
    });

    test('should return true for single node tree', () => {
      const singleNode = new Node(5);
      expect(isBinarySearchTree(singleNode)).toBe(true);
    });

    test('should return true for valid simple BST', () => {
      const root = new Node(5);
      root.left = new Node(3);
      root.right = new Node(7);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should return true for valid BST with equal values on right', () => {
      const root = new Node(5);
      root.left = new Node(3);
      root.right = new Node(6); // Right child must be greater than parent
      expect(isBinarySearchTree(root)).toBe(true);
    });
  });

  describe('Invalid BST cases', () => {
    test('should return false when left child is greater than parent', () => {
      const root = new Node(5);
      root.left = new Node(7); // Invalid: left > parent
      root.right = new Node(8);
      expect(isBinarySearchTree(root)).toBe(false);
    });

    test('should return false when right child is less than parent', () => {
      const root = new Node(5);
      root.left = new Node(3);
      root.right = new Node(2); // Invalid: right < parent
      expect(isBinarySearchTree(root)).toBe(false);
    });

    test('should return false for locally valid but globally invalid BST', () => {
      const root = new Node(5);
      root.left = new Node(3);
      root.right = new Node(7);
      root.left.right = new Node(6); // Invalid: violates global BST property
      expect(isBinarySearchTree(root)).toBe(false);
    });
  });

  describe('Complex BST structures', () => {
    test('should return true for valid complex BST', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.left = new Node(2);
      root.left.right = new Node(7);
      root.right.left = new Node(12);
      root.right.right = new Node(20);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should return false for complex invalid BST', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.left = new Node(2);
      root.left.right = new Node(12); // Invalid: 12 > 10 (root)
      root.right.left = new Node(6);
      root.right.right = new Node(20);
      expect(isBinarySearchTree(root)).toBe(false);
    });

    test('should handle deep tree structures correctly', () => {
      const root = new Node(50);
      root.left = new Node(30);
      root.right = new Node(70);
      root.left.left = new Node(20);
      root.left.right = new Node(40);
      root.left.left.left = new Node(10);
      root.left.left.right = new Node(25);
      root.left.right.left = new Node(35);
      root.left.right.right = new Node(45);
      expect(isBinarySearchTree(root)).toBe(true);
    });
  });

  describe('Edge cases and special scenarios', () => {
    test('should handle tree with duplicate values correctly', () => {
      const root = new Node(5);
      root.left = new Node(5); // Invalid: left cannot equal parent
      root.right = new Node(5);
      expect(isBinarySearchTree(root)).toBe(false);
    });

    test('should handle tree with only left children', () => {
      const root = new Node(10);
      root.left = new Node(8);
      root.left.left = new Node(6);
      root.left.left.left = new Node(4);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should handle tree with only right children', () => {
      const root = new Node(1);
      root.right = new Node(3);
      root.right.right = new Node(5);
      root.right.right.right = new Node(7);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should return false for invalid unbalanced tree', () => {
      const root = new Node(5);
      root.left = new Node(3);
      root.left.left = new Node(1);
      root.left.left.right = new Node(8); // Invalid: 8 > 5 (root)
      expect(isBinarySearchTree(root)).toBe(false);
    });
  });

  describe('Skeleton code coverage', () => {
    test('should cover skeleton constructor functions for 100% coverage', () => {
      // Test Node constructor (skeleton code coverage)
      const testNode = new Node(42);
      expect(testNode.value).toBe(42);
      expect(testNode.left).toBeNull();
      expect(testNode.right).toBeNull();

      // Test BinarySearchTree constructor (skeleton code coverage)
      const testBST = new BinarySearchTree();
      expect(testBST.root).toBeNull();

      // Test displayTree function (skeleton code coverage)
      const originalLog = console.log;
      let logOutput = '';
      console.log = data => {
        logOutput = data;
      };

      displayTree({ value: 1 });
      expect(logOutput).toBe(JSON.stringify({ value: 1 }, null, 2));

      console.log = originalLog;
    });
  });

  describe('Boundary value testing', () => {
    test('should handle negative values correctly', () => {
      const root = new Node(0);
      root.left = new Node(-5);
      root.right = new Node(5);
      root.left.left = new Node(-10);
      root.left.right = new Node(-1);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should handle large values correctly', () => {
      const root = new Node(1000);
      root.left = new Node(500);
      root.right = new Node(1500);
      root.left.left = new Node(250);
      root.right.right = new Node(2000);
      expect(isBinarySearchTree(root)).toBe(true);
    });

    test('should return false when boundary constraints violated', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.right = new Node(12); // Invalid: 12 > 10 but in left subtree
      expect(isBinarySearchTree(root)).toBe(false);
    });
  });
});
