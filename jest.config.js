/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  moduleNameMapper: {
    '^~/(.*).svg$': '<rootDir>/mocks/SvgMock.js', // mock importing svg files
    '^~/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jsdom',
};
