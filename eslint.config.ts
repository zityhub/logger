import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: { ...globals.node, Intl: 'readonly' },
      parserOptions: {
        project: './tsconfig.eslint.json'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'none',
          singleQuote: true,
          printWidth: 120,
          semi: false,
          tabWidth: 2
        },
        {
          usePrettierrc: false
        }
      ],
      '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
      'no-console': 'error',
      'no-return-await': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': ['warn', { allowNullableString: true }]
    }
  },
  {
    files: ['**/*.test.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: { ...globals.node, Intl: 'readonly' }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/unbound-method': 'off'
    }
  }
]
