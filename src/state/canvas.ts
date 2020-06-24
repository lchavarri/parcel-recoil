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

export const nodeWithId = selectorFamily({
  key: "nodeWithId",
  get: (nodeId: string) => ({ get }): NodeModel | undefined => {
    const nodes = get(nodesState);
    return nodes[nodeId];
  },
});

export const portWithId = selectorFamily({
  key: "portWithId",
  get: (portId: string) => ({ get }): Port | undefined => {
    const ports = get(portsState);
    return ports[portId];
  },
});
