/**
 * Tests for Create an ES6 JavaScript Map
 * TDD Implementation - Tests BEFORE implementation
 *
 * FreeCodeCamp Data Structures Challenge
 * Educational implementation using native ES6 Map
 */

import { myMap } from '../../src/data-structures/create-es6-javascript-map.js';

describe('Create an ES6 JavaScript Map', () => {
  describe('FreeCodeCamp Compliance Tests', () => {
    it('should pass FreeCodeCamp Test 1: myMap object should exist', () => {
      expect(myMap).toBeDefined();
      expect(myMap instanceof Map).toBe(true);
    });

    it('should pass FreeCodeCamp Test 2: myMap should contain the key value pair freeCodeCamp, Awesome!', () => {
      expect(myMap.has('freeCodeCamp')).toBe(true);
      expect(myMap.get('freeCodeCamp')).toBe('Awesome!');
    });
  });

  describe('ES6 Map Basic Functionality', () => {
    it('should be a native ES6 Map instance', () => {
      expect(myMap).toBeInstanceOf(Map);
      expect(typeof myMap.set).toBe('function');
      expect(typeof myMap.get).toBe('function');
      expect(typeof myMap.has).toBe('function');
      expect(typeof myMap.delete).toBe('function');
      expect(typeof myMap.clear).toBe('function');
    });

    it('should have correct size after initialization', () => {
      expect(myMap.size).toBe(1);
    });

    it('should support ES6 Map methods', () => {
      // Test has method
      expect(myMap.has('freeCodeCamp')).toBe(true);
      expect(myMap.has('nonexistent')).toBe(false);

      // Test get method
      expect(myMap.get('freeCodeCamp')).toBe('Awesome!');
      expect(myMap.get('nonexistent')).toBeUndefined();
    });

    it('should support iterator methods', () => {
      const keys = Array.from(myMap.keys());
      const values = Array.from(myMap.values());
      const entries = Array.from(myMap.entries());

      expect(keys).toContain('freeCodeCamp');
      expect(values).toContain('Awesome!');
      expect(entries).toContainEqual(['freeCodeCamp', 'Awesome!']);
    });
  });

  describe('ES6 Map Advanced Features', () => {
    it('should maintain insertion order', () => {
      const testMap = new Map();
      testMap.set('first', 1);
      testMap.set('second', 2);
      testMap.set('third', 3);

      const keys = Array.from(testMap.keys());
      expect(keys).toEqual(['first', 'second', 'third']);
    });

    it('should support different key types', () => {
      const testMap = new Map();
      const objKey = {};
      const funcKey = function () {};

      testMap.set('string', 'string value');
      testMap.set(42, 'number value');
      testMap.set(true, 'boolean value');
      testMap.set(objKey, 'object value');
      testMap.set(funcKey, 'function value');

      expect(testMap.get('string')).toBe('string value');
      expect(testMap.get(42)).toBe('number value');
      expect(testMap.get(true)).toBe('boolean value');
      expect(testMap.get(objKey)).toBe('object value');
      expect(testMap.get(funcKey)).toBe('function value');
    });

    it('should support chaining with set method', () => {
      const testMap = new Map();
      const result = testMap.set('key1', 'value1').set('key2', 'value2');

      expect(result).toBe(testMap);
      expect(testMap.size).toBe(2);
      expect(testMap.get('key1')).toBe('value1');
      expect(testMap.get('key2')).toBe('value2');
    });
  });

  describe('ES6 Map vs Object Comparison', () => {
    it('should handle size property correctly', () => {
      const testMap = new Map();
      expect(testMap.size).toBe(0);

      testMap.set('key1', 'value1');
      expect(testMap.size).toBe(1);

      testMap.set('key2', 'value2');
      expect(testMap.size).toBe(2);

      testMap.delete('key1');
      expect(testMap.size).toBe(1);
    });

    it('should not have default keys like objects', () => {
      const testMap = new Map();
      expect(testMap.has('constructor')).toBe(false);
      expect(testMap.has('toString')).toBe(false);
      expect(testMap.has('valueOf')).toBe(false);
    });

    it('should be iterable', () => {
      const testMap = new Map([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]);

      const pairs = [];
      for (const [key, value] of testMap) {
        pairs.push([key, value]);
      }

      expect(pairs).toEqual([
        ['key1', 'value1'],
        ['key2', 'value2'],
      ]);
    });
  });

  describe('Edge Cases and Validations', () => {
    it('should handle undefined and null keys', () => {
      const testMap = new Map();
      testMap.set(undefined, 'undefined key');
      testMap.set(null, 'null key');

      expect(testMap.get(undefined)).toBe('undefined key');
      expect(testMap.get(null)).toBe('null key');
      expect(testMap.has(undefined)).toBe(true);
      expect(testMap.has(null)).toBe(true);
    });

    it('should handle NaN as key', () => {
      const testMap = new Map();
      testMap.set(NaN, 'NaN value');

      expect(testMap.get(NaN)).toBe('NaN value');
      expect(testMap.has(NaN)).toBe(true);
    });

    it('should handle empty string as key', () => {
      const testMap = new Map();
      testMap.set('', 'empty string value');

      expect(testMap.get('')).toBe('empty string value');
      expect(testMap.has('')).toBe(true);
    });

    it('should handle symbol keys', () => {
      const testMap = new Map();
      const sym = Symbol('test');
      testMap.set(sym, 'symbol value');

      expect(testMap.get(sym)).toBe('symbol value');
      expect(testMap.has(sym)).toBe(true);
    });
  });

  describe('Memory and Performance', () => {
    it('should handle rapid additions and deletions', () => {
      const testMap = new Map();

      // Add many items
      for (let i = 0; i < 1000; i++) {
        testMap.set(`key${i}`, `value${i}`);
      }
      expect(testMap.size).toBe(1000);

      // Delete every other item
      for (let i = 0; i < 1000; i += 2) {
        testMap.delete(`key${i}`);
      }
      expect(testMap.size).toBe(500);

      // Clear all
      testMap.clear();
      expect(testMap.size).toBe(0);
    });

    it('should maintain performance with large datasets', () => {
      const testMap = new Map();
      const startTime = Date.now();

      // Add 10k items
      for (let i = 0; i < 10000; i++) {
        testMap.set(i, `value${i}`);
      }

      const endTime = Date.now();
      const duration = endTime - startTime;

      expect(testMap.size).toBe(10000);
      expect(duration).toBeLessThan(100); // Should be fast
    });
  });
});
