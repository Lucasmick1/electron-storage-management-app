module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/function-component-definition': 'off',
    'no-empty-pattern': 'warn',
    'react/no-unused-prop-types': 'off',
    'no-use-before-define': 'off',
    'default-case': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    eqeqeq: 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'jsx-a11y/aria-role': 'error',
    'max-lines': ['warn', { max: 300, skipComments: true }],
    'no-console': 'warn',
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-unreachable': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    'require-yield': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'default', format: ['camelCase'] },
      { selector: 'variableLike', format: ['camelCase', 'PascalCase'] },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      { selector: 'memberLike', format: ['camelCase'] },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enum', format: ['UPPER_CASE'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase', 'snake_case'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
