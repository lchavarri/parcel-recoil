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
  get: (nodeId: string) => ({ get }): Port[] => {
    const ports = get(portsState);
    const rels = get(nodePortsRel)[nodeId] || [];
    return rels.filter((id) => !!ports[id]).map((id) => ports[id]);
  },
});
