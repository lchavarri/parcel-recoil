import { Canvas } from "../types";

export const fetchCanvas = (): Promise<Canvas> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          nodes: {
            "1": {
              id: 1,
              name: "Node One",
            },
            "2": {
              id: 2,
              name: "Node Two",
            },
          },
          ports: {},
        }),
      600
    );
  });
};
