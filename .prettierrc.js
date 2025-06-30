export default {
  // Basic configuration
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Specific configuration for different file types
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
        // JavaScript specific configuration
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'lf',
      },
    },
  ],
};
