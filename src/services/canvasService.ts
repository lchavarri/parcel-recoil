import { DBCanvas, NodeModel, Dict, Canvas, Port, DBNode } from "../types";

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
): [Canvas, Dict<NodeModel>, Dict<Port>] => {
  const canvas: Canvas = { ...dbCanvas, nodes: {} };
  const nodes: Dict<NodeModel> = {};
  const ports: Dict<Port> = {};

  for (let nodeId of Object.keys(dbCanvas.nodes)) {
    canvas.nodes[nodeId] = nodeId;

    const dbNode = dbCanvas.nodes[nodeId];
    nodes[nodeId] = { ...dbNode, ports: {} };

    for (let portId of Object.keys(dbNode.ports)) {
      nodes[nodeId].ports[portId] = portId;

      ports[portId] = { ...dbNode.ports[portId] };
    }
  }

  return [canvas, nodes, ports];
};
