/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  coverageDirectory: '../../coverage/libs/react-components',
  displayName: 'react-components',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest'],
  },
};
