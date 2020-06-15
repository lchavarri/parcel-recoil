import { DBCanvas, NodeModel, Dict, Canvas, Port, DBNode } from "../types";
import { extendDict } from "./utils";

const mockDelay = (millis: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};

export const fetchCanvas = async (): Promise<DBCanvas> => {
  await mockDelay(500);
  return {
    name: "Test Canvas",
    nodes: {
      1: {
        id: "1",
        name: "Node One",
        ports: {
          p1: {
            id: "p1",
            name: "Port One",
            type: "number",
          },
        },
      },
      2: {
        id: "2",
        name: "Node Two",
        ports: {},
      },
    },
  };
};

export const createNode = async (): Promise<DBNode> => {
  await mockDelay(100);
  return {
    id: Math.ceil(Math.random() * 100).toString(),
    name: "New Node",
    ports: {
      p4: {
        id: "p4",
        name: "Port four",
        type: "string",
      },
    },
  };
};

export const createPort = async (): Promise<Port> => {
  await mockDelay(100);
  return {
    id: "p" + Math.ceil(Math.random() * 100),
    name: "New Port",
    type: "string",
  };
};

export const parseDBCanvas = (
  dbCanvas: DBCanvas
): [Canvas, Dict<NodeModel>, Dict<string[]>, Dict<Port>] => {
  let nodeDict: Dict<NodeModel> = {};
  let nodeRel: Dict<string[]> = {};
  let portDict: Dict<Port> = {};

  const { nodes, ...canvas } = dbCanvas;
  Object.values(nodes).forEach((dbNode: DBNode) => {
    const { ports, ...node } = dbNode;
    nodeDict[node.id] = node;
    nodeRel[node.id] = Object.keys(ports);
    portDict = extendDict(portDict, ports);
  });

  return [canvas, nodeDict, nodeRel, portDict];
};
