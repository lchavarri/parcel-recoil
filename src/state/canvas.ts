import { atom, selectorFamily } from "recoil";
import { Canvas, Dict, NodeModel, Port } from "../types";

export const canvasState = atom<Canvas>({
  key: "canvas",
  default: {
    name: "",
  },
});

export const nodesState = atom<Dict<NodeModel>>({
  key: "nodes",
  default: {},
});

export const portsState = atom<Dict<Port>>({
  key: "ports",
  default: {},
});

export const nodePortsRel = atom<Dict<string[]>>({
  key: "nodePortsRel",
  default: {},
});

export const nodePortsQuery = selectorFamily({
  key: "nodePorts",
  get: (nodeId: string) => ({ get }): string[] => {
    const rels = get(nodePortsRel)[nodeId] || [];
    return Object.values(rels);
  },
});

export const nodeWithId = selectorFamily<NodeModel, string>({
  key: "nodeWithId",
  get: (nodeId: string) => ({ get }): NodeModel | undefined =>
    get(nodesState)[nodeId],
  set: (nodeId: string) => ({ set }, updatedNode) => {
    set(nodesState, (prevState) => ({
      ...prevState,
      [nodeId]: { ...prevState[nodeId], ...updatedNode },
    }));
  },
});

export const portWithId = selectorFamily({
  key: "portWithId",
  get: (portId: string) => ({ get }): Port | undefined => {
    const ports = get(portsState);
    return ports[portId];
  },
});
