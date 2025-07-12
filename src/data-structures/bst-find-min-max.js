/**
 * Find the Minimum and Maximum Value in a Binary Search Tree
 *
 * Educational implementation following FreeCodeCamp specifications.
 * Implements findMin and findMax methods for BST with efficient traversal.
 *
 * Key Design Decisions:
 * - Preserves exact FreeCodeCamp skeleton structure using function constructors
 * - Implements iterative traversal for optimal space complexity O(1)
 * - Returns null for empty tree as per specifications
 * - Leverages BST invariant: leftmost = min, rightmost = max
 *
 * @returns {Object} Object containing BinarySearchTree and Node constructors
 *
 * @example
 * // FreeCodeCamp compatible usage
 * const { BinarySearchTree, Node } = bstFindMinMax();
 * const bst = new BinarySearchTree();
 * bst.add(8); bst.add(3); bst.add(10);
 * bst.findMin(); // 3 (leftmost node)
 * bst.findMax(); // 10 (rightmost node)
 *
 * Time Complexity: O(h) where h is height of tree (O(log n) balanced, O(n) worst case)
 * Space Complexity: O(1) iterative approach
 * Educational Compliance: ✅ Verified against platform tests
 */
function bstFindMinMax() {
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
     * (Included for completeness and testing)
     *
     * @param {*} value - The value to add to the tree
     * @returns {undefined|null} undefined if successful, null if duplicate
     */
    this.add = function (value) {
      if (this.root === null) {
        this.root = new Node(value);
        return undefined;
      }
      return this._insertNode(this.root, value);
    };

    /**
     * Helper function for recursive insertion
     *
     * @param {Node} node - Current node being examined
     * @param {*} value - Value to insert
     * @returns {undefined|null} undefined if successful, null if duplicate
     */
    this._insertNode = function (node, value) {
      if (value === node.value) {
        return null;
      }

      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return undefined;
        } else {
          return this._insertNode(node.left, value);
        }
      }

      if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return undefined;
        } else {
          return this._insertNode(node.right, value);
        }
      }
    };

    /**
     * Find the minimum value in the binary search tree
     * Leverages BST property: minimum is leftmost node
     *
     * @returns {*|null} minimum value or null if empty tree
     */
    this.findMin = function () {
      // Handle empty tree
      if (this.root === null) {
        return null;
      }

      // Traverse to leftmost node (minimum)
      let current = this.root;
      while (current.left !== null) {
        current = current.left;
      }

      return current.value;
    };

    /**
     * Find the maximum value in the binary search tree
     * Leverages BST property: maximum is rightmost node
     *
     * @returns {*|null} maximum value or null if empty tree
     */
    this.findMax = function () {
      // Handle empty tree
      if (this.root === null) {
        return null;
      }

      // Traverse to rightmost node (maximum)
      let current = this.root;
      while (current.right !== null) {
        current = current.right;
      }

      return current.value;
    };

    // Only change code above this line
  }

  // Return constructors for testing and expose displayTree for coverage
  return { BinarySearchTree, Node, displayTree };
}

export default bstFindMinMax;
