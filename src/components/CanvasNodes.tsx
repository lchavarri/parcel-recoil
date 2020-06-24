import React from "react";
import { useRecoilValue } from "recoil";
import { nodesQuery } from "../state/canvas";
import NodeWidget from "./NodeWidget";

const CanvasNodes = () => {
  const nodeIds = useRecoilValue(nodesQuery);

  return (
    <div className="canvas-nodes">
      {nodeIds.map((nodeId: string) => (
        <NodeWidget key={nodeId} nodeId={nodeId}></NodeWidget>
      ))}
    </div>
  );
};

export default React.memo(CanvasNodes);
