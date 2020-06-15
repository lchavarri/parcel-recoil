import React from "react";
import { useRecoilValue } from "recoil";

import { nodesState } from "../state/canvas";
import { NodeModel } from "../types";
import NodeWidget from "./NodeWidget";

const Nodes = () => {
  const nodes = useRecoilValue(nodesState);

  return (
    <>
      {Object.values(nodes).map((node: NodeModel) => (
        <NodeWidget key={node.id} node={node}></NodeWidget>
      ))}
    </>
  );
};

export default Nodes;
