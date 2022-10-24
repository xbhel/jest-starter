import { AddOperation } from 'packages/ts/src/operation';

// wirtten unit tests for ts type
const check: AddOperation extends { add: unknown } ? true : false = true;

export { check };
