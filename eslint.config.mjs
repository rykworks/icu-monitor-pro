import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    react: true,
    typescript: true,
    formatters: true,
    jsonc: false,
    yaml: false,
    gitignore: true,
    ignores: [
      '**/fixtures',
      '**/dist',
      '**/node_modules',
      '**/build',
      '**/coverage',
      '**/logs',
      '**/temp',
      '**/cache',
      '**/tmp',
      '**/dist-ssr',
    ],
    stylistic: {
      arrowParens: 'avoid',
      bracketSpacing: true,
      bracketSameLine: false,
      printWidth: 100,
      proseWrap: 'preserve',
      quoteProps: 'as-needed',
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'es5',
      useTabs: false,
    },
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'perfectionist/sort-imports': [
        'error',
        {
          tsconfig: {
            rootDir: '.',
          },
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/modules/*/*'],
              message: 'Architecture error: import the module only through its Public API (index.ts). Deep imports inside the module are prohibited.',
            },
            {
              group: ['@modules/*/*'],
              message: 'Architecture error: import the module only through its Public API (index.ts).',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
