module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest/jest.setup.ts'],
  moduleNameMapper: { '^@app(.*)$': '<rootDir>/src$1' },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/tests/cypress'
  ]
}
