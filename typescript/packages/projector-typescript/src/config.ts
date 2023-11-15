import path from 'path';
import { Opts } from './opts';
import type { ObjectKey, ObjectValue, Options } from './types';

export const OPERATIONS = {
  ADD: 'add',
  PRINT: 'print',
  REMOVE: 'remove',
} as const;

export type Operation = ObjectKey<typeof OPERATIONS>;

export type OperationValue = ObjectValue<typeof OPERATIONS>;

export type Config = Options & {
  operation?: OperationValue | undefined;
};

const getPwd = (opts: Opts): string => {
  return opts.pwd || process.cwd();
};

const getConfig = (opts: Opts): undefined | string => {
  if (opts.config) {
    return opts.config;
  }

  // home directory for user
  const home = process.env['HOME'];
  const location = process.env['XDG_CONFIG_HOME'] || process.env['HOME'];

  if (!location || !home) {
    throw new Error('Could not find config location');
  }

  if (typeof location === 'string' && location === home) {
    return path.join(location, 'projector.json');
  } else {
    return path.join(location, 'projector', 'projector.json');
  }
};

const getOperation = (opts: Opts): Config['operation'] => {
  if (!opts.args || opts.args.length === 0) {
    return OPERATIONS.PRINT;
  }

  if (opts.args[0] === OPERATIONS.ADD) {
    return OPERATIONS.ADD;
  }

  if (opts.args[0] === OPERATIONS.REMOVE) {
    return OPERATIONS.REMOVE;
  }

  return OPERATIONS.PRINT;
};

const getArgs = (opts: Opts): Config['args'] => {
  if (!opts.args || opts.args.length === 0) {
    return [];
  }

  const operation = getOperation(opts);
  if (operation === OPERATIONS.PRINT) {
    if (opts.args.length > 1) {
      throw new Error(`Too many arguments: expected 0 or 1 but got ${opts.args.length}`);
    }
    return opts.args;
  }
  if (operation === OPERATIONS.ADD) {
    if (opts.args.length !== 3) {
      throw new Error(`Expected 2 arguments but got ${opts.args.length - 1}`);
    }
    return opts.args.slice(1);
  }

  if (operation === OPERATIONS.REMOVE) {
    if (opts.args.length !== 2) {
      throw new Error(`Expected 1 argument but got ${opts.args.length - 1}`);
    }
    return opts.args.slice(1);
  }

  throw new Error(`Unknown operation ${operation}`);
};

export const config = (opts: Opts): Config => {
  return {
    args: getArgs(opts),
    config: getConfig(opts),
    pwd: getPwd(opts),
    operation: getOperation(opts),
  };
};
