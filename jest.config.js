const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  // preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['lib', 'node_modules', 'tools'],
  // testRegex: '(/__specs__/.*|(\\.|/)(spec))\\.(jsx?|tsx?)$',
  testRegex: '(/__specs__/.*|(\\.|/)(spec))\\.(tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // map the baseDir for tests
  modulePaths: ['<rootDir>/src/'],
  verbose: true,
};
