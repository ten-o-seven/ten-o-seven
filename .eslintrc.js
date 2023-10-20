module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'max-len': ['error', {'code': 100}],
  },
};
