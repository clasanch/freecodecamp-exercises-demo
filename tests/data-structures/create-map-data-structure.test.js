/**
 * Tests for Create a Map Data Structure
 * TDD Implementation - Tests BEFORE implementation
 *
 * FreeCodeCamp Data Structures Challenge
 * Educational implementation with skeleton compliance
 */

import MapDataStructure from '../../src/data-structures/create-map-data-structure.js';

describe('Create a Map Data Structure', () => {
  let map;

  beforeEach(() => {
    map = new MapDataStructure();
  });

  describe('Constructor and Basic Structure', () => {
    it('should exist and be constructible', () => {
      expect(map).toBeDefined();
      expect(map.collection).toBeDefined();
      expect(typeof map.collection).toBe('object');
    });

    it('should have all required methods', () => {
      expect(typeof map.add).toBe('function');
      expect(typeof map.remove).toBe('function');
      expect(typeof map.get).toBe('function');
      expect(typeof map.has).toBe('function');
      expect(typeof map.values).toBe('function');
      expect(typeof map.size).toBe('function');
      expect(typeof map.clear).toBe('function');
    });

    it('should start with empty collection', () => {
      expect(map.size()).toBe(0);
      expect(map.values()).toEqual([]);
    });
  });

  describe('Add Method', () => {
    it('should add key-value pairs to the map', () => {
      map.add('name', 'John');
      expect(map.has('name')).toBe(true);
      expect(map.get('name')).toBe('John');
    });

    it('should add multiple key-value pairs', () => {
      map.add('name', 'John');
      map.add('age', 30);
      map.add('city', 'New York');

      expect(map.size()).toBe(3);
      expect(map.has('name')).toBe(true);
      expect(map.has('age')).toBe(true);
      expect(map.has('city')).toBe(true);
    });

    it('should overwrite existing keys', () => {
      map.add('name', 'John');
      map.add('name', 'Jane');

      expect(map.get('name')).toBe('Jane');
      expect(map.size()).toBe(1);
    });

    it('should handle different data types as keys', () => {
      map.add('string', 'value1');
      map.add(123, 'value2');
      map.add(true, 'value3');

      expect(map.get('string')).toBe('value1');
      expect(map.get(123)).toBe('value2');
      expect(map.get(true)).toBe('value3');
      expect(map.size()).toBe(3);
    });
  });

  describe('Has Method', () => {
    it('should return true for existing keys', () => {
      map.add('test', 'value');
      expect(map.has('test')).toBe(true);
    });

    it('should return false for non-existing keys', () => {
      expect(map.has('nonexistent')).toBe(false);
    });

    it('should return false after key is removed', () => {
      map.add('temp', 'value');
      map.remove('temp');
      expect(map.has('temp')).toBe(false);
    });

    it('should handle different data types as keys', () => {
      map.add(42, 'number');
      map.add(true, 'boolean');

      expect(map.has(42)).toBe(true);
      expect(map.has(true)).toBe(true);
      expect(map.has(false)).toBe(false);
    });
  });

  describe('Get Method', () => {
    it('should return stored values for existing keys', () => {
      map.add('key1', 'value1');
      map.add('key2', 'value2');

      expect(map.get('key1')).toBe('value1');
      expect(map.get('key2')).toBe('value2');
    });

    it('should return undefined for non-existing keys', () => {
      expect(map.get('nonexistent')).toBeUndefined();
    });

    it('should handle different data types as values', () => {
      map.add('string', 'text');
      map.add('number', 42);
      map.add('boolean', true);
      map.add('null', null);

      expect(map.get('string')).toBe('text');
      expect(map.get('number')).toBe(42);
      expect(map.get('boolean')).toBe(true);
      expect(map.get('null')).toBe(null);
    });
  });

  describe('Remove Method', () => {
    it('should remove existing key-value pairs', () => {
      map.add('toRemove', 'value');
      expect(map.has('toRemove')).toBe(true);

      map.remove('toRemove');
      expect(map.has('toRemove')).toBe(false);
      expect(map.get('toRemove')).toBeUndefined();
    });

    it('should handle removal of non-existing keys gracefully', () => {
      const initialSize = map.size();
      map.remove('nonexistent');
      expect(map.size()).toBe(initialSize);
    });

    it('should update size after removal', () => {
      map.add('key1', 'value1');
      map.add('key2', 'value2');
      expect(map.size()).toBe(2);

      map.remove('key1');
      expect(map.size()).toBe(1);
    });
  });

  describe('Values Method', () => {
    it('should return all values as strings in an array', () => {
      map.add('name', 'John');
      map.add('age', 30);
      map.add('active', true);

      const values = map.values();
      expect(Array.isArray(values)).toBe(true);
      expect(values).toContain('John');
      expect(values).toContain('30'); // Should be string
      expect(values).toContain('true'); // Should be string
      expect(values).toHaveLength(3);
    });

    it('should return empty array for empty map', () => {
      expect(map.values()).toEqual([]);
    });

    it('should convert all values to strings', () => {
      map.add('string', 'hello');
      map.add('number', 42);
      map.add('boolean', false);
      map.add('null', null);
      map.add('undefined', undefined);

      const values = map.values();
      values.forEach(value => {
        expect(typeof value).toBe('string');
      });

      expect(values).toContain('hello');
      expect(values).toContain('42');
      expect(values).toContain('false');
      expect(values).toContain('null');
      expect(values).toContain('undefined');
    });
  });

  describe('Size Method', () => {
    it('should return zero for empty map', () => {
      expect(map.size()).toBe(0);
    });

    it('should return correct count of items', () => {
      map.add('key1', 'value1');
      expect(map.size()).toBe(1);

      map.add('key2', 'value2');
      expect(map.size()).toBe(2);

      map.add('key3', 'value3');
      expect(map.size()).toBe(3);
    });

    it('should not increase size when overwriting existing keys', () => {
      map.add('key', 'value1');
      expect(map.size()).toBe(1);

      map.add('key', 'value2');
      expect(map.size()).toBe(1);
    });

    it('should decrease size when removing items', () => {
      map.add('key1', 'value1');
      map.add('key2', 'value2');
      expect(map.size()).toBe(2);

      map.remove('key1');
      expect(map.size()).toBe(1);
    });
  });

  describe('Clear Method', () => {
    it('should empty the map', () => {
      map.add('key1', 'value1');
      map.add('key2', 'value2');
      map.add('key3', 'value3');

      expect(map.size()).toBe(3);

      map.clear();

      expect(map.size()).toBe(0);
      expect(map.values()).toEqual([]);
      expect(map.has('key1')).toBe(false);
      expect(map.has('key2')).toBe(false);
      expect(map.has('key3')).toBe(false);
    });

    it('should handle clearing an already empty map', () => {
      map.clear();
      expect(map.size()).toBe(0);
    });
  });

  describe('Edge Cases and Integration', () => {
    it('should handle rapid add/remove operations', () => {
      // Add many items
      for (let i = 0; i < 100; i++) {
        map.add(`key${i}`, `value${i}`);
      }
      expect(map.size()).toBe(100);

      // Remove every other item
      for (let i = 0; i < 100; i += 2) {
        map.remove(`key${i}`);
      }
      expect(map.size()).toBe(50);
    });

    it('should maintain data integrity during complex operations', () => {
      map.add('persistent', 'value');

      // Add and remove temporary items
      map.add('temp1', 'temp_value1');
      map.add('temp2', 'temp_value2');
      map.remove('temp1');
      map.remove('temp2');

      // Original should still exist
      expect(map.has('persistent')).toBe(true);
      expect(map.get('persistent')).toBe('value');
      expect(map.size()).toBe(1);
    });

    it('should handle special string keys correctly', () => {
      map.add('', 'empty string key');
      map.add('0', 'zero string');
      map.add('false', 'false string');

      expect(map.get('')).toBe('empty string key');
      expect(map.get('0')).toBe('zero string');
      expect(map.get('false')).toBe('false string');
      expect(map.size()).toBe(3);
    });
  });

  describe('FreeCodeCamp Compliance Tests', () => {
    it('should pass FreeCodeCamp Test 1: Map data structure should exist', () => {
      expect(MapDataStructure).toBeDefined();
      expect(typeof MapDataStructure).toBe('function');
    });

    it('should pass FreeCodeCamp Test 2: Map should have all required methods', () => {
      const methods = ['add', 'remove', 'get', 'has', 'values', 'clear', 'size'];
      methods.forEach(method => {
        expect(typeof map[method]).toBe('function');
      });
    });

    it('should pass FreeCodeCamp Test 3: add method should add items', () => {
      map.add('test', 'value');
      expect(map.has('test')).toBe(true);
    });

    it('should pass FreeCodeCamp Test 4: has method behavior', () => {
      map.add('present', 'value');
      expect(map.has('present')).toBe(true);
      expect(map.has('absent')).toBe(false);
    });

    it('should pass FreeCodeCamp Test 5: get method should return values', () => {
      map.add('key', 'expected_value');
      expect(map.get('key')).toBe('expected_value');
    });

    it('should pass FreeCodeCamp Test 6: values method should return strings array', () => {
      map.add('key1', 'string_value');
      map.add('key2', 42);
      map.add('key3', true);

      const values = map.values();
      expect(Array.isArray(values)).toBe(true);
      values.forEach(value => {
        expect(typeof value).toBe('string');
      });
    });

    it('should pass FreeCodeCamp Test 7: clear and size methods', () => {
      map.add('key1', 'value1');
      map.add('key2', 'value2');

      expect(map.size()).toBe(2);

      map.clear();

      expect(map.size()).toBe(0);
    });
  });
});
