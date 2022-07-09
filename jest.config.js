/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  moduleNameMapper: {
    '^~/(.*).svg$': '<rootDir>/tests/mocks/SvgMock.js', // mock importing svg files
    '^~/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jsdom',
};
