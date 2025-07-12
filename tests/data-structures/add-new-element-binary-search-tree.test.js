/**
 * Tests for Add a New Element to a Binary Search Tree
 * TDD Implementation - Tests BEFORE implementation
 */

import addNewElementBinarySearchTree from '../../src/data-structures/add-new-element-binary-search-tree.js';

// Extract the BinarySearchTree constructor from the module
const { BinarySearchTree, Node, displayTree } = addNewElementBinarySearchTree();

describe('Add a New Element to a Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Basic structure and method existence', () => {
    test('BinarySearchTree data structure should exist', () => {
      expect(BinarySearchTree).toBeDefined();
      expect(typeof BinarySearchTree).toBe('function');
    });

    test('Node constructor should exist', () => {
      expect(Node).toBeDefined();
      expect(typeof Node).toBe('function');
    });

    test('binary search tree should have a method called add', () => {
      expect(bst.add).toBeDefined();
      expect(typeof bst.add).toBe('function');
    });

    test('binary search tree should have a root property', () => {
      expect(bst).toHaveProperty('root');
      expect(bst.root).toBeNull();
    });
  });

  describe('Node creation and structure', () => {
    test('Node constructor should create node with value and null children', () => {
      const node = new Node(5);
      expect(node.value).toBe(5);
      expect(node.left).toBeNull();
      expect(node.right).toBeNull();
    });

    test('Node should accept different data types for value', () => {
      const nodeInt = new Node(42);
      const nodeString = new Node('test');
      const nodeFloat = new Node(3.14);

      expect(nodeInt.value).toBe(42);
      expect(nodeString.value).toBe('test');
      expect(nodeFloat.value).toBe(3.14);
    });
  });

  describe('Empty tree operations', () => {
    test('should handle adding first element to empty tree', () => {
      const result = bst.add(5);
      expect(result).toBeUndefined();
      expect(bst.root).not.toBeNull();
      expect(bst.root.value).toBe(5);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    test('should return undefined for successful addition to empty tree', () => {
      const result = bst.add(10);
      expect(result).toBeUndefined();
    });
  });

  describe('Binary search tree ordering rules', () => {
    test('should add elements according to BST rules - left child smaller', () => {
      bst.add(8);
      bst.add(3);

      expect(bst.root.value).toBe(8);
      expect(bst.root.left.value).toBe(3);
      expect(bst.root.right).toBeNull();
    });

    test('should add elements according to BST rules - right child larger', () => {
      bst.add(8);
      bst.add(10);

      expect(bst.root.value).toBe(8);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right.value).toBe(10);
    });

    test('should add multiple elements maintaining BST invariant', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(14);
      bst.add(4);
      bst.add(7);
      bst.add(13);

      // Verify root
      expect(bst.root.value).toBe(8);

      // Verify left subtree
      expect(bst.root.left.value).toBe(3);
      expect(bst.root.left.left.value).toBe(1);
      expect(bst.root.left.right.value).toBe(6);
      expect(bst.root.left.right.left.value).toBe(4);
      expect(bst.root.left.right.right.value).toBe(7);

      // Verify right subtree
      expect(bst.root.right.value).toBe(10);
      expect(bst.root.right.right.value).toBe(14);
      expect(bst.root.right.right.left.value).toBe(13);
    });

    test('should handle equal values according to BST rules (left ≤ parent)', () => {
      bst.add(5);
      bst.add(5); // Equal value should return null (duplicates not allowed)

      expect(bst.root.value).toBe(5);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });
  });

  describe('Duplicate value handling', () => {
    test('adding an element that already exists should return null', () => {
      bst.add(5);
      const result = bst.add(5);
      expect(result).toBeNull();
    });

    test('should not modify tree structure when adding duplicate', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);

      const originalStructure = JSON.stringify(bst.root);
      const result = bst.add(8);

      expect(result).toBeNull();
      expect(JSON.stringify(bst.root)).toBe(originalStructure);
    });

    test('should handle duplicates in complex tree', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);

      const result1 = bst.add(3);
      const result2 = bst.add(10);
      const result3 = bst.add(1);

      expect(result1).toBeNull();
      expect(result2).toBeNull();
      expect(result3).toBeNull();
    });
  });

  describe('Return values', () => {
    test('should return undefined for successful additions', () => {
      const result1 = bst.add(5);
      const result2 = bst.add(3);
      const result3 = bst.add(7);

      expect(result1).toBeUndefined();
      expect(result2).toBeUndefined();
      expect(result3).toBeUndefined();
    });

    test('should return null only for duplicate additions', () => {
      bst.add(5);
      bst.add(3);
      bst.add(7);

      const duplicate1 = bst.add(5);
      const duplicate2 = bst.add(3);
      const duplicate3 = bst.add(7);

      expect(duplicate1).toBeNull();
      expect(duplicate2).toBeNull();
      expect(duplicate3).toBeNull();
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle single node tree', () => {
      bst.add(42);
      expect(bst.root.value).toBe(42);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    test('should handle negative numbers', () => {
      bst.add(0);
      bst.add(-5);
      bst.add(5);

      expect(bst.root.value).toBe(0);
      expect(bst.root.left.value).toBe(-5);
      expect(bst.root.right.value).toBe(5);
    });

    test('should handle large numbers', () => {
      bst.add(1000000);
      bst.add(999999);
      bst.add(1000001);

      expect(bst.root.value).toBe(1000000);
      expect(bst.root.left.value).toBe(999999);
      expect(bst.root.right.value).toBe(1000001);
    });

    test('should handle zero as a valid value', () => {
      bst.add(0);
      bst.add(-1);
      bst.add(1);

      expect(bst.root.value).toBe(0);
      expect(bst.root.left.value).toBe(-1);
      expect(bst.root.right.value).toBe(1);
    });
  });

  describe('Recursive insertion behavior', () => {
    test('should correctly insert in deep left subtree', () => {
      bst.add(10);
      bst.add(5);
      bst.add(3);
      bst.add(1);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left.value).toBe(5);
      expect(bst.root.left.left.value).toBe(3);
      expect(bst.root.left.left.left.value).toBe(1);
    });

    test('should correctly insert in deep right subtree', () => {
      bst.add(1);
      bst.add(3);
      bst.add(5);
      bst.add(10);

      expect(bst.root.value).toBe(1);
      expect(bst.root.right.value).toBe(3);
      expect(bst.root.right.right.value).toBe(5);
      expect(bst.root.right.right.right.value).toBe(10);
    });

    test('should handle complex balanced insertion', () => {
      const values = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

      values.forEach(value => {
        const result = bst.add(value);
        expect(result).toBeUndefined();
      });

      // Verify balanced structure
      expect(bst.root.value).toBe(8);
      expect(bst.root.left.value).toBe(4);
      expect(bst.root.right.value).toBe(12);
      expect(bst.root.left.left.value).toBe(2);
      expect(bst.root.left.right.value).toBe(6);
      expect(bst.root.right.left.value).toBe(10);
      expect(bst.root.right.right.value).toBe(14);
    });
  });

  describe('Tree integrity after operations', () => {
    test('should maintain parent-child relationships after multiple insertions', () => {
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(14);

      // Verify no circular references or broken links
      expect(bst.root.left.left.left).toBeNull();
      expect(bst.root.left.left.right).toBeNull();
      expect(bst.root.left.right.left).toBeNull();
      expect(bst.root.left.right.right).toBeNull();
      expect(bst.root.right.left).toBeNull();
      expect(bst.root.right.right.left).toBeNull();
      expect(bst.root.right.right.right).toBeNull();
    });

    test('should not create cycles in tree structure', () => {
      bst.add(5);
      bst.add(3);
      bst.add(7);

      // Verify no node points back to parent or creates cycle
      expect(bst.root.left).not.toBe(bst.root);
      expect(bst.root.right).not.toBe(bst.root);
      expect(bst.root.left).not.toBe(bst.root.right);
    });
  });

  describe('Coverage completion - displayTree function', () => {
    test('should have access to displayTree function for debugging', () => {
      // Test displayTree function coverage
      expect(displayTree).toBeDefined();
      expect(typeof displayTree).toBe('function');

      // Create a simple tree to test displayTree
      bst.add(5);
      bst.add(3);
      bst.add(7);

      // Mock console.log to capture displayTree output
      const originalConsoleLog = console.log;
      const mockConsoleLog = [];
      console.log = (...args) => mockConsoleLog.push(args);

      // Call displayTree to achieve coverage
      displayTree(bst.root);

      // Verify console.log was called with correct parameters
      expect(mockConsoleLog).toHaveLength(1);
      expect(mockConsoleLog[0][0]).toBe(JSON.stringify(bst.root, null, 2));

      // Restore console.log
      console.log = originalConsoleLog;
    });
  });
});
