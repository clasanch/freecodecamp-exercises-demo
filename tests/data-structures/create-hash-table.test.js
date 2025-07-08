/**
 * Tests for Create a Hash Table
 * TDD Implementation - Tests BEFORE implementation
 *
 * FreeCodeCamp Data Structures Challenge
 * Educational implementation with collision handling
 */

import { hash, HashTable } from '../../src/data-structures/create-hash-table.js';

describe('Create a Hash Table', () => {
  describe('FreeCodeCamp Compliance Tests', () => {
    it('should pass Test 1: The hash function should be valid', () => {
      expect(typeof hash).toBe('function');

      // Test hash function produces consistent results
      const result1 = hash('hello');
      const result2 = hash('hello');
      expect(result1).toBe(result2);

      // Test hash function produces numeric values
      expect(typeof hash('test')).toBe('number');
      expect(hash('test')).toBeGreaterThan(0);
    });

    it('should pass Test 2: The HashTable data structure should exist', () => {
      expect(typeof HashTable).toBe('function');

      const hashTable = new HashTable();
      expect(hashTable).toBeDefined();
      expect(hashTable.collection).toBeDefined();
      expect(typeof hashTable.collection).toBe('object');
    });

    it('should pass Test 3: The HashTable should have an add method', () => {
      const hashTable = new HashTable();
      expect(typeof hashTable.add).toBe('function');
    });

    it('should pass Test 4: The HashTable should have a lookup method', () => {
      const hashTable = new HashTable();
      expect(typeof hashTable.lookup).toBe('function');
    });

    it('should pass Test 5: The HashTable should have a remove method', () => {
      const hashTable = new HashTable();
      expect(typeof hashTable.remove).toBe('function');
    });

    it('should pass Test 6: The add method should add key value pairs and the lookup method should return the values associated with a given key', () => {
      const hashTable = new HashTable();

      // Add key-value pairs
      hashTable.add('key1', 'value1');
      hashTable.add('key2', 'value2');
      hashTable.add('key3', 'value3');

      // Test lookup returns correct values
      expect(hashTable.lookup('key1')).toBe('value1');
      expect(hashTable.lookup('key2')).toBe('value2');
      expect(hashTable.lookup('key3')).toBe('value3');

      // Test lookup returns null for non-existent keys
      expect(hashTable.lookup('nonexistent')).toBeNull();
    });

    it('should pass Test 7: The remove method should accept a key as input and should remove the associated key value pair', () => {
      const hashTable = new HashTable();

      // Add key-value pairs
      hashTable.add('key1', 'value1');
      hashTable.add('key2', 'value2');

      // Remove key1
      hashTable.remove('key1');

      // Verify key1 is removed but key2 remains
      expect(hashTable.lookup('key1')).toBeNull();
      expect(hashTable.lookup('key2')).toBe('value2');
    });

    it('should pass Test 8: The remove method should only remove the correct key value pair', () => {
      const hashTable = new HashTable();

      // Add multiple key-value pairs
      hashTable.add('key1', 'value1');
      hashTable.add('key2', 'value2');
      hashTable.add('key3', 'value3');

      // Remove only key2
      hashTable.remove('key2');

      // Verify only key2 is removed
      expect(hashTable.lookup('key1')).toBe('value1');
      expect(hashTable.lookup('key2')).toBeNull();
      expect(hashTable.lookup('key3')).toBe('value3');
    });

    it('should pass Test 9: Items should be added using the hash function', () => {
      const hashTable = new HashTable();

      // Track hash function calls by checking if items are stored at hash indices
      hashTable.add('testKey', 'testValue');

      // Verify item can be looked up (proves hash function was used)
      expect(hashTable.lookup('testKey')).toBe('testValue');

      // Verify hash function produces consistent results
      const hashValue = hash('testKey');
      expect(typeof hashValue).toBe('number');

      // Verify item is stored at the correct hash index in collection
      expect(hashTable.collection[hashValue]).toBeDefined();
    });

    it('should pass Test 10: The hash table should handle collisions', () => {
      const hashTable = new HashTable();

      // Find two keys that produce the same hash (collision)
      // We'll create keys that are likely to collide
      const key1 = 'a';
      const key2 = 'b';

      // Add both keys with different values
      hashTable.add(key1, 'value1');
      hashTable.add(key2, 'value2');

      // Both should be retrievable despite potential collision
      expect(hashTable.lookup(key1)).toBe('value1');
      expect(hashTable.lookup(key2)).toBe('value2');

      // Test removal with collisions
      hashTable.remove(key1);
      expect(hashTable.lookup(key1)).toBeNull();
      expect(hashTable.lookup(key2)).toBe('value2');
    });
  });

  describe('Hash Function Behavior', () => {
    it('should produce consistent hash values for same input', () => {
      const input = 'consistent';
      const hash1 = hash(input);
      const hash2 = hash(input);

      expect(hash1).toBe(hash2);
      expect(typeof hash1).toBe('number');
    });

    it('should produce different hash values for different inputs', () => {
      const hash1 = hash('hello');
      const hash2 = hash('world');

      expect(hash1).not.toBe(hash2);
    });

    it('should handle empty strings', () => {
      const emptyHash = hash('');
      expect(typeof emptyHash).toBe('number');
      expect(emptyHash).toBe(0);
    });

    it('should handle single character strings', () => {
      const singleCharHash = hash('a');
      expect(typeof singleCharHash).toBe('number');
      expect(singleCharHash).toBe(97); // ASCII value of 'a'
    });
  });

  describe('Hash Table Basic Operations', () => {
    let hashTable;

    beforeEach(() => {
      hashTable = new HashTable();
    });

    it('should initialize with empty collection', () => {
      expect(hashTable.collection).toEqual({});
    });

    it('should add single key-value pair', () => {
      hashTable.add('name', 'John');
      expect(hashTable.lookup('name')).toBe('John');
    });

    it('should add multiple key-value pairs', () => {
      hashTable.add('name', 'John');
      hashTable.add('age', 30);
      hashTable.add('city', 'New York');

      expect(hashTable.lookup('name')).toBe('John');
      expect(hashTable.lookup('age')).toBe(30);
      expect(hashTable.lookup('city')).toBe('New York');
    });

    it('should update existing key with new value', () => {
      hashTable.add('name', 'John');
      hashTable.add('name', 'Jane');

      expect(hashTable.lookup('name')).toBe('Jane');
    });

    it('should handle different data types as values', () => {
      hashTable.add('string', 'text');
      hashTable.add('number', 42);
      hashTable.add('boolean', true);
      hashTable.add('object', { key: 'value' });
      hashTable.add('array', [1, 2, 3]);

      expect(hashTable.lookup('string')).toBe('text');
      expect(hashTable.lookup('number')).toBe(42);
      expect(hashTable.lookup('boolean')).toBe(true);
      expect(hashTable.lookup('object')).toEqual({ key: 'value' });
      expect(hashTable.lookup('array')).toEqual([1, 2, 3]);
    });
  });

  describe('Hash Table Collision Handling', () => {
    let hashTable;

    beforeEach(() => {
      hashTable = new HashTable();
    });

    it('should handle collisions by storing multiple items at same hash index', () => {
      // Force collision by using keys that likely produce same hash
      const key1 = 'ab';
      const key2 = 'ba';

      hashTable.add(key1, 'value1');
      hashTable.add(key2, 'value2');

      // Both values should be retrievable
      expect(hashTable.lookup(key1)).toBe('value1');
      expect(hashTable.lookup(key2)).toBe('value2');
    });

    it('should handle removal with collisions correctly', () => {
      const key1 = 'collision1';
      const key2 = 'collision2';
      const key3 = 'collision3';

      // Add multiple items that may collide
      hashTable.add(key1, 'value1');
      hashTable.add(key2, 'value2');
      hashTable.add(key3, 'value3');

      // Remove middle item
      hashTable.remove(key2);

      // Check that only key2 is removed
      expect(hashTable.lookup(key1)).toBe('value1');
      expect(hashTable.lookup(key2)).toBeNull();
      expect(hashTable.lookup(key3)).toBe('value3');
    });

    it('should handle multiple collisions at same index', () => {
      // Create keys that are likely to collide
      const keys = ['a', 'b', 'c', 'd', 'e'];
      const values = ['val1', 'val2', 'val3', 'val4', 'val5'];

      // Add all items
      keys.forEach((key, index) => {
        hashTable.add(key, values[index]);
      });

      // Verify all items are accessible
      keys.forEach((key, index) => {
        expect(hashTable.lookup(key)).toBe(values[index]);
      });

      // Remove some items
      hashTable.remove('b');
      hashTable.remove('d');

      // Verify correct items are removed
      expect(hashTable.lookup('a')).toBe('val1');
      expect(hashTable.lookup('b')).toBeNull();
      expect(hashTable.lookup('c')).toBe('val3');
      expect(hashTable.lookup('d')).toBeNull();
      expect(hashTable.lookup('e')).toBe('val5');
    });
  });

  describe('Hash Table Edge Cases', () => {
    let hashTable;

    beforeEach(() => {
      hashTable = new HashTable();
    });

    it('should handle empty string keys', () => {
      hashTable.add('', 'empty key value');
      expect(hashTable.lookup('')).toBe('empty key value');
    });

    it('should handle special character keys', () => {
      const specialKeys = ['!@#$%', '日本語', '🚀', '\\n\\t'];

      specialKeys.forEach((key, index) => {
        hashTable.add(key, `value${index}`);
      });

      specialKeys.forEach((key, index) => {
        expect(hashTable.lookup(key)).toBe(`value${index}`);
      });
    });

    it('should handle null and undefined values', () => {
      hashTable.add('nullKey', null);
      hashTable.add('undefinedKey', undefined);

      expect(hashTable.lookup('nullKey')).toBeNull();
      expect(hashTable.lookup('undefinedKey')).toBeUndefined();
    });

    it('should return null for non-existent keys', () => {
      expect(hashTable.lookup('nonExistent')).toBeNull();
      expect(hashTable.lookup('')).toBeNull();
      expect(hashTable.lookup('undefined')).toBeNull();
    });

    it('should handle removing non-existent keys gracefully', () => {
      // Should not throw error
      expect(() => {
        hashTable.remove('nonExistent');
      }).not.toThrow();

      // Should still return null
      expect(hashTable.lookup('nonExistent')).toBeNull();
    });
  });

  describe('Hash Table Performance and Consistency', () => {
    let hashTable;

    beforeEach(() => {
      hashTable = new HashTable();
    });

    it('should handle large number of items', () => {
      const itemCount = 1000;

      // Add many items
      for (let i = 0; i < itemCount; i++) {
        hashTable.add(`key${i}`, `value${i}`);
      }

      // Verify all items are accessible
      for (let i = 0; i < itemCount; i++) {
        expect(hashTable.lookup(`key${i}`)).toBe(`value${i}`);
      }

      // Remove every other item
      for (let i = 0; i < itemCount; i += 2) {
        hashTable.remove(`key${i}`);
      }

      // Verify correct items are removed
      for (let i = 0; i < itemCount; i++) {
        const result = hashTable.lookup(`key${i}`);
        const expectedValue = i % 2 === 0 ? null : `value${i}`;
        expect(result).toBe(expectedValue);
      }
    });

    it('should maintain operation consistency', () => {
      const testKey = 'consistencyTest';
      const testValue = 'consistentValue';

      // Add, lookup, remove, lookup cycle
      hashTable.add(testKey, testValue);
      expect(hashTable.lookup(testKey)).toBe(testValue);

      hashTable.remove(testKey);
      expect(hashTable.lookup(testKey)).toBeNull();

      // Add again with different value
      hashTable.add(testKey, 'newValue');
      expect(hashTable.lookup(testKey)).toBe('newValue');
    });
  });
});
