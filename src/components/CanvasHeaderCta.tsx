import React from "react";
import { useSetRecoilState } from "recoil";
import { createNode } from "../services/canvasService";
import { nodePortsRel, nodesState, portsState } from "../state/canvas";
import { addDBNode, addDBNodeRel, addPorts } from "../state/canvas.reducer";

const CanvasHeaderCta = () => {
  const setNodes = useSetRecoilState(nodesState);
  const setNodesRel = useSetRecoilState(nodePortsRel);
  const setPorts = useSetRecoilState(portsState);

  const handleAdd = async () => {
    const dbNode = await createNode();
    setNodes(addDBNode(dbNode));
    setNodesRel(addDBNodeRel(dbNode));
    setPorts(addPorts(dbNode.ports));
  };

  return (
    <button className="canvas-header-button button primary" onClick={handleAdd}>
      Add Node
    </button>
  );
};

export default CanvasHeaderCta;
