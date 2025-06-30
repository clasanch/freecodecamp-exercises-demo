import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

export default [
  // Configuración base de JavaScript
  js.configs.recommended,

  // Configuración para archivos JavaScript
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
      // Reglas de calidad de código
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Reglas de estilo (que no conflicten con Prettier)
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

      // Mejores prácticas
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      strict: ['error', 'never'], // No necesario con ES modules

      // Funciones puras y inmutabilidad
      'no-param-reassign': 'warn',
      'prefer-arrow-callback': 'error',
      'arrow-function-even-when-unnecessary': 'off',
    },
  },

  // Configuración específica para archivos de test
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
      'max-lines-per-function': 'off', // Los tests pueden ser más largos
      'jest/expect-expect': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },

  // Configuración para archivos de configuración
  {
    files: ['*.config.{js,mjs}', 'scripts/**/*.{js,mjs}'],
    rules: {
      'no-console': 'off', // Permitir console.log en scripts
    },
  },

  // Prettier debe ir al final para sobrescribir reglas de formato
  prettier,
];
