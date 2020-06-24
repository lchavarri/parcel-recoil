import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createPort } from "../services/canvasService";
import { nodePortsRel, nodeWithId, portsState } from "../state/canvas";
import { addNodeRel, addPorts } from "../state/canvas.reducer";
import NodePorts from "./NodePorts";

type Props = {
  nodeId: string;
};

const NodeWidget = ({ nodeId }: Props) => {
  const node = useRecoilValue(nodeWithId(nodeId));
  const setNodesRel = useSetRecoilState(nodePortsRel);
  const setPorts = useSetRecoilState(portsState);

  if (!node) {
    return null;
  }

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

export default React.memo(NodeWidget);
