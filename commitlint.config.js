module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0, 'always', ['lower-case', 'pascal-case', 'camel-case']],
    'subject-case': [0, 'always', ['lower-case', 'sentence-case']],
  },
};
