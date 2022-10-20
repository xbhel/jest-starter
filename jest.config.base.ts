import { JestConfigWithTsJest } from 'ts-jest';

export const baseConfig: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: ['**/tests/unit/*.(spec|test).[jt]s?(x)|**/__tests__/*.[jt]s?(x)'],
};
