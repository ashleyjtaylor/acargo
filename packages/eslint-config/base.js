import stylistic from '@stylistic/eslint-plugin'
import tsEsLintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const stylisticRules = {
  '@stylistic/semi': ['error', 'never'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: 'directive',
      next: '*'
    },
    {
      blankLine: 'always',
      prev: 'function',
      next: 'function'
    },
    {
      blankLine: 'always',
      prev: 'block-like',
      next: 'block-like'
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'export'
    },
    {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['const', 'let', 'var']
    },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*'
    },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var']
    }
  ]
}

/** @type {import("eslint").FlatConfig[]} */
export const eslintBaseConfig = [
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/.turbo/**',
      '**/generated/**',
      '**/playwright-report/**',
      '**/test-results/**',
      '**/node_modules/**',
      '**/.tsbuildinfo',
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/next-env.d.ts'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      ...stylisticRules
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsEsLintPlugin
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    },
    rules: {
      ...stylisticRules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  }
]
