/**
 * Create a Map Data Structure
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements a custom Map that wraps JavaScript objects to provide
 * key-value pair storage with specific method requirements.
 *
 * Key Design Decisions:
 * - Preserves FreeCodeCamp skeleton exactly (var + function constructor)
 * - Uses Object.keys() for size calculation for educational simplicity
 * - Converts all values to strings in values() method per specifications
 * - Direct object property access for O(1) operations
 *
 * @constructor
 * @returns {Object} Map instance with collection property and methods
 *
 * @example
 * // FreeCodeCamp compatible usage
 * var map = new Map();
 * map.add('name', 'John');
 * map.get('name'); // 'John'
 * map.values(); // ['John'] (as strings)
 *
 * Time Complexity: O(1) for add, remove, get, has operations
 * Space Complexity: O(n) where n is the number of key-value pairs
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
 */

/* eslint-disable no-var */
var Map = function () {
  this.collection = {};
  // Only change code below this line

  /**
   * Add a key-value pair to the map
   * @param {*} key - The key to add
   * @param {*} value - The value to associate with the key
   */
  this.add = function (key, value) {
    this.collection[key] = value;
  };

  /**
   * Remove a key-value pair from the map
   * @param {*} key - The key to remove
   */
  this.remove = function (key) {
    delete this.collection[key];
  };

  /**
   * Get the value associated with a key
   * @param {*} key - The key to look up
   * @returns {*} The value associated with the key, or undefined if not found
   */
  this.get = function (key) {
    return this.collection[key];
  };

  /**
   * Check if a key exists in the map
   * @param {*} key - The key to check
   * @returns {boolean} True if the key exists, false otherwise
   */
  this.has = function (key) {
    return key in this.collection;
  };

  /**
   * Get all values in the map as strings in an array
   * @returns {string[]} Array of all values converted to strings
   */
  this.values = function () {
    return Object.keys(this.collection).map(key => String(this.collection[key]));
  };

  /**
   * Get the number of items in the map
   * @returns {number} The number of key-value pairs in the map
   */
  this.size = function () {
    return Object.keys(this.collection).length;
  };

  /**
   * Empty the map
   */
  this.clear = function () {
    this.collection = {};
  };

  // Only change code above this line
};

export default Map;
