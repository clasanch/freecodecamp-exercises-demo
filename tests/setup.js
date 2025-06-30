/**
 * Global configuration for Jest
 * Executed before each test file
 */

// Test timeout configuration (useful for complex algorithms)
// jest.setTimeout(10000); // Will be configured in individual tests if needed

// Global test helpers
global.testUtils = {
  /**
   * Generates a random array for testing
   * @param {number} size - Array size
   * @param {number} max - Maximum value
   * @returns {number[]}
   */
  generateRandomArray: (size = 10, max = 100) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
  },

  /**
   * Generates a random string for testing
   * @param {number} length - String length
   * @returns {string}
   */
  generateRandomString: (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  },

  /**
   * Measures function execution time
   * @param {Function} fn - Function to measure
   * @returns {Promise<{result: any, time: number}>}
   */
  measureExecutionTime: async fn => {
    const start = Date.now();
    const result = await fn();
    const end = Date.now();
    return {
      result,
      time: end - start,
    };
  },
};

// Snapshot testing configuration
// expect.extend({ // Will be configured when needed
/*
  toMatchPerformanceSnapshot(received, threshold = 100) {
    if (typeof received !== 'number') {
      return {
        message: () => 'Expected a number for performance testing',
        pass: false,
      };
    }

    const pass = received <= threshold;
    return {
      message: () =>
        pass
          ? `Expected ${received}ms to exceed ${threshold}ms`
          : `Expected ${received}ms to be less than or equal to ${threshold}ms`,
      pass,
    };
  },
*/
// });
