module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ['header-case']: [2, 'never', 'pascal-case'],
    ['subject-case']: [2, 'never', 'pascal-case'],
  },
}
