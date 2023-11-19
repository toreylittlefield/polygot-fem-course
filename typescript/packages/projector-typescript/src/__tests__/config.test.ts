import { config, OPERATIONS } from '../config';

test('simple print all', () => {
  const configuration = config({});
  expect(configuration.operation).toEqual(OPERATIONS.PRINT);
  expect(configuration.args).toEqual([]);
});

test('print key', () => {
  const configuration = config({ args: ['foo'] });
  expect(configuration.operation).toEqual(OPERATIONS.PRINT);
  expect(configuration.args).toEqual(['foo']);
});

test('add key', () => {
  const configuration = config({ args: ['add', 'foo', 'bar'] });
  expect(configuration.operation).toEqual(OPERATIONS.ADD);
  expect(configuration.args).toEqual(['foo', 'bar']);
});

test('remove key', () => {
  const configuration = config({ args: ['remove', 'foo'] });
  expect(configuration.operation).toEqual(OPERATIONS.REMOVE);
  expect(configuration.args).toEqual(['foo']);
});
