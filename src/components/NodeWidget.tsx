import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { NodeModel, Port } from "../types";
import { nodePortsQuery, portsState, nodePortsRel } from "../state/canvas";
import PortWidget from "./PortWidget";
import { createPort } from "../services/canvasService";
import { addNodeRel, addPorts } from "../state/canvas.reducer";

type Props = {
  node: NodeModel;
};

const NodeWidget = ({ node }: Props) => {
  const ports: Port[] = useRecoilValue(nodePortsQuery(node.id));
  const setNodesRel = useSetRecoilState(nodePortsRel);
  const setPorts = useSetRecoilState(portsState);

  const handleAdd = async () => {
    const port = await createPort();
    setNodesRel(addNodeRel(node.id, port.id));
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
