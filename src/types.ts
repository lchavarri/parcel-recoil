export type Dictionary<T> = {
  [s: string]: T;
};

export type Canvas = {
  ports: Dictionary<object>;
  nodes: Dictionary<object>;
};
