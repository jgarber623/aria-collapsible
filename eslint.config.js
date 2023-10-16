import config from '@jgarber/eslint-config';

export default [
  {
    ignores: ['dist']
  },
  ...config,
  {
    files: ['src/*.js'],
    languageOptions: {
      globals: {
        document: 'readonly'
      }
    }
  }
];
