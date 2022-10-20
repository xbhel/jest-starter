import { baseConfig } from '../../jest.config.base';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  ...baseConfig,
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
  },
};

export default config;
