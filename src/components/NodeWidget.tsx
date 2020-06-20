import React from "react";
import { useSetRecoilState } from "recoil";

import { NodeModel } from "../types";
import { portsState, nodePortsRel } from "../state/canvas";
import { createPort } from "../services/canvasService";
import { addNodeRel, addPorts } from "../state/canvas.reducer";
import NodePorts from "./NodePorts";

type Props = {
  node: NodeModel;
};

const NodeWidget = ({ node }: Props) => {
  const setNodesRel = useSetRecoilState(nodePortsRel);
  const setPorts = useSetRecoilState(portsState);

  const handleAdd = async () => {
    const port = await createPort();
    setNodesRel(addNodeRel(node.id, port.id));
    setPorts(addPorts({ [port.id]: port }));
  };

  return (
    <div className="node-widget">
      <div className="node-widget-header">
        {node.id}-{node.name}
        <button
          className="node-widget-header-button button"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <NodePorts nodeId={node.id}></NodePorts>
    </div>
  );
};

export default NodeWidget;
