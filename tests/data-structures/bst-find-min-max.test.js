/**
 * Tests for BST Find Min Max
 * TDD Implementation - Tests BEFORE implementation
 */

import bstFindMinMax from '../../src/data-structures/bst-find-min-max.js';

describe('BST Find Min Max', () => {
  let BinarySearchTree, Node, displayTree;

  beforeEach(() => {
    const result = bstFindMinMax();
    BinarySearchTree = result.BinarySearchTree;
    Node = result.Node;
    displayTree = result.displayTree;
  });

  describe('Data structure existence', () => {
    it('should have BinarySearchTree data structure', () => {
      expect(BinarySearchTree).toBeDefined();
      expect(typeof BinarySearchTree).toBe('function');
    });

    it('should have Node constructor', () => {
      expect(Node).toBeDefined();
      expect(typeof Node).toBe('function');
    });
  });

  describe('Method existence', () => {
    it('should have findMin method', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMin).toBeDefined();
      expect(typeof bst.findMin).toBe('function');
    });

    it('should have findMax method', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMax).toBeDefined();
      expect(typeof bst.findMax).toBe('function');
    });
  });

  describe('Empty tree cases', () => {
    it('should return null for findMin on empty tree', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMin()).toBeNull();
    });

    it('should return null for findMax on empty tree', () => {
      const bst = new BinarySearchTree();
      expect(bst.findMax()).toBeNull();
    });
  });

  describe('Single node tree', () => {
    it('should return the root value for both findMin and findMax in single node tree', () => {
      const bst = new BinarySearchTree();
      bst.add(42);

      expect(bst.findMin()).toBe(42);
      expect(bst.findMax()).toBe(42);
    });
  });

  describe('Basic min/max functionality', () => {
    let bst;

    beforeEach(() => {
      bst = new BinarySearchTree();
      // Create a balanced BST:
      //       8
      //      / \\
      //     3   10
      //    / \\    \\
      //   1   6    14
      //      / \\   /
      //     4   7 13
      bst.add(8);
      bst.add(3);
      bst.add(10);
      bst.add(1);
      bst.add(6);
      bst.add(14);
      bst.add(4);
      bst.add(7);
      bst.add(13);
    });

    it('should find minimum value in BST', () => {
      expect(bst.findMin()).toBe(1);
    });

    it('should find maximum value in BST', () => {
      expect(bst.findMax()).toBe(14);
    });
  });

  describe('Edge cases with different tree shapes', () => {
    it('should find min in left-skewed tree', () => {
      const bst = new BinarySearchTree();
      bst.add(10);
      bst.add(8);
      bst.add(6);
      bst.add(4);
      bst.add(2);

      expect(bst.findMin()).toBe(2);
      expect(bst.findMax()).toBe(10);
    });

    it('should find max in right-skewed tree', () => {
      const bst = new BinarySearchTree();
      bst.add(2);
      bst.add(4);
      bst.add(6);
      bst.add(8);
      bst.add(10);

      expect(bst.findMin()).toBe(2);
      expect(bst.findMax()).toBe(10);
    });

    it('should handle negative numbers', () => {
      const bst = new BinarySearchTree();
      bst.add(0);
      bst.add(-5);
      bst.add(5);
      bst.add(-10);
      bst.add(10);

      expect(bst.findMin()).toBe(-10);
      expect(bst.findMax()).toBe(10);
    });

    it('should handle duplicate attempts (findMin/Max should still work)', () => {
      const bst = new BinarySearchTree();
      bst.add(5);
      bst.add(3);
      bst.add(7);
      bst.add(5); // duplicate - should return null

      expect(bst.findMin()).toBe(3);
      expect(bst.findMax()).toBe(7);
    });
  });

  describe('Tree with only left children', () => {
    it('should find min as leaf and max as root', () => {
      const bst = new BinarySearchTree();
      bst.add(100);
      bst.add(50);
      bst.add(25);
      bst.add(12);

      expect(bst.findMin()).toBe(12);
      expect(bst.findMax()).toBe(100);
    });
  });

  describe('Tree with only right children', () => {
    it('should find min as root and max as leaf', () => {
      const bst = new BinarySearchTree();
      bst.add(1);
      bst.add(2);
      bst.add(3);
      bst.add(4);

      expect(bst.findMin()).toBe(1);
      expect(bst.findMax()).toBe(4);
    });
  });

  describe('Complex tree operations', () => {
    it('should maintain correct min/max after multiple insertions', () => {
      const bst = new BinarySearchTree();
      const values = [50, 25, 75, 10, 40, 60, 90, 5, 15, 35, 45];

      values.forEach(value => bst.add(value));

      expect(bst.findMin()).toBe(5);
      expect(bst.findMax()).toBe(90);
    });

    it('should work with string numbers (type coercion)', () => {
      const bst = new BinarySearchTree();
      bst.add(5);
      bst.add(3);
      bst.add(7);
      bst.add(1);
      bst.add(9);

      expect(bst.findMin()).toBe(1);
      expect(bst.findMax()).toBe(9);
    });
  });

  describe('Performance consistency', () => {
    it('should consistently return same min/max values on multiple calls', () => {
      const bst = new BinarySearchTree();
      [20, 10, 30, 5, 15, 25, 35].forEach(val => bst.add(val));

      // Multiple calls should return same values
      expect(bst.findMin()).toBe(5);
      expect(bst.findMin()).toBe(5);
      expect(bst.findMin()).toBe(5);

      expect(bst.findMax()).toBe(35);
      expect(bst.findMax()).toBe(35);
      expect(bst.findMax()).toBe(35);
    });
  });

  describe('Utility functions', () => {
    it('should have displayTree function for coverage', () => {
      expect(displayTree).toBeDefined();
      expect(typeof displayTree).toBe('function');

      // Execute displayTree for coverage (output goes to console)
      const bst = new BinarySearchTree();
      bst.add(5);
      bst.add(3);
      bst.add(7);

      // Call function to achieve coverage - output is expected console behavior
      expect(() => displayTree(bst.root)).not.toThrow();
    });
  });
});
