import { config, OPERATIONS } from '../config';

test('simple print all', () => {
  const configuration = config({});
  expect(configuration.operation).toEqual(OPERATIONS.PRINT);
  expect(configuration.args).toEqual([]);
});
