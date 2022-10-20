import { JestConfigWithTsJest } from 'ts-jest';
import { baseConfig } from './jest.config.base';

const config: JestConfigWithTsJest = {
  ...baseConfig,
  testEnvironment: 'node',
  projects: ['<rootDir>/packages/*'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{ts,tsx,js,jsx,vue}',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue', 'json'],
};

export default config;
