const config = require('@jgarber/eslint-config');

module.exports = [
  ...config,
  {
    ignores: ['dist/*.?(m)js']
  }
];
