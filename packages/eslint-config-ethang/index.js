module.exports = {
  parserOptions: {
    'project': './packages/tsconfig/base.json',
  },
  extends: [
    'plugin:unicorn/recommended',
    'xo',
    'xo-space',
    'xo-typescript/space',
    'xo-react/space',
    'plugin:typescript-sort-keys/recommended',
    'plugin:jsx-a11y/strict',
    'prettier'
  ],
  plugins: [
    'simple-import-sort',
    'sort-keys-fix',
    'unused-imports',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error'
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'arrow-body-style': ['error', 'always'],
    'capitalized-comments': 'off',
    'max-params': 'error',
    'new-cap': 'off',
    'no-console': ['error', {
      'allow': ['debug', 'info', 'warn', 'error']
    }],
    'prettier/prettier': [
      'error',
      {
        'arrowParens': 'avoid',
        'trailingComma': 'all',
        'singleQuote': true,
        'printWidth': 80,
        'endOfLine': 'crlf'
      }
    ],
    "react/jsx-no-bind": "error",
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "shorthandFirst": true,
      "multiline": "last"
    }],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/no-array-index-key": "error",
    "react/no-unknown-property": "warn",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ]
  },
}
