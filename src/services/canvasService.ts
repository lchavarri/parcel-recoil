import {
  DBCanvas,
  NodeModel,
  Dictionary,
  Canvas,
  Port,
  DBNode,
} from "../types";

export const fetchCanvas = (): Promise<DBCanvas> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
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
        }),
      600
    );
  });
};

export const parseDBCanvas = (
  dbCanvas: DBCanvas
): [Canvas, Dictionary<NodeModel>, Dictionary<Port>] => {
  const canvas: Canvas = { ...dbCanvas, nodes: {}, ports: {} };
  const nodes: Dictionary<NodeModel> = {};
  const ports: Dictionary<Port> = {};

  for (let nodeId of Object.keys(dbCanvas.nodes)) {
    canvas.nodes[nodeId] = nodeId;

    const dbNode = dbCanvas.nodes[nodeId];
    nodes[nodeId] = { ...dbNode, ports: {} };

    for (let portId of Object.keys(dbNode.ports)) {
      canvas.ports[portId] = portId;
      nodes[nodeId].ports[portId] = portId;

      ports[portId] = { ...dbNode.ports[portId] };
    }
  }

  return [canvas, nodes, ports];
};

export const parseDBNode = (dbNode: DBNode): [NodeModel, Dictionary<Port>] => {
  const node: NodeModel = { ...dbNode, ports: {} };
  const ports: Dictionary<Port> = {};

  for (let portId of Object.keys(dbNode.ports)) {
    node.ports[portId] = portId;

    ports[portId] = { ...dbNode.ports[portId] };
  }

  return [node, ports];
};
