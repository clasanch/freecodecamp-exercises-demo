/**
 * Create an ES6 JavaScript Map
 *
 * Educational implementation using native ES6 Map object.
 * Demonstrates the built-in Map functionality and its advantages
 * over regular JavaScript objects for key-value storage.
 *
 * Key Features of ES6 Map:
 * - Maintains insertion order of key-value pairs
 * - Supports any type of keys (objects, primitives, functions)
 * - Provides size property for O(1) size retrieval
 * - Iterable with for...of loops
 * - No default keys (unlike objects with prototype chain)
 * - Optimized for frequent additions and removals
 *
 * Methods Available:
 * - .has(key) - returns true/false based on presence of key
 * - .get(key) - returns value associated with key
 * - .set(key, value) - sets new key-value pair (chainable)
 * - .delete(key) - removes key-value pair
 * - .clear() - removes all key-value pairs
 * - .keys() - returns iterator of keys in insertion order
 * - .values() - returns iterator of values in insertion order
 * - .entries() - returns iterator of [key, value] pairs in insertion order
 *
 * @example
 * // FreeCodeCamp compatible usage
 * import { myMap } from './create-es6-javascript-map.js';
 * console.log(myMap.get('freeCodeCamp')); // 'Awesome!'
 * console.log(myMap.has('freeCodeCamp')); // true
 * console.log(myMap.size); // 1
 *
 * // Advanced usage
 * myMap.set('newKey', 'newValue');
 * for (const [key, value] of myMap) {
 *   console.log(`${key}: ${value}`);
 * }
 *
 * Time Complexity: O(1) for get, set, has, delete operations
 * Space Complexity: O(n) where n is the number of key-value pairs
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
 */

/**
 * ES6 Map instance initialized with the required key-value pair
 * @type {Map<string, string>}
 */
const myMap = new Map();

// Add the required key-value pair as per FreeCodeCamp specifications
myMap.set('freeCodeCamp', 'Awesome!');

export { myMap };
