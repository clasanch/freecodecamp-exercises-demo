/**
 * Tests for Typed Arrays
 * TDD Implementation - Tests BEFORE implementation
 */

import typedArrays from '../../src/data-structures/typed-arrays.js';

describe('Typed Arrays', () => {
  describe('Buffer creation', () => {
    test('should create a buffer that is 64 bytes large', () => {
      const result = typedArrays();
      expect(result.buffer).toBeDefined();
      expect(result.buffer.byteLength).toBe(64);
    });
  });

  describe('Int32Array view creation', () => {
    test('should create i32View that is 64 bytes large', () => {
      const result = typedArrays();
      expect(result.i32View).toBeDefined();
      expect(result.i32View.byteLength).toBe(64);
    });

    test('should create i32View that is 16 elements long', () => {
      const result = typedArrays();
      expect(result.i32View).toBeDefined();
      expect(result.i32View).toHaveLength(16);
    });
  });

  describe('Typed array properties', () => {
    test('should return Int32Array instance', () => {
      const result = typedArrays();
      expect(result.i32View).toBeInstanceOf(Int32Array);
    });

    test('should return ArrayBuffer instance', () => {
      const result = typedArrays();
      expect(result.buffer).toBeInstanceOf(ArrayBuffer);
    });

    test('should have i32View pointing to the same buffer', () => {
      const result = typedArrays();
      expect(result.i32View.buffer).toBe(result.buffer);
    });
  });

  describe('Memory allocation verification', () => {
    test('should allocate exactly 64 bytes for buffer', () => {
      const result = typedArrays();
      // Int32Array uses 4 bytes per element
      // 64 bytes / 4 bytes per element = 16 elements
      expect(result.buffer.byteLength).toBe(64);
      expect(result.i32View).toHaveLength(16);
      expect(result.i32View.length * 4).toBe(result.buffer.byteLength);
    });

    test('should initialize all elements to zero', () => {
      const result = typedArrays();
      for (let i = 0; i < result.i32View.length; i++) {
        expect(result.i32View[i]).toBe(0);
      }
    });
  });

  describe('Typed array functionality', () => {
    test('should allow setting and getting values', () => {
      const result = typedArrays();
      result.i32View[0] = 42;
      expect(result.i32View[0]).toBe(42);
    });

    test('should maintain data integrity across buffer view', () => {
      const result = typedArrays();
      result.i32View[0] = 100;
      result.i32View[15] = 200;

      expect(result.i32View[0]).toBe(100);
      expect(result.i32View[15]).toBe(200);
      expect(result.i32View[1]).toBe(0);
    });
  });
});
