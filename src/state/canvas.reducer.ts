import { Canvas, Dict, NodeModel, Port, DBNode } from "../types";
import { mapKeys } from "../services/utils";

export const addNodeToCanvas = (nodeId: string) => (c: Canvas): Canvas => ({
  ...c,
  nodes: {
    ...c.nodes,
    [nodeId]: nodeId,
  },
});

export const addDBNode = (dbNode: DBNode) => (
  n: Dict<NodeModel>
): Dict<NodeModel> => ({
  ...n,
  [dbNode.id]: {
    ...n[dbNode.id],
    ...dbNode,
    ports: {
      ...(n[dbNode.id]?.ports || {}),
      ...mapKeys(dbNode.ports),
    },
  },
});

export const addPorts = (newPorts: Dict<Port>) => (
  p: Dict<Port>
): Dict<Port> => ({
  ...p,
  ...newPorts,
});
