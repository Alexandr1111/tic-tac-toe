module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
