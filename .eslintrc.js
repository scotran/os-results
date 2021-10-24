module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-lin': 'off',
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    allowForLoopAfterthoughts: 0,
    semi: 0,
    camelcase: 'off',
  },
};
