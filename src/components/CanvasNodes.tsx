import React from "react";
import { useRecoilValue } from "recoil";
import { nodesState } from "../state/canvas";
import NodeWidget from "./NodeWidget";

const CanvasNodes = () => {
  const nodes = useRecoilValue(nodesState);

  return (
    <div className="canvas-nodes">
      {Object.keys(nodes).map((nodeId: string) => (
        <NodeWidget key={nodeId} nodeId={nodeId}></NodeWidget>
      ))}
    </div>
  );
};

export default React.memo(CanvasNodes);
