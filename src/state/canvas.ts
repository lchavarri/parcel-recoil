import { atom, selectorFamily } from "recoil";
import { Canvas, Dict, NodeModel, Port } from "../types";

export const canvasState = atom<Canvas>({
  key: "canvas",
  default: {
    name: "",
    nodes: {},
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

export const nodePortsQuery = selectorFamily({
  key: "nodePorts",
  get: (portIds: string[]) => ({ get }): Port[] =>
    Object.values(get(portsState)).filter((p: Port) => portIds.includes(p.id)),
});
