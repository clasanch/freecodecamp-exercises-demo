# Backtracking Algorithm Visualization

This interactive demo visualizes the step-by-step execution of the **No Repeats
Please** algorithm implemented in `/src/algorithms/no-repeats-please.js`.

## What it demonstrates

The visualization shows how the backtracking algorithm:

1. Explores each possible character at each position
2. Skips characters that would create consecutive duplicates
3. Backtracks when reaching dead ends
4. Counts valid complete permutations

## Algorithm Overview

The **No Repeats Please** problem asks: "Return the number of total permutations
of the provided string that don't have repeated consecutive letters."

### Example

For input `"aab"`:

- Total permutations: `aab`, `aba`, `baa` (3 unique arrangements of 3! = 6
  total)
- Valid permutations: `aba`, `baa` (2 without consecutive repeats)
- Result: `2`

## Technical Implementation

### Key Data Structures

- **`chars[]`**: Original characters from input string
- **`used[]`**: Boolean flags tracking which characters are currently used
- **`permutation[]`**: Current permutation being built
- **`count`**: Running total of valid permutations found

### Algorithm States

- **Start**: Beginning algorithm execution
- **Exploring**: Examining characters at current recursion level
- **Using**: Placing a character in current position
- **Skip (Used)**: Character already used in current path
- **Skip (Consecutive)**: Character would create consecutive duplicate
- **Backtrack**: Undoing choice and trying next option
- **Found**: Complete valid permutation discovered
- **Complete**: Algorithm finished, final count available

## Features

### Interactive Controls

- **Input String**: Test with different strings (max 4 characters for
  performance)
- **Animation Speed**: Adjust visualization speed (0.2s to 2s per step)
- **Playback Controls**: Play/pause, step forward/backward, reset

### Visual Elements

- **Data Structure Views**: Real-time display of arrays and their states
- **Current Path**: Shows the permutation being built
- **Status Indicators**: Color-coded algorithm states
- **Progress Tracking**: Step counter and progress bar

## Educational Value

This visualization helps understand:

- **Backtracking**: How the algorithm explores and abandons paths
- **Pruning**: Early elimination of invalid paths improves efficiency
- **State Management**: Tracking usage and position in recursive algorithms
- **Complexity**: Why certain inputs take longer to process

## Performance Considerations

- Input limited to 4 characters to maintain interactive performance
- Algorithm complexity is O(n! × n) in worst case
- Visualization adds overhead for educational clarity
- Production algorithm in `/src/algorithms/` is optimized for speed

## Connection to Source Code

This visualization directly mirrors the implementation in:

```
/src/algorithms/no-repeats-please.js
```

The step generation follows the exact same logic as the production algorithm,
with added state capture for visualization purposes.

## Usage in Learning

Perfect for:

- Understanding recursive backtracking algorithms
- Visualizing permutation generation
- Debugging algorithm logic
- Teaching algorithmic problem-solving techniques
- Demonstrating optimization through pruning
