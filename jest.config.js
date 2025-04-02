/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom', // Use jsdom for testing React components
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$':'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: for setup files
};

export default config