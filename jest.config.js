export default {
  // Entorno de pruebas
  testEnvironment: 'node',

  // Configuración para ES modules
  preset: null,
  transform: {},

  // Tipos de archivos de prueba
  testMatch: ['**/tests/**/*.test.{js,mjs,ts}', '**/src/**/*.test.{js,mjs,ts}'],

  // Cobertura de código
  collectCoverageFrom: [
    'src/**/*.{js,mjs,ts}',
    '!src/**/*.test.{js,mjs,ts}',
    '!src/**/__tests__/**',
    '!src/index.js', // Archivo principal de entrada
  ],

  // Umbrales de cobertura (se activarán cuando tengamos tests)
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // },

  // Reportes de cobertura
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],

  // Directorio de salida de cobertura
  coverageDirectory: 'coverage',

  // Configuración para verbose output
  verbose: true,

  // Limpiar mocks entre tests
  clearMocks: true,

  // Transform configuration (si necesitamos TypeScript en el futuro)
  // transform: {},

  // Setup de pruebas globales
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
