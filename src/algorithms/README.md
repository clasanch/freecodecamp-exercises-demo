# Algorithms

This folder contains the 10 basic FreeCodeCamp algorithms implemented with TDD
methodology and Clean Code principles.

## Progress: 10/10 Completed ✅

**PHASE 1 COMPLETED** - All basic algorithms have been implemented following
strict TDD methodology, maintaining 100% code coverage and adhering to
enterprise-level quality standards.

## ✅ Completed Algorithms (10/10)

### String and Array Manipulation

- [x] **Symmetric Difference Algorithm** (`symmetric-difference.js`) -
      Mathematical symmetric difference (△) operation on multiple sets, removing
      duplicates and returning elements present in exactly one set
- [x] **Inventory Update Algorithm** (`inventory-update.js`) - Compares and
      merges two 2D inventory arrays, updating quantities and adding new items
      in alphabetical order
- [x] **No Repeats Please Algorithm** (`no-repeats-please.js`) - Counts
      permutations of a string with no repeated consecutive letters using
      backtracking algorithm
- [x] **Pairwise Algorithm** (`pairwise.js`) - Finds element pairs that sum to
      target value and returns sum of their indices, prioritizing lower indices

### Sorting Algorithms

- [x] **Bubble Sort Algorithm** (`bubble-sort.js`) - O(n²) comparison-based sort
      with early termination optimization, demonstrates basic sorting principles
- [x] **Selection Sort Algorithm** (`selection-sort.js`) - O(n²) in-place
      sorting by repeatedly finding minimum element and placing it at the
      beginning
- [x] **Insertion Sort Algorithm** (`insertion-sort.js`) - O(n²) adaptive
      sorting algorithm that builds sorted array one element at a time
- [x] **Quick Sort Algorithm** (`quick-sort.js`) - O(n log n) divide-and-conquer
      sorting with pivot partitioning strategy
- [x] **Merge Sort Algorithm** (`merge-sort.js`) - O(n log n) stable
      divide-and-conquer sorting with guaranteed performance

### Search Algorithms

- [x] **Binary Search Algorithm** (`binary-search.js`) - O(log n) search for
      sorted arrays with path tracking, returns middle values examined during
      search

## Implementation Standards

### Test-Driven Development (TDD)

- **Red-Green-Refactor cycle** applied to every algorithm
- **100% code coverage** maintained across all implementations
- **Comprehensive test suites** covering edge cases, performance scenarios, and
  FreeCodeCamp requirements
- **Total tests**: 160+ test cases across all algorithms

### Code Quality Standards

- **Functions ≤ 50 lines** (enforced by ESLint)
- **Cyclomatic complexity ≤ 10** for maintainability
- **JSDoc documentation** with complexity analysis and examples
- **Immutable implementations** - original arrays preserved
- **Helper functions** for separation of concerns

### Performance Characteristics

| Algorithm            | Time Complexity | Space Complexity | Best Use Case                                |
| -------------------- | --------------- | ---------------- | -------------------------------------------- |
| Symmetric Difference | O(n)            | O(n)             | Set operations, data comparison              |
| Inventory Update     | O(n log n)      | O(n)             | Merging sorted data, inventory management    |
| No Repeats Please    | O(n!)           | O(n)             | Combinatorial problems, permutation counting |
| Pairwise             | O(n²)           | O(n)             | Two-sum variants, index tracking             |
| Bubble Sort          | O(n²)           | O(1)             | Educational purposes, small datasets         |
| Selection Sort       | O(n²)           | O(1)             | Memory-constrained environments              |
| Insertion Sort       | O(n²)           | O(1)             | Small datasets, nearly sorted data           |
| Quick Sort           | O(n log n)      | O(log n)         | General-purpose sorting, large datasets      |
| Merge Sort           | O(n log n)      | O(n)             | Stable sorting, guaranteed performance       |
| Binary Search        | O(log n)        | O(1)             | Searching sorted data, large datasets        |

## File Structure and Conventions

### Naming Convention

All algorithm files follow the pattern: `algorithm-name.js`

- Descriptive kebab-case naming
- Corresponding test files: `algorithm-name.test.js`
- Functions exported as default exports

### Code Organization

```
src/algorithms/
├── algorithm-name.js          # Implementation with JSDoc
└── README.md                  # This documentation

tests/algorithms/
└── algorithm-name.test.js     # Comprehensive test suite
```

### Documentation Standards

Each algorithm includes:

- **Algorithm description** with mathematical background
- **Time/space complexity analysis**
- **Implementation approach** explanation
- **Usage examples** with expected outputs
- **Edge cases** and constraint handling

## Quality Metrics

### Test Coverage

- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

### Code Quality

- **ESLint**: 0 errors/warnings
- **Prettier**: Consistent formatting
- **Pre-commit hooks**: Automated quality gates
- **CI/CD pipeline**: Full validation on every change

## Testing Approach

### Test Categories per Algorithm

1. **Function validation** - Ensures function exists and is callable
2. **Basic functionality** - Core algorithm behavior verification
3. **Edge cases** - Empty arrays, single elements, boundary conditions
4. **Data integrity** - Original array preservation, type consistency
5. **Implementation constraints** - FreeCodeCamp-specific requirements
6. **Performance validation** - Large dataset handling

### Constraint Testing

- **No built-in .sort() usage** where prohibited
- **Immutability enforcement** - original arrays untouched
- **FreeCodeCamp compliance** - exact specification adherence
- **Algorithm-specific validations** - e.g., Math.floor() usage in binary search

## Development Workflow

### TDD Cycle Applied

1. **🔴 Red**: Write failing test defining expected behavior
2. **🟢 Green**: Implement minimal code to pass test
3. **🔵 Refactor**: Optimize while maintaining passing tests

### Git Workflow (Trunk-Based Development)

1. Feature branch creation: `feature/algorithm-name-implementation`
2. TDD implementation with frequent commits
3. Quality validation: lint, format, test coverage
4. Pull request with comprehensive documentation
5. Squash and merge with cleanup

## Lessons Learned

### Technical Insights

- **TDD accelerates development** by eliminating extensive debugging
- **Helper functions improve maintainability** and code reuse
- **Set/Map optimizations** significantly improve performance over naive array
  approaches
- **Early termination conditions** can optimize worst-case scenarios

### Process Improvements

- **Trunk-based development** with short-lived branches increases velocity
- **Quality gates automation** prevents regression and maintains standards
- **Comprehensive documentation** facilitates knowledge transfer
- **Pattern consistency** across algorithms reduces cognitive load

## Next Phase

**PHASE 1 COMPLETED** ✅ - Ready to proceed to:

- **PHASE 2**: Data Structures Implementation (46 structures)
- **PHASE 3**: Complete Projects (20 projects)

---

_All algorithms implemented following enterprise-level standards with strict TDD
methodology and comprehensive testing._
