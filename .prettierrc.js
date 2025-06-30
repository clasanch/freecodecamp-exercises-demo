export default {
  // Configuración básica
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Configuración específica para diferentes tipos de archivos
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        proseWrap: 'always',
      },
    },
    {
      files: '*.{js,mjs}',
      options: {
        // Configuración específica para JavaScript
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'lf',
      },
    },
  ],
};
