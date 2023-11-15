/** Options for CLI */
export type Options = {
  args?: string[] | undefined;
  config?: string | undefined;
  pwd?: string | undefined;
};

/**** Utility types ****/

/** Extract values from object */
export type ObjectValue<T> = T[keyof T];

/** Extract keys from object */
export type ObjectKey<T> = keyof T;
