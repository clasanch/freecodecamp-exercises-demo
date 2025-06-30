/**
 * No Repeats Please Algorithm
 *
 * Returns the number of total permutations of the provided string
 * that don't have repeated consecutive letters. Uses backtracking
 * to efficiently count valid permutations without generating all.
 *
 * Mathematical approach:
 * - For each position, try each unused character
 * - Skip if it creates consecutive duplicates
 * - Count valid complete permutations
 *
 * Time Complexity: O(n! * n) in worst case, optimized by pruning
 * Space Complexity: O(n) for recursion stack and used array
 *
 * @param {string} str - Input string with unique characters
 * @returns {number} Number of valid permutations without consecutive repeats
 *
 * @example
 * permAlone('aab') // 2 (aba, baa - valid; aab, aba, baa, baa - all permutations)
 * permAlone('aaa') // 0 (no valid permutations possible)
 * permAlone('abcd') // 24 (all 4! permutations are valid)
 */
function permAlone(str) {
  // Handle edge cases
  if (str.length === 0) return 1;
  if (str.length === 1) return 1;

  const chars = str.split('');
  const used = new Array(chars.length).fill(false);
  const permutation = new Array(chars.length);
  let count = 0;

  /**
   * Optimized recursive backtracking using array instead of string concatenation
   * @param {number} level - Current position in permutation array
   */
  function countValidPermutations(level) {
    // Base case: complete permutation reached
    if (level === chars.length) {
      count++;
      return;
    }

    // Try each unused character at current position
    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;

      // Skip if it would create consecutive duplicate
      if (level > 0 && chars[i] === permutation[level - 1]) {
        continue;
      }

      // Use this character
      used[i] = true;
      permutation[level] = chars[i];
      countValidPermutations(level + 1);
      used[i] = false; // Backtrack
    }
  }

  countValidPermutations(0);
  return count;
}

export default permAlone;
