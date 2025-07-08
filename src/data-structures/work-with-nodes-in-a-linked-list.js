/**
 * Work with Nodes in a Linked List
 *
 * Educational implementation of basic linked list node operations.
 * This exercise teaches the fundamental concept of nodes containing data
 * and references to form a sequential chain structure.
 *
 * Key Features:
 * - Node constructor for creating individual nodes
 * - Element property for storing data
 * - Next property for linking to subsequent nodes
 * - Manual node linking to form chains
 * - Linear traversal capability
 * - Educational skeleton preservation for FreeCodeCamp compliance
 *
 * Node Structure:
 * Each node contains:
 * - element: The data stored in the node (any type)
 * - next: Reference to the next node in the chain (Node or null)
 *
 * Linked List Concept:
 * A linked list is like a conga line where each person (node) knows:
 * - Who they are (element)
 * - Who is next in line (next reference)
 * - But cannot see beyond the immediate next person
 *
 * Chain Formation:
 * Nodes are connected by setting the 'next' property of one node
 * to reference another node, creating a sequential chain that can
 * be traversed from head to tail.
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const node1 = new Node('First');
 * const node2 = new Node('Second');
 * node1.next = node2;
 * // Creates chain: First → Second
 *
 * @example
 * // Traversing the chain
 * let current = Kitten;
 * while (current !== null) {
 *   console.log(current.element);
 *   current = current.next;
 * }
 * // Output: Kitten, Puppy, Cat, Dog
 *
 * @example
 * // Chain structure after implementation
 * // Kitten → Puppy → Cat → Dog → null
 * // Each arrow represents a 'next' reference
 *
 * Time Complexity: O(1) for node creation and linking
 * Space Complexity: O(1) per node
 * Educational Compliance: ✅ Verified against FreeCodeCamp specifications
 *
 * IMPORTANT: The skeleton structure (Node constructor and pre-existing nodes)
 * is preserved exactly as provided by FreeCodeCamp for platform compatibility.
 */

// Node constructor function (provided by FreeCodeCamp skeleton)
/* eslint-disable no-var */
var Node = function (element) {
  this.element = element;
  this.next = null;
};

// Pre-existing nodes created by FreeCodeCamp skeleton
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

// Pre-existing connection established by FreeCodeCamp skeleton
Kitten.next = Puppy;

// Only change code below this line

/**
 * Cat node - Created as required by FreeCodeCamp instructions
 * Contains 'Cat' as element and initially null as next reference
 */
var Cat = new Node('Cat');

/**
 * Dog node - Created as required by FreeCodeCamp instructions
 * Contains 'Dog' as element and initially null as next reference
 */
var Dog = new Node('Dog');

/**
 * Link Puppy to Cat - Required connection for Test 1
 * Establishes the chain: Kitten → Puppy → Cat
 */
Puppy.next = Cat;

/**
 * Link Cat to Dog - Required connection for Test 2
 * Completes the chain: Kitten → Puppy → Cat → Dog
 */
Cat.next = Dog;

// Only change code above this line

// Export for different module systems
/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  // CommonJS export for FreeCodeCamp platform
  module.exports = { Node, Kitten, Puppy, Cat, Dog };
}
/* eslint-enable no-undef */

// ES Module export for project tests
export { Node, Kitten, Puppy, Cat, Dog };
