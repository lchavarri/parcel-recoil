import { Dict, NodeModel, Port, DBNode } from "../types";
import { extendDict } from "../services/utils";

export const addDBNode = (dbNode: DBNode) => (
  n: Dict<NodeModel>
): Dict<NodeModel> => ({
  ...n,
  [dbNode.id]: {
    ...n[dbNode.id],
    ...dbNode,
  },
});

export const addDBNodeRel = (dbNode: DBNode) => (
  r: Dict<string[]>
): Dict<string[]> => extendDict(r, { [dbNode.id]: Object.keys(dbNode.ports) });

export const addPorts = (newPorts: Dict<Port>) => (
  p: Dict<Port>
): Dict<Port> => ({
  ...p,
  ...newPorts,
});

export const addNodeRel = (nodeId: string, portId: string) => (
  rels: Dict<string[]>
) => ({
  ...rels,
  [nodeId]: [...rels[nodeId], portId],
});
