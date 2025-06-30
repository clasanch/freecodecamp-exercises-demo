/**
 * Tests for No Repeats Please Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Problem: Return the number of total permutations of the provided string
 * that don't have repeated consecutive letters.
 */

import permAlone from '../../src/algorithms/no-repeats-please.js';

describe('No Repeats Please Algorithm', () => {
  describe('Basic functionality tests', () => {
    test('permAlone("aab") should return a number', () => {
      const result = permAlone('aab');
      expect(typeof result).toBe('number');
    });

    test('permAlone("aab") should return 2', () => {
      expect(permAlone('aab')).toBe(2);
    });

    test('permAlone("a") should return 1', () => {
      expect(permAlone('a')).toBe(1);
    });
  });

  describe('Cases with no valid permutations', () => {
    test('permAlone("aaa") should return 0', () => {
      expect(permAlone('aaa')).toBe(0);
    });

    test('permAlone("zzzzzzzz") should return 0', () => {
      expect(permAlone('zzzzzzzz')).toBe(0);
    });

    test('permAlone("aaab") should return 0', () => {
      expect(permAlone('aaab')).toBe(0);
    });
  });

  describe('Complex permutation cases', () => {
    test('permAlone("aabb") should return 8', () => {
      expect(permAlone('aabb')).toBe(8);
    });

    test('permAlone("aaabb") should return 12', () => {
      expect(permAlone('aaabb')).toBe(12);
    });
  });

  describe('Large permutation cases', () => {
    test('permAlone("abcdefa") should return 3600', () => {
      expect(permAlone('abcdefa')).toBe(3600);
    });

    test('permAlone("abfdefa") should return 2640', () => {
      expect(permAlone('abfdefa')).toBe(2640);
    });
  });

  describe('Edge cases and validations', () => {
    test('should handle empty string', () => {
      expect(permAlone('')).toBe(1); // By mathematical convention
    });

    test('should handle single character', () => {
      expect(permAlone('x')).toBe(1);
    });
  });
});
