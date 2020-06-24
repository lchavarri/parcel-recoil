import uuid4 from "uuid4";
import { Canvas, NodeModel, Port } from "../types";

const mockDelay = (millis: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
};

export const fetchCanvas = async (): Promise<Canvas> => {
  await mockDelay(500);
  return {
    name: "Test Canvas",
    nodes: {
      "db42e1bd-0ab5-4231-a392-015ab55e9ee7": {
        id: "db42e1bd-0ab5-4231-a392-015ab55e9ee7",
        name: "Node One",
        ports: {
          "52400ad6-363f-4bd9-98d8-a7cb7a4b4945": {
            id: "52400ad6-363f-4bd9-98d8-a7cb7a4b4945",
            name: "Port One",
            type: "number",
          },
        },
      },
      "11a17753-55df-48ca-8898-c7819a732200": {
        id: "11a17753-55df-48ca-8898-c7819a732200",
        name: "Node Two",
        ports: {},
      },
    },
  };
};

export const createNode = async (): Promise<NodeModel> => {
  await mockDelay(100);
  return {
    id: uuid4(),
    name: "New Node",
    ports: {},
  };
};

export const createPort = async (): Promise<Port> => {
  await mockDelay(100);
  return {
    id: uuid4(),
    name: "New Port",
    type: "string",
  };
};
