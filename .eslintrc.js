module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'error',
    'react/jsx-max-props-per-line': [1, { 'maximum': 1, 'when': 'multiline' }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
