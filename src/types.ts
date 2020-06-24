export type Dict<T> = {
  [s: string]: T;
};

export type Canvas = {
  name: string;
  nodes: Dict<NodeModel>;
};

export type NodeModel = {
  id: string;
  name: string;
  ports: Dict<Port>;
};

export type Port = {
  id: string;
  name: string;
  type: string;
};
