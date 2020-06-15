export type Dict<T> = {
  [s: string]: T;
};

export type DBCanvas = {
  name: string;
  nodes: Dict<DBNode>;
};

export type DBNode = {
  id: string;
  name: string;
  ports: Dict<Port>;
};

export type Canvas = {
  name: string;
  nodes?: Dict<string>;
};

export type NodeModel = {
  id: string;
  name: string;
  ports?: Dict<string>;
};

export type Port = {
  id: string;
  name: string;
  type: string;
};
