import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import next from 'eslint-plugin-next';

export default [
  js.configs.recommended,
  react.configs.recommended,
  next.configs.typescript,
  {
    ignores: ['build/'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    plugins: {
      react,
      prettier,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'all',
          jsxSingleQuote: true,
          bracketSpacing: true,
          endOfLine: 'auto',
        },
      ],
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-array-index-key': 'warn',
      'import/no-unresolved': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-debugger': 'warn',
      'no-unreachable': 'warn',
    },
  },
];
