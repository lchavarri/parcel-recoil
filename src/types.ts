export type Dictionary<T> = {
  [s: string]: T;
};

export type DBCanvas = {
  name: string;
  nodes: Dictionary<DBNode>;
};

export type DBNode = {
  id: string;
  name: string;
  ports: Dictionary<Port>;
};

export type Canvas = {
  name: string;
  ports?: Dictionary<string>;
  nodes?: Dictionary<string>;
};

export type NodeModel = {
  id: string;
  name: string;
  ports?: Dictionary<string>;
};

export type Port = {
  id: string;
  name: string;
  type: string;
};
