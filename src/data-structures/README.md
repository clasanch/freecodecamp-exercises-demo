# Data Structures

This folder contains the 46 data structures and algorithms from FreeCodeCamp
implemented with TDD methodology and Clean Code principles.

## Progress: 26/46 Completed

### ✅ Completed (26/46)

- [x] **Typed Arrays** (`typed-arrays.js`) - Efficient array operations for
      numeric data
- [x] **Learn how a Stack Works** (`stack.js`) - LIFO data structure
      implementation
- [x] **Create a Stack Class** (`stack-class.js`) - Object-oriented Stack
      implementation
- [x] **Create a Queue Class** (`queue-class.js`) - FIFO data structure with
      enqueue/dequeue operations
- [x] **Create a Priority Queue Class** (`priority-queue-class.js`) -
      Priority-based queue where elements with lower priority numbers have
      higher precedence
- [x] **Create a Circular Queue** (`circular-queue.js`) - Fixed-size circular
      buffer with wraparound pointer logic and O(1) enqueue/dequeue operations
- [x] **Create a Set Class** (`set-class.js`) - Unique element collection with
      type-safe storage, preventing duplicates and supporting O(1) operations
      for add, remove, has, and size methods
- [x] **Perform a Union on Two Sets** (`union-two-sets.js`) - Set union
      operation that combines two sets returning all unique elements from both
      sets without duplicates, using O(n + m) time complexity
- [x] **Perform an Intersection on Two Sets** (`intersection-two-sets.js`) - Set
      intersection operation that returns only elements common to both sets,
      optimized to iterate over the smaller set with O(min(n, m)) time
      complexity and 100% test coverage
- [x] **Perform a Difference on Two Sets** (`set-difference-class.js`) - Set
      difference operation that returns elements present in the first set but
      absent in the second set, demonstrating asymmetric operation with O(n)
      time complexity and 100% test coverage
- [x] **Create and Add to Sets in ES6** (`es6-set-create-add.js`) - Native ES6
      Set usage demonstration with automatic duplicate handling and simple add()
      method, showcasing ES6 Set simplicity compared to custom ES5
      implementation with 100% test coverage
- [x] **Remove items from a set in ES6** (`remove-items-from-set.js`) - ES6 Set
      delete() method demonstration with preserved skeleton compliance, creates
      a Set with values [1,2,3,4,5] and removes 2 and 5 to return [1,3,4] with
      100% test coverage
- [x] **Use .has and .size on an ES6 Set** (`use-has-and-size-on-set.js`) -
      Demonstrates native ES6 Set methods for value checking and size retrieval
      using .has() for O(1) value existence checking and .size property for
      instant size retrieval with 100% test coverage
- [x] **Use Spread and Notes for ES5 Set() Integration**
      (`use-spread-and-notes-for-es5-set-integration.js`) - Demonstrates ES6
      spread operator to convert Set objects to arrays with educational
      implementation showing simple `[...set]` syntax for O(n) Set to Array
      conversion with 100% test coverage
- [x] **Create a Map Data Structure** (`create-map-data-structure.js`) - Custom
      Map implementation using JavaScript objects as underlying storage,
      provides key-value pair operations with O(1) access time, converts values
      to strings in array format as per FreeCodeCamp specifications with 100%
      test coverage
- [x] **Create an ES6 JavaScript Map** (`create-es6-javascript-map.js`) - Native
      ES6 Map implementation demonstrating built-in Map object functionality,
      maintains insertion order, supports any key type (objects, primitives,
      functions), provides O(1) operations for get/set/has/delete with 100% test
      coverage and comprehensive educational examples
- [x] **Create a Hash Table** (`create-hash-table.js`) - Custom hash table
      implementation with collision handling using separate chaining, provides
      O(1) average time complexity for add/lookup/remove operations, preserves
      FreeCodeCamp skeleton structure with educational compliance and 100% test
      coverage
- [x] **Work with Nodes in a Linked List**
      (`work-with-nodes-in-a-linked-list.js`) - Fundamental linked list node
      operations with manual node creation and linking, demonstrates basic node
      structure with element and next properties, forms sequential chains
      through reference management with 100% test coverage
- [x] **Create a Linked List Class** (`linked-list-class.js`) - Singly linked
      list implementation with basic add functionality, preserves FreeCodeCamp
      skeleton structure with closure-based private variables, supports O(n)
      tail insertion with proper node chaining and 100% test coverage
- [x] **Remove Elements from a Linked List**
      (`remove-elements-from-a-linked-list.js`) - Implements remove method for
      singly linked list with comprehensive removal handling: head, middle,
      tail, and non-existent elements. Maintains proper node connections to
      prevent orphaned sections, accurate length tracking only for successful
      removals, O(n) time complexity with O(1) space complexity and 100% test
      coverage
- [x] **Search within a Linked List** (`search-within-a-linked-list.js`) -
      Implements isEmpty, indexOf, and elementAt methods for comprehensive list
      querying capabilities. Linear search algorithms O(n) for
      indexOf/elementAt, O(1) for isEmpty with robust edge case handling
      including floating point indices validation and 100% test coverage
- [x] **Remove Elements from a Linked List by Index**
      (`remove-elements-from-a-linked-list-by-index.js`) - Implements removeAt
      method using runner technique for precise index-based removal with
      comprehensive validation. Handles all removal scenarios: head, middle,
      tail, single element, and invalid indices. O(n) time complexity with
      proper node connection management and 100% test coverage
- [x] **Add Elements at a Specific Index in a Linked List**
      (`add-elements-at-specific-index-linked-list.js`) - Implements addAt
      method for inserting elements at specific positions using position-based
      traversal with currentIndex tracking. Handles edge cases including
      negative indices, out-of-bounds, head insertion, and maintains proper
      chain connections following conga line analogy. O(n) time complexity with
      100% test coverage and FreeCodeCamp compliance
- [x] **Create a Doubly Linked List** (`doubly-linked-list.js`) - Implements
      bidirectional linked list with add and remove methods supporting traversal
      in both directions. Features proper head/tail maintenance, comprehensive
      edge case handling (empty list, single element, first/last removal), and
      remove ALL occurrences strategy. O(1) add operations, O(n) remove
      operations with 100% test coverage and FreeCodeCamp compliance
- [x] **Reverse a Doubly Linked List** (`reverse-doubly-linked-list.js`) -
      Implements reverse method for bidirectional linked list with comprehensive
      pointer swapping and head/tail maintenance. Features forward and backward
      traversal validation, O(n) time complexity with O(1) space complexity,
      maintains proper next/prev references, and 100% test coverage with
      FreeCodeCamp compliance
- [x] **Add a New Element to a Binary Search Tree**
      (`add-new-element-binary-search-tree.js`) - Implements recursive insertion
      algorithm maintaining BST invariant (left ≤ parent, right ≥ parent) with
      comprehensive duplicate handling returning null. O(log n) average case,
      O(n) worst case time complexity with educational compliance preserving
      exact FreeCodeCamp skeleton structure and 100% test coverage
- [x] **Find the Minimum and Maximum Value in a Binary Search Tree**
      (`bst-find-min-max.js`) - Implements efficient findMin/findMax methods
      using iterative traversal leveraging BST property (leftmost = min,
      rightmost = max). O(h) time complexity where h is height, O(1) space
      complexity, returns null for empty tree, maintains educational compliance
      with exact skeleton preservation and 100% test coverage

### 🔄 Pending Implementation (20/46)

#### Queue Data Structures

✅ All Queue structures completed!

#### Set Data Structures

- [x] **Create a Set Class** - ✅ Completed with type-safe element storage
- [x] **Perform a Union on Two Sets** - ✅ Completed with 100% test coverage
- [x] **Perform an Intersection on Two Sets of Data** - ✅ Completed with 100%
      test coverage and optimization
- [ ] Perform a Difference on Two Sets of Data
- [ ] Perform a Subset Check on Two Sets of Data
- [x] **Create and Add to Sets in ES6** - ✅ Completed with 100% test coverage
      and ES6 native API demonstration
- [x] **Remove items from a set in ES6** - ✅ Completed with 100% test coverage
      and ES6 Set.delete() method demonstration
- [x] **Use .has and .size on an ES6 Set** - ✅ Completed with 100% test
      coverage demonstrating ES6 Set native methods for value checking and size
      retrieval
- [x] **Use Spread and Notes for ES5 Set() Integration** - ✅ Completed with
      100% test coverage demonstrating ES6 spread operator for Set to Array
      conversion

#### Map and Hash Data Structures

- [x] **Create a Map Data Structure** - ✅ Completed with 100% test coverage and
      educational compliance
- [x] **Create an ES6 JavaScript Map** - ✅ Completed with 100% test coverage
      and native ES6 Map demonstration
- [x] **Create a Hash Table** - ✅ Completed with 100% test coverage and
      collision handling via separate chaining

#### Linked List Data Structures

- [x] **Work with Nodes in a Linked List** - ✅ Completed with 100% test
      coverage and fundamental node operations demonstration
- [x] **Create a Linked List Class** - ✅ Completed with 100% test coverage and
      basic add functionality with educational compliance
- [x] **Remove Elements from a Linked List** - ✅ Completed with 100% test
      coverage and comprehensive removal handling (head, middle, tail,
      non-existent)
- [x] **Search within a Linked List** - ✅ Completed with 100% test coverage
      implementing isEmpty, indexOf, and elementAt methods with robust edge case
      handling
- [x] **Remove Elements from a Linked List by Index** - ✅ Completed with 100%
      test coverage implementing removeAt method using runner technique with
      comprehensive validation
- [x] **Add Elements at a Specific Index in a Linked List** - ✅ Completed with
      100% test coverage implementing addAt method for position-based insertion
      with educational compliance and conga line analogy
- [x] **Create a Doubly Linked List** - ✅ Completed with 100% test coverage
      implementing bidirectional linked list with add/remove methods and proper
      head/tail maintenance
- [x] **Reverse a Doubly Linked List** - ✅ Completed with 100% test coverage
      implementing reverse method with comprehensive pointer swapping and
      head/tail maintenance

#### Binary Tree Data Structures

- [x] **Add a New Element to a Binary Search Tree** - ✅ Completed with 100%
      test coverage implementing recursive insertion algorithm maintaining BST
      invariant with comprehensive duplicate handling
- [x] **Find the Minimum and Maximum Value in a Binary Search Tree** - ✅
      Completed with 100% test coverage implementing efficient iterative
      traversal leveraging BST property for O(h) time and O(1) space complexity
- [ ] Check if an Element is Present in a Binary Search Tree
- [ ] Check if Tree is Binary Search Tree
- [ ] Find the Minimum and Maximum Height of a Binary Search Tree
- [ ] Use Depth First Search in a Binary Search Tree
- [ ] Use Breadth First Search in a Binary Search Tree
- [ ] Delete a Leaf Node in a Binary Search Tree
- [ ] Delete a Node with One Child in a Binary Search Tree
- [ ] Delete a Node with Two Children in a Binary Search Tree
- [ ] Invert a Binary Tree

#### Advanced Tree Data Structures

- [ ] Create a Trie Search Tree

#### Heap Data Structures

- [ ] Insert an Element into a Max Heap
- [ ] Remove an Element from a Max Heap
- [ ] Implement Heap Sort with a Min Heap

#### Graph Data Structures

- [ ] Adjacency List
- [ ] Adjacency Matrix
- [ ] Incidence Matrix
- [ ] Breadth-First Search
- [ ] Depth-First Search

## Implementation Standards

- **TDD Methodology**: Tests written before implementation
- **Complete Coverage**: >= 90% test coverage for each structure
- **Performance**: Optimal time complexity for each operation
- **Documentation**: Comprehensive JSDoc with examples and complexity analysis
- **Edge Cases**: Robust handling of empty states and boundary conditions
