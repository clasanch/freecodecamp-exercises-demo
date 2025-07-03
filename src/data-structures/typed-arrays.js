/**
 * Typed Arrays - FreeCodeCamp Exercise
 *
 * Creates a buffer and typed array view for high-performance memory management.
 * This exercise demonstrates the use of ArrayBuffer and Int32Array for
 * precise memory allocation and typed array operations.
 *
 * Requirements:
 * - Create a buffer that is 64 bytes large
 * - Create an Int32Array view that is 64 bytes large and 16 elements long
 *
 * @example
 * // FreeCodeCamp expects these as global variables
 * buffer.byteLength // 64 bytes
 * i32View.length // 16 elements
 * i32View[0] = 42; // Set first element
 */

// Create a buffer that is 64 bytes large
const buffer = new ArrayBuffer(64);

// Create an Int32Array view of the buffer
// Int32Array uses 4 bytes per element, so 64 bytes / 4 = 16 elements
const i32View = new Int32Array(buffer);

// Export function for testing purposes
function typedArrays() {
  return {
    buffer: buffer,
    i32View: i32View,
  };
}

export default typedArrays;
