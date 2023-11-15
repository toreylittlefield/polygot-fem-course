import commandLineArgs from 'command-line-args';
import type { CommandLineOptions } from 'command-line-args';
import type { Options } from './types';

export type Opts = CommandLineOptions & Options;

export const getOpts = (): Opts => {
  return commandLineArgs([
    {
      defaultOption: true,
      multiple: true,
      name: 'args',
      type: String,
    },
    {
      alias: 'c',
      name: 'config',
      type: String,
    },
    {
      alias: 'p',
      name: 'pwd',
      type: String,
    },
  ]);
};
