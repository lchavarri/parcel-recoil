import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { NodeModel, Port } from "../types";
import { nodePortsQuery, portsState, nodesState } from "../state/canvas";
import PortWidget from "./PortWidget";
import { createPort } from "../services/canvasService";
import { addPortToNode, addPorts } from "../state/canvas.reducer";

type Props = {
  node: NodeModel;
};

const NodeWidget = ({ node }: Props) => {
  const ports: Port[] = useRecoilValue(nodePortsQuery(Object.keys(node.ports)));
  const setNodes = useSetRecoilState(nodesState);
  const setPorts = useSetRecoilState(portsState);

  const handleAdd = async () => {
    const port = await createPort();
    setNodes(addPortToNode(port, node.id));
    setPorts(addPorts({ [port.id]: port }));
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
