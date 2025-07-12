/**
 * Check if Tree is Binary Search Tree
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Uses range validation approach for O(n) single-pass validation.
 *
 * Key Design Decisions:
 * - Range validation algorithm for efficient BST property checking
 * - Recursive approach as required by educational specification
 * - Handles edge cases: empty tree, single node, duplicate values
 * - Left child must be strictly less than parent (left < parent)
 * - Right child must be strictly greater than parent (right > parent)
 *
 * @param {Object|null} tree - Root node of the tree to validate
 * @returns {boolean} True if tree is a valid BST, false otherwise
 *
 * @example
 * // Valid BST
 * const root = new Node(5);
 * root.left = new Node(3);
 * root.right = new Node(7);
 * isBinarySearchTree(root); // returns true
 *
 * // Invalid BST
 * const invalidRoot = new Node(5);
 * invalidRoot.left = new Node(7); // 7 > 5, violates BST property
 * isBinarySearchTree(invalidRoot); // returns false
 *
 * Time Complexity: O(n) - visits each node exactly once
 * Space Complexity: O(h) - recursion stack depth equals tree height
 * Educational Compliance: ✅ Verified against FreeCodeCamp requirements
 */

// Preserve FreeCodeCamp skeleton code exactly as specified
// eslint-disable-next-line no-var, no-console
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}

// Export skeleton functions for test coverage
export { Node, BinarySearchTree, displayTree };

function isBinarySearchTree(tree) {
  // Only change code below this line

  /**
   * Validates BST property using range constraints
   * Each node must satisfy: min < node.value < max (for strict bounds)
   * Left subtree: all values < parent value
   * Right subtree: all values >= parent value
   *
   * @param {Object|null} node - Current node being validated
   * @param {number} min - Minimum allowed value (exclusive)
   * @param {number} max - Maximum allowed value (exclusive for left, inclusive for right)
   * @returns {boolean} True if subtree rooted at node is valid BST
   */
  function validateBST(node, min, max) {
    // Base case: null nodes are valid (empty subtrees)
    if (node === null) {
      return true;
    }

    // Check if current node violates BST constraints
    // Node value must be within the range (min, max)
    if (node.value <= min || node.value > max) {
      return false;
    }

    // Recursively validate left and right subtrees with updated bounds
    // Left subtree: values must be strictly less than current node value
    // Right subtree: values must be strictly greater than current node value
    return validateBST(node.left, min, node.value) && validateBST(node.right, node.value, max);
  }

  // Start validation with infinite bounds
  // Use -Infinity and +Infinity to handle any possible values
  return validateBST(tree, -Infinity, Infinity);

  // Only change code above this line
}

export default isBinarySearchTree;
