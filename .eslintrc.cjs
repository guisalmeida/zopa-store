module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    'consistent-return': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
