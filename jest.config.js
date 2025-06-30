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

  // Coverage thresholds (will be activated when we have tests)
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },

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
