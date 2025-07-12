/**
 * Add a New Element to a Binary Search Tree
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements a binary search tree with add functionality maintaining BST invariant.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure using function constructors
 * - Implements recursive insertion algorithm for educational clarity
 * - Handles duplicate values by returning null as specified
 * - Maintains BST invariant: left ≤ parent, right ≥ parent
 *
 * @returns {Object} Object containing BinarySearchTree and Node constructors
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const { BinarySearchTree, Node } = addNewElementBinarySearchTree();
 * const bst = new BinarySearchTree();
 * bst.add(8); // undefined (successful)
 * bst.add(3); // undefined (successful)
 * bst.add(8); // null (duplicate)
 *
 * Time Complexity: O(log n) average case, O(n) worst case (unbalanced tree)
 * Space Complexity: O(log n) average case (recursion stack), O(n) worst case
 * Educational Compliance: ✅ Verified against platform tests
 */
function addNewElementBinarySearchTree() {
  // FreeCodeCamp skeleton code - preserved exactly
  var displayTree = tree => console.log(JSON.stringify(tree, null, 2)); // eslint-disable-line no-var, no-console

  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  function BinarySearchTree() {
    this.root = null;

    // Only change code below this line

    /**
     * Add a new element to the binary search tree
     *
     * @param {*} value - The value to add to the tree
     * @returns {undefined|null} undefined if successful, null if duplicate
     */
    this.add = function (value) {
      // Handle empty tree case
      if (this.root === null) {
        this.root = new Node(value);
        return undefined;
      }

      // Use recursive helper function for insertion
      return this._insertNode(this.root, value);
    };

    /**
     * Recursive helper function to insert a node in the correct position
     *
     * @param {Node} node - Current node being examined
     * @param {*} value - Value to insert
     * @returns {undefined|null} undefined if successful, null if duplicate
     */
    this._insertNode = function (node, value) {
      // Handle duplicate values - return null
      if (value === node.value) {
        return null;
      }

      // Insert in left subtree (value < node.value)
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return undefined;
        } else {
          return this._insertNode(node.left, value);
        }
      }

      // Insert in right subtree (value > node.value)
      if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return undefined;
        } else {
          return this._insertNode(node.right, value);
        }
      }
    };

    // Only change code above this line
  }

  // Return constructors for testing and expose displayTree for coverage
  return { BinarySearchTree, Node, displayTree };
}

export default addNewElementBinarySearchTree;
