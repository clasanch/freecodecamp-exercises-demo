/**
 * Tests for Pairwise Algorithm
 * TDD Implementation - Tests BEFORE implementation
 */

import pairwise from '../../src/algorithms/pairwise.js';

describe('Pairwise Algorithm', () => {
  describe('Basic functionality cases', () => {
    test('should find pairs that sum to target and return sum of indices', () => {
      // [1, 4, 2, 3, 0, 5] with target 7
      // Pairs: [1,6] (not possible, no 6), [4,3] (indices 1,3), [2,5] (indices 2,5)
      // Sum of indices: 1+3+2+5 = 11
      expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
    });

    test('should handle simple case with small array', () => {
      // [1, 3, 2, 4] with target 4
      // Pairs: [1,3] (indices 0,1)
      // Sum of indices: 0+1 = 1
      expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
    });

    test('should handle array with duplicate values', () => {
      // [1, 1, 1] with target 2
      // Only one pair possible: [1,1] using indices 0,1 (lowest available)
      // Sum of indices: 0+1 = 1
      expect(pairwise([1, 1, 1], 2)).toBe(1);
    });
  });

  describe('Complex cases with multiple zeros', () => {
    test('should handle array with zeros correctly', () => {
      // [0, 0, 0, 0, 1, 1] with target 1
      // Pairs: [0,1] four times possible, but use lowest indices
      // [0,1] (indices 0,4), [0,1] (indices 1,5), remaining [0,0] unused
      // Sum of indices: 0+4+1+5 = 10
      expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    });
  });

  describe('Edge cases and validations', () => {
    test('should return 0 for empty array', () => {
      expect(pairwise([], 100)).toBe(0);
    });

    test('should return 0 when no pairs can be formed', () => {
      expect(pairwise([1, 2, 3], 10)).toBe(0);
    });

    test('should handle single element array', () => {
      expect(pairwise([1], 2)).toBe(0);
    });

    test('should handle case where target is larger than any possible sum', () => {
      expect(pairwise([1, 2, 3], 100)).toBe(0);
    });

    test('should handle negative numbers correctly', () => {
      // [-1, 1, 0] with target 0
      // Pairs: [-1,1] (indices 0,1)
      // Sum of indices: 0+1 = 1
      expect(pairwise([-1, 1, 0], 0)).toBe(1);
    });
  });

  describe('Algorithm correctness - lowest indices priority', () => {
    test('should prioritize lower indices when multiple options exist', () => {
      // [1, 1, 2] with target 3
      // Options: [1,2] using index 0 or 1 for the 1
      // Should use index 0 (lowest available)
      // Sum of indices: 0+2 = 2
      expect(pairwise([1, 1, 2], 3)).toBe(2);
    });

    test('should not reuse elements once paired', () => {
      // [2, 2, 2, 2] with target 4
      // Can form pairs: [2,2] (indices 0,1) and [2,2] (indices 2,3)
      // Sum of indices: 0+1+2+3 = 6
      expect(pairwise([2, 2, 2, 2], 4)).toBe(6);
    });
  });
});
