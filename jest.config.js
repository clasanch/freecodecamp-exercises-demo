export default {
  // Test environment
  testEnvironment: 'node',

  // ES modules configuration
  preset: null,
  transform: {},

  // Test file patterns
  testMatch: ['**/tests/**/*.test.{js,mjs,ts}', '**/src/**/*.test.{js,mjs,ts}'],

  // Code coverage collection
  collectCoverageFrom: [
    'src/**/*.{js,mjs,ts}',
    '!src/**/*.test.{js,mjs,ts}',
    '!src/**/__tests__/**',
    '!src/index.js', // Main entry file
  ],

  // Coverage thresholds - activated to prevent quality regression
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },

  // Coverage reports
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],

  // Coverage output directory
  coverageDirectory: 'coverage',

  // Verbose output configuration
  verbose: true,

  // Clear mocks between tests
  clearMocks: true,

  // Transform configuration (if we need TypeScript in the future)
  // transform: {},

  // Global test setup
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
