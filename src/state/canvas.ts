import { atom, selector, selectorFamily } from "recoil";
import { fetchCanvas } from "../services/canvasService";
import { Canvas, NodeModel, Port } from "../types";
import { upsertNodeModel, upsertPort } from "./canvas.reducer";

export const canvasState = atom<Canvas>({
  key: "canvas",
  default: fetchCanvas(),
});

export const nodesQuery = selector<string[]>({
  key: "nodes",
  get: ({ get }) => Object.keys(get(canvasState).nodes),
});

export const nodePortsQuery = selectorFamily<string[], string>({
  key: "nodePorts",
  get: (nodeId: string) => ({ get }): string[] =>
    Object.keys(get(nodeWithId(nodeId)).ports),
});

export const nodeWithId = selectorFamily<NodeModel, string>({
  key: "nodeWithId",
  get: (nodeId: string) => ({ get }): NodeModel | undefined =>
    get(canvasState).nodes[nodeId],
  set: (nodeId: string) => ({ set }, updatedNode) => {
    set(canvasState, upsertNodeModel(updatedNode as NodeModel));
  },
});

export const portWithId = selectorFamily<Port, string[]>({
  key: "portWithId",
  get: ([nodeId, portId]: string[]) => ({ get }): Port | undefined =>
    get(nodeWithId(nodeId))?.ports[portId],
  set: ([nodeId, portId]: string[]) => ({ set }, updatedPort) => {
    set(nodeWithId(nodeId), upsertPort(updatedPort as Port));
  },
});
