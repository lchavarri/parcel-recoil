import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { NodeModel, Port, Dict } from "../types";
import { nodePortsQuery, portsState, nodesState } from "../state/canvas";
import PortWidget from "./PortWidget";

type Props = {
  node: NodeModel;
};

const NodeWidget = ({ node }: Props) => {
  const ports: Port[] = useRecoilValue(nodePortsQuery(Object.keys(node.ports)));
  const setNodes = useSetRecoilState(nodesState);
  const setPorts = useSetRecoilState(portsState);

  const handleAdd = () => {
    const port = {
      id: "5",
      name: "Port Number Five",
      type: "boolean",
    };

    setNodes((n: Dict<NodeModel>) => ({
      ...n,
      [node.id]: {
        ...node,
        ports: {
          ...node.ports,
          [port.id]: port.id,
        },
      },
    }));

    setPorts((p: Dict<Port>) => ({
      ...p,
      [port.id]: port,
    }));
  };

  return (
    <div>
      <h3>
        {node.id}-{node.name}
      </h3>
      <div>
        {ports.map((p) => (
          <PortWidget key={p.id} port={p}></PortWidget>
        ))}
      </div>
      <button onClick={handleAdd}>Add Port</button>
    </div>
  );
};

export default NodeWidget;
