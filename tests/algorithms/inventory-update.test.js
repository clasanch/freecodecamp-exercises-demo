/**
 * Tests for Inventory Update Algorithm
 * TDD Implementation - Tests BEFORE implementation
 *
 * Requirements:
 * - Update existing inventory quantities from fresh delivery
 * - Add new items that don't exist in current inventory
 * - Return inventory sorted alphabetically by item name
 * - Maintain [quantity, name] format
 */

import updateInventory from '../../src/algorithms/inventory-update.js';

describe('Inventory Update Algorithm', () => {
  describe('Basic functionality tests', () => {
    test('should return an array', () => {
      const result = updateInventory([], []);
      expect(Array.isArray(result)).toBe(true);
    });

    test('should handle standard inventory update case', () => {
      const curInv = [
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
      ];
      const newInv = [
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [67, 'Bowling Ball'],
        [7, 'Toothpaste'],
      ];

      const result = updateInventory(curInv, newInv);

      expect(result).toHaveLength(6);
      expect(result).toEqual([
        [88, 'Bowling Ball'], // 21 + 67 = 88
        [2, 'Dirty Sock'], // unchanged
        [3, 'Hair Pin'], // 1 + 2 = 3
        [3, 'Half-Eaten Apple'], // new item
        [5, 'Microphone'], // unchanged
        [7, 'Toothpaste'], // new item
      ]);
    });
  });

  describe('Edge cases with empty inventories', () => {
    test('should return current inventory when new inventory is empty', () => {
      const curInv = [
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
      ];
      const newInv = [];

      const result = updateInventory(curInv, newInv);

      expect(result).toEqual([
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
      ]);
    });

    test('should return new inventory when current inventory is empty', () => {
      const curInv = [];
      const newInv = [
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [67, 'Bowling Ball'],
        [7, 'Toothpaste'],
      ];

      const result = updateInventory(curInv, newInv);

      expect(result).toEqual([
        [67, 'Bowling Ball'],
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [7, 'Toothpaste'],
      ]);
    });

    test('should return empty array when both inventories are empty', () => {
      const result = updateInventory([], []);
      expect(result).toEqual([]);
    });
  });

  describe('Alphabetical sorting validation', () => {
    test('should handle zero quantities and maintain alphabetical order', () => {
      const curInv = [
        [0, 'Bowling Ball'],
        [0, 'Dirty Sock'],
        [0, 'Hair Pin'],
        [0, 'Microphone'],
      ];
      const newInv = [
        [1, 'Hair Pin'],
        [1, 'Half-Eaten Apple'],
        [1, 'Bowling Ball'],
        [1, 'Toothpaste'],
      ];

      const result = updateInventory(curInv, newInv);

      expect(result).toEqual([
        [1, 'Bowling Ball'], // 0 + 1 = 1
        [0, 'Dirty Sock'], // unchanged
        [1, 'Hair Pin'], // 0 + 1 = 1
        [1, 'Half-Eaten Apple'], // new item
        [0, 'Microphone'], // unchanged
        [1, 'Toothpaste'], // new item
      ]);
    });
  });

  describe('Data integrity tests', () => {
    test('should not modify original arrays', () => {
      const curInv = [
        [1, 'Apple'],
        [2, 'Banana'],
      ];
      const newInv = [[1, 'Cherry']];
      const curInvCopy = JSON.parse(JSON.stringify(curInv));
      const newInvCopy = JSON.parse(JSON.stringify(newInv));

      updateInventory(curInv, newInv);

      expect(curInv).toEqual(curInvCopy);
      expect(newInv).toEqual(newInvCopy);
    });

    test('should maintain correct data types', () => {
      const result = updateInventory([[1, 'Apple']], [[2, 'Banana']]);

      result.forEach(item => {
        expect(typeof item[0]).toBe('number');
        expect(typeof item[1]).toBe('string');
        expect(item).toHaveLength(2);
      });
    });
  });
});
