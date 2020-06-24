import { Canvas, NodeModel, Port } from "../types";

export const upsertNodeModel = (nodeModel: NodeModel) => (canvas: Canvas) => ({
  ...canvas,
  nodes: {
    ...canvas.nodes,
    [nodeModel.id]: {
      ...canvas.nodes[nodeModel.id],
      ...nodeModel,
    },
  },
});

export const upsertPort = (port: Port) => (nodeModel: NodeModel) => ({
  ...nodeModel,
  ports: {
    ...nodeModel.ports,
    [port.id]: {
      ...nodeModel.ports[port.id],
      ...port,
    },
  },
});
