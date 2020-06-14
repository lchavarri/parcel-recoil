import { atom, selector } from "recoil";
import { Canvas } from "../types";

export const canvas = atom<Canvas>({
  key: "canvas",
  default: {
    ports: {},
    nodes: {},
  },
});

export const nodes = selector({
  key: "nodes",
  get: ({ get }) => {
    const { nodes } = get(canvas);
    return nodes;
  },
});
