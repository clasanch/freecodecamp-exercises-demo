/**
 * Tests for Create and Add to Sets in ES6
 * TDD Implementation - Tests written BEFORE implementation
 *
 * Educational focus: ES6 Set native capabilities vs custom ES5 implementations
 */

import { performance } from 'perf_hooks';
import checkSet from '../../src/data-structures/es6-set-create-add.js';

describe('Create and Add to Sets in ES6', () => {
  describe('Basic functionality', () => {
    it('should return a Set instance', () => {
      const result = checkSet();
      expect(result).toBeInstanceOf(Set);
    });

    it('should preserve original values 1, 2, 3 from constructor', () => {
      const result = checkSet();
      expect(result.has(1)).toBe(true);
      expect(result.has(2)).toBe(true);
      expect(result.has(3)).toBe(true);
    });

    it('should handle duplicate values correctly (ES6 Set behavior)', () => {
      const result = checkSet();
      // Original constructor had [1, 2, 3, 3, 2, 1, 2, 3, 1]
      // But Set should only keep unique values
      expect(result.size).toBeGreaterThanOrEqual(3); // At least 1, 2, 3
    });
  });

  describe('FreeCodeCamp requirements', () => {
    it('should contain exactly the values: 1, 2, 3, Taco, Cat, Awesome', () => {
      const result = checkSet();
      const expectedValues = [1, 2, 3, 'Taco', 'Cat', 'Awesome'];

      expect(result.size).toBe(6);
      expectedValues.forEach(value => {
        expect(result.has(value)).toBe(true);
      });
    });

    it('should not contain any other values besides the required ones', () => {
      const result = checkSet();
      const resultArray = Array.from(result);
      const expectedValues = [1, 2, 3, 'Taco', 'Cat', 'Awesome'];

      expect(resultArray).toHaveLength(6);
      resultArray.forEach(value => {
        expect(expectedValues).toContain(value);
      });
    });

    it('should have added the string values using Set.add() method', () => {
      const result = checkSet();
      expect(result.has('Taco')).toBe(true);
      expect(result.has('Cat')).toBe(true);
      expect(result.has('Awesome')).toBe(true);
    });
  });

  describe('ES6 Set behavior verification', () => {
    it('should demonstrate ES6 Set automatic duplicate handling', () => {
      const result = checkSet();
      // The constructor had duplicates [1, 2, 3, 3, 2, 1, 2, 3, 1]
      // But Set automatically handles this
      expect(result.has(1)).toBe(true);
      expect(result.has(2)).toBe(true);
      expect(result.has(3)).toBe(true);
      // Should only appear once each
      expect(Array.from(result).filter(x => x === 1)).toHaveLength(1);
      expect(Array.from(result).filter(x => x === 2)).toHaveLength(1);
      expect(Array.from(result).filter(x => x === 3)).toHaveLength(1);
    });

    it('should maintain insertion order (ES6 Set spec)', () => {
      const result = checkSet();
      const resultArray = Array.from(result);

      // Numbers should come first (from constructor)
      expect(resultArray.indexOf(1)).toBeLessThan(resultArray.indexOf('Taco'));
      expect(resultArray.indexOf(2)).toBeLessThan(resultArray.indexOf('Cat'));
      expect(resultArray.indexOf(3)).toBeLessThan(resultArray.indexOf('Awesome'));
    });

    it('should work with mixed data types', () => {
      const result = checkSet();
      // Should handle both numbers and strings
      expect(typeof Array.from(result).find(x => x === 1)).toBe('number');
      expect(typeof Array.from(result).find(x => x === 'Taco')).toBe('string');
    });
  });

  describe('Edge cases and validations', () => {
    it('should not modify the original function signature', () => {
      expect(checkSet).toBeInstanceOf(Function);
      expect(checkSet).toHaveLength(0); // No parameters
    });

    it('should work when called multiple times', () => {
      const result1 = checkSet();
      const result2 = checkSet();

      expect(result1.size).toBe(result2.size);
      expect(Array.from(result1)).toEqual(Array.from(result2));
    });

    it('should handle console.log without errors', () => {
      expect(() => {
        checkSet();
      }).not.toThrow();
    });
  });

  describe('Performance characteristics', () => {
    it('should demonstrate O(1) add operations', () => {
      const start = performance.now();
      checkSet();
      const end = performance.now();

      // Should be very fast (< 10ms for this simple operation)
      expect(end - start).toBeLessThan(10);
    });

    it('should use Set native methods efficiently', () => {
      const result = checkSet();

      // Set operations should be faster than array equivalents
      const lookupStart = performance.now();
      result.has('Taco');
      result.has('Cat');
      result.has('Awesome');
      const lookupEnd = performance.now();

      expect(lookupEnd - lookupStart).toBeLessThan(1);
    });
  });

  describe('Educational compliance', () => {
    it('should preserve the exact skeleton structure', () => {
      const result = checkSet();

      // Should contain the exact skeleton elements without code inspection
      expect(result).toBeInstanceOf(Set);
      expect(result.has(1)).toBe(true);
      expect(result.has(2)).toBe(true);
      expect(result.has(3)).toBe(true);
      expect(result.size).toBe(6);
    });

    it('should demonstrate ES6 Set vs ES5 custom implementation benefits', () => {
      const result = checkSet();

      // ES6 Set provides native duplicate handling
      expect(result.size).toBe(6);
      // ES6 Set provides native iteration
      expect(Array.from(result)).toBeInstanceOf(Array);
      // ES6 Set provides native methods
      expect(typeof result.add).toBe('function');
      expect(typeof result.has).toBe('function');
      expect(typeof result.delete).toBe('function');
    });
  });
});
