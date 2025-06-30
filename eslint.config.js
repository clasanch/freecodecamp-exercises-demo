import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

export default [
  // Base JavaScript configuration
  js.configs.recommended,

  // JavaScript files configuration
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'writable',
        globalThis: 'readonly',
      },
    },
    rules: {
      // Code quality rules
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Style rules (that don't conflict with Prettier)
      'max-len': [
        'error',
        {
          code: 100,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'max-lines-per-function': ['warn', { max: 50, skipComments: true }],
      complexity: ['warn', 10],

      // Best practices
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      strict: ['error', 'never'], // Not needed with ES modules

      // Pure functions and immutability
      'no-param-reassign': 'warn',
      'prefer-arrow-callback': 'error',
      'arrow-function-even-when-unnecessary': 'off',
    },
  },

  // Test files specific configuration
  {
    files: ['**/*.test.{js,mjs}', '**/tests/**/*.{js,mjs}'],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
        testUtils: 'readonly',
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      'no-console': 'off',
      'max-lines-per-function': 'off', // Tests can be longer
      'jest/expect-expect': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },

  // Configuration files settings
  {
    files: ['*.config.{js,mjs}', 'scripts/**/*.{js,mjs}'],
    rules: {
      'no-console': 'off', // Allow console.log in scripts
    },
  },

  // Prettier must be last to override formatting rules
  prettier,
];
