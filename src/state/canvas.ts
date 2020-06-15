import { atom } from "recoil";
import { Canvas, Dictionary, NodeModel, Port } from "../types";

export const canvasState = atom<Canvas>({
  key: "canvas",
  default: {
    name: "",
    ports: {},
    nodes: {},
  },
});

export const nodesState = atom<Dictionary<NodeModel>>({
  key: "nodes",
  default: {},
});

export const portsState = atom<Dictionary<Port>>({
  key: "ports",
  default: {},
});
