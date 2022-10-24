type Operation<T> = {
  add: (val: T) => boolean;
  update: (val: T) => boolean;
  remove: (key: number | string) => boolean;
  get: (key: number | string) => T;
};

export type AddOperation = Pick<Operation<T>, 'add'>;
