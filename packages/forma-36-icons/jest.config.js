module.exports = {
  globalSetup: '<rootDir>/src/test/config/globalSetup.js',
  setupFilesAfterEnv: ['<rootDir>/src/test/config/tests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/dist-storybook/',
    '<rootDir>/tools/',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.css': 'identity-obj-proxy',
  },
};