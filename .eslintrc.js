module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
  },
  overrides: [
    {
      files: ['__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
