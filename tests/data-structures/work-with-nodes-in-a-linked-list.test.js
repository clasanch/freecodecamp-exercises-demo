/**
 * Tests for Work with Nodes in a Linked List
 * TDD Implementation - Tests BEFORE implementation
 *
 * FreeCodeCamp Data Structures Challenge
 * Educational implementation of basic linked list node operations
 */

import {
  Node,
  Kitten,
  Puppy,
  Cat,
  Dog,
} from '../../src/data-structures/work-with-nodes-in-a-linked-list.js';

describe('Work with Nodes in a Linked List', () => {
  describe('FreeCodeCamp Compliance Tests', () => {
    it('should pass Test 1: Your Puppy node should have a reference to a Cat node', () => {
      // Verify Puppy.next references Cat node
      expect(Puppy.next).toBeDefined();
      expect(Puppy.next).toBe(Cat);
      expect(Puppy.next.element).toBe('Cat');
    });

    it('should pass Test 2: Your Cat node should have a reference to a Dog node', () => {
      // Verify Cat.next references Dog node
      expect(Cat.next).toBeDefined();
      expect(Cat.next).toBe(Dog);
      expect(Cat.next.element).toBe('Dog');
    });
  });

  describe('Node Constructor Tests', () => {
    it('should create Node constructor function', () => {
      expect(typeof Node).toBe('function');
    });

    it('should create nodes with element and next properties', () => {
      const testNode = new Node('test');
      expect(testNode.element).toBe('test');
      expect(testNode.next).toBeNull();
    });

    it('should create nodes with different element types', () => {
      const stringNode = new Node('string');
      const numberNode = new Node(42);
      const objectNode = new Node({ key: 'value' });
      const arrayNode = new Node([1, 2, 3]);

      expect(stringNode.element).toBe('string');
      expect(numberNode.element).toBe(42);
      expect(objectNode.element).toEqual({ key: 'value' });
      expect(arrayNode.element).toEqual([1, 2, 3]);
    });
  });

  describe('Pre-existing Node Tests', () => {
    it('should have Kitten node created correctly', () => {
      expect(Kitten).toBeDefined();
      expect(Kitten.element).toBe('Kitten');
      expect(Kitten.next).toBe(Puppy);
    });

    it('should have Puppy node created correctly', () => {
      expect(Puppy).toBeDefined();
      expect(Puppy.element).toBe('Puppy');
      // Puppy.next should be set to Cat in implementation
    });
  });

  describe('Required Node Creation Tests', () => {
    it('should create Cat node with correct element', () => {
      expect(Cat).toBeDefined();
      expect(Cat.element).toBe('Cat');
      expect(Cat instanceof Node).toBe(true);
    });

    it('should create Dog node with correct element', () => {
      expect(Dog).toBeDefined();
      expect(Dog.element).toBe('Dog');
      expect(Dog instanceof Node).toBe(true);
    });
  });

  describe('Node Linking Tests', () => {
    it('should link Kitten to Puppy (pre-existing)', () => {
      expect(Kitten.next).toBe(Puppy);
    });

    it('should link Puppy to Cat (required implementation)', () => {
      expect(Puppy.next).toBe(Cat);
    });

    it('should link Cat to Dog (required implementation)', () => {
      expect(Cat.next).toBe(Dog);
    });

    it('should have Dog as terminal node', () => {
      expect(Dog.next).toBeNull();
    });
  });

  describe('Linked List Chain Tests', () => {
    it('should form complete chain: Kitten → Puppy → Cat → Dog', () => {
      // Traverse the chain
      const chain = [];
      let current = Kitten;
      while (current !== null) {
        chain.push(current.element);
        current = current.next;
      }

      expect(chain).toEqual(['Kitten', 'Puppy', 'Cat', 'Dog']);
    });

    it('should allow traversal from any node', () => {
      // From Puppy to end
      const fromPuppy = [];
      let current = Puppy;
      while (current !== null) {
        fromPuppy.push(current.element);
        current = current.next;
      }
      expect(fromPuppy).toEqual(['Puppy', 'Cat', 'Dog']);

      // From Cat to end
      const fromCat = [];
      current = Cat;
      while (current !== null) {
        fromCat.push(current.element);
        current = current.next;
      }
      expect(fromCat).toEqual(['Cat', 'Dog']);
    });

    it('should maintain proper node references', () => {
      expect(Kitten.next.next).toBe(Cat);
      expect(Kitten.next.next.next).toBe(Dog);
      expect(Kitten.next.next.next.next).toBeNull();
    });
  });

  describe('Edge Cases and Validations', () => {
    it('should handle empty element creation', () => {
      const emptyNode = new Node('');
      expect(emptyNode.element).toBe('');
      expect(emptyNode.next).toBeNull();
    });

    it('should handle null element creation', () => {
      const nullNode = new Node(null);
      expect(nullNode.element).toBeNull();
      expect(nullNode.next).toBeNull();
    });

    it('should handle undefined element creation', () => {
      const undefinedNode = new Node(undefined);
      expect(undefinedNode.element).toBeUndefined();
      expect(undefinedNode.next).toBeNull();
    });

    it('should maintain independence between nodes', () => {
      const node1 = new Node('test1');
      const node2 = new Node('test2');

      node1.next = node2;

      expect(node1.next).toBe(node2);
      expect(node2.next).toBeNull();
      expect(node1.element).toBe('test1');
      expect(node2.element).toBe('test2');
    });
  });

  describe('Node Property Tests', () => {
    it('should allow modification of next property', () => {
      const node1 = new Node('node1');
      const node2 = new Node('node2');
      const node3 = new Node('node3');

      node1.next = node2;
      expect(node1.next).toBe(node2);

      node1.next = node3;
      expect(node1.next).toBe(node3);
      expect(node1.next).not.toBe(node2);
    });

    it('should allow modification of element property', () => {
      const node = new Node('original');
      expect(node.element).toBe('original');

      node.element = 'modified';
      expect(node.element).toBe('modified');
    });
  });

  describe('Memory and Performance Tests', () => {
    it('should create lightweight node objects', () => {
      const node = new Node('test');
      const properties = Object.keys(node);

      expect(properties).toEqual(['element', 'next']);
      expect(properties).toHaveLength(2);
    });

    it('should support circular references if needed', () => {
      const node1 = new Node('circular1');
      const node2 = new Node('circular2');

      node1.next = node2;
      node2.next = node1;

      expect(node1.next).toBe(node2);
      expect(node2.next).toBe(node1);
      expect(node1.next.next).toBe(node1);
    });
  });
});
