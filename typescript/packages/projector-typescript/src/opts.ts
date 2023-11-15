import commandLineArgs from 'command-line-args';
import type { CommandLineOptions } from 'command-line-args';

export type Opts = CommandLineOptions & {
  args?: string[];
  pwd?: string;
  config?: string;
};

export const getOpts = (): Opts => {
  return commandLineArgs([
    {
      name: 'args',
      defaultValue: true,
      type: String,
    },
    {
      name: 'config',
      alias: 'c',
      type: String,
    },
    {
      name: 'pwd',
      alias: 'p',
      type: String,
    },
  ]);
};
