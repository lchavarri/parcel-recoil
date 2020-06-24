import React from "react";
import { useRecoilState } from "recoil";
import { createPort } from "../services/canvasService";
import { nodeWithId } from "../state/canvas";
import { upsertPort } from "../state/canvas.reducer";
import NodePorts from "./NodePorts";
import NodeWidgetEditLabel from "./NodeWidgetEditLabel";

type Props = {
  nodeId: string;
};

const NodeWidget = ({ nodeId }: Props) => {
  const [node, setNode] = useRecoilState(nodeWithId(nodeId));

  if (!node) {
    return null;
  }

  const handleAdd = async () => {
    const port = await createPort();
    setNode(upsertPort(port));
  };

  return (
    <div className="node-widget">
      <div className="node-widget-header">
        <NodeWidgetEditLabel nodeId={nodeId}></NodeWidgetEditLabel>
        <button
          className="node-widget-header-button button"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <NodePorts nodeId={nodeId}></NodePorts>
    </div>
  );
};

export default React.memo(NodeWidget);
