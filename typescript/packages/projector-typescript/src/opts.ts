import commandLineArgs from 'command-line-args';
import type { CommandLineOptions } from 'command-line-args';

export type Opts = CommandLineOptions & {
  args?: string[];
  config?: string;
  pwd?: string;
};

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
