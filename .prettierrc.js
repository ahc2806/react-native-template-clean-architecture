/** @type {import('prettier').Config} */

module.exports = {
  arrowParens: 'always', // Always include parentheses in arrow functions (e.g., `(x) => x`)
  bracketSameLine: false, // Place the `>` in JSX tags on the same line as the last attribute
  bracketSpacing: true, // Add spaces inside objects (e.g., `{ foo: bar }`)
  embeddedLanguageFormatting: 'auto', // Automatically formats embedded languages
  endOfLine: 'lf', // Use Unix-style line breaks (LF)
  jsxSingleQuote: false, // Use single quotes in JSX
  jsxBracketSpacing: true, // Add spaces inside JSX objects
  printWidth: 100, // Maximum line length before breaking
  proseWrap: 'preserve', // Preserves the original formatting of text in Markdown
  semi: true, // Use semicolons at the end of statements
  singleQuote: true, // Use Single quotes instead of double quotes
  tabWidth: 2, // Use 2 spaces per tab
  trailingComma: 'all', // Add commas to the end of lists and multi-line objects
};
