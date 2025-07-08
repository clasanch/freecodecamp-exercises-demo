/**
 * Create a Hash Table
 *
 * Educational implementation of a hash table data structure with collision handling.
 * Hash tables provide O(1) average time complexity for insert, lookup, and delete operations
 * by using a hash function to map keys to array indices.
 *
 * Key Features:
 * - Collision handling using separate chaining (arrays at each hash index)
 * - Deterministic hash function for consistent key mapping
 * - Support for any data type as values
 * - Efficient O(1) average time complexity for basic operations
 * - Educational skeleton preservation for FreeCodeCamp compliance
 *
 * Collision Resolution Strategy:
 * This implementation uses separate chaining to handle collisions.
 * When multiple keys hash to the same index, they are stored in an array
 * at that index, and linear search is used to find the correct key-value pair.
 * This approach maintains simplicity while ensuring all items are accessible.
 *
 * Hash Function Behavior:
 * - Uses character code summation for string-to-number conversion
 * - Deterministic: same input always produces same output
 * - Simple algorithm suitable for educational purposes
 * - May produce collisions for similar strings (handled by chaining)
 *
 * Methods Available:
 * - add(key, value) - adds or updates a key-value pair
 * - lookup(key) - retrieves value associated with key, returns null if not found
 * - remove(key) - removes key-value pair, handles bucket cleanup
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const hashTable = new HashTable();
 * hashTable.add('name', 'John');
 * hashTable.add('age', 30);
 * console.log(hashTable.lookup('name')); // 'John'
 * hashTable.remove('age');
 * console.log(hashTable.lookup('age')); // null
 *
 * @example
 * // Collision handling demonstration
 * hashTable.add('a', 'value1');
 * hashTable.add('b', 'value2'); // May collide with 'a'
 * console.log(hashTable.lookup('a')); // 'value1'
 * console.log(hashTable.lookup('b')); // 'value2'
 *
 * @example
 * // Internal structure with collisions
 * // collection[97] = [['a', 'value1'], ['b', 'value2']]
 * // Both 'a' and 'b' stored at same hash index
 *
 * Time Complexity: O(1) average, O(n) worst case for operations
 * Space Complexity: O(n) where n is the number of key-value pairs
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
 *
 * IMPORTANT: The skeleton structure (hash function and constructor) is preserved
 * exactly as provided by FreeCodeCamp for platform compatibility.
 */

// Global variable to track hash function calls (required by FreeCodeCamp)
/* eslint-disable no-var, no-unused-vars */
var called = 0;

/**
 * Hash function provided by FreeCodeCamp
 * Converts string keys to numerical hash values by summing character codes
 * @param {string} string - The string to hash
 * @returns {number} The hash value
 */
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

/**
 * Hash Table constructor
 * Creates a new hash table with empty collection
 */
/* eslint-disable-next-line max-lines-per-function */
var HashTable = function () {
  this.collection = {};

  // Only change code below this line

  /**
   * Add a key-value pair to the hash table
   * Handles collisions by storing multiple items at same hash index
   * @param {string} key - The key to add
   * @param {*} value - The value to associate with the key
   */
  this.add = function (key, value) {
    const hashIndex = hash(key);

    // Initialize array at hash index if it doesn't exist
    if (!this.collection[hashIndex]) {
      this.collection[hashIndex] = [];
    }

    // Check if key already exists and update value
    const bucket = this.collection[hashIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // Key doesn't exist, add new key-value pair
    bucket.push([key, value]);
  };

  /**
   * Look up a value by key
   * @param {string} key - The key to look up
   * @returns {*|null} The value associated with the key, or null if not found
   */
  this.lookup = function (key) {
    const hashIndex = hash(key);
    const bucket = this.collection[hashIndex];

    // Return null if no items at this hash index
    if (!bucket) {
      return null;
    }

    // Search through bucket for the key
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    // Key not found
    return null;
  };

  /**
   * Remove a key-value pair from the hash table
   * @param {string} key - The key to remove
   */
  this.remove = function (key) {
    const hashIndex = hash(key);
    const bucket = this.collection[hashIndex];

    // Return if no items at this hash index
    if (!bucket) {
      return;
    }

    // Search through bucket for the key and remove it
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);

        // Clean up empty bucket
        if (bucket.length === 0) {
          delete this.collection[hashIndex];
        }
        return;
      }
    }
  };

  // Only change code above this line
};

// Export for different module systems
/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  // CommonJS export for FreeCodeCamp platform
  module.exports = { hash, HashTable };
}
/* eslint-enable no-undef */

// ES Module export for project tests
export { hash, HashTable };
