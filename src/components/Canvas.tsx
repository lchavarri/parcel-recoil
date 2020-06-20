import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  createNode,
  fetchCanvas,
  parseDBCanvas,
} from "../services/canvasService";
import {
  canvasState,
  nodePortsRel,
  nodesState,
  portsState,
} from "../state/canvas";
import { addDBNode, addDBNodeRel, addPorts } from "../state/canvas.reducer";
import Nodes from "./Nodes";
import "./Canvas.scss";

const Canvas = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const setNodes = useSetRecoilState(nodesState);
  const setNodesRel = useSetRecoilState(nodePortsRel);
  const setPorts = useSetRecoilState(portsState);

  useEffect(() => {
    async function init() {
      const dbCanvas = await fetchCanvas().catch((err) => {
        console.error(err);
      });
      if (dbCanvas) {
        const [canvas, nodes, nodesRel, ports] = parseDBCanvas(dbCanvas);
        setCanvas(canvas);
        setNodes(nodes);
        setNodesRel(nodesRel);
        setPorts(ports);
      }
    }

    init();
  }, []);

  const handleAdd = async () => {
    const dbNode = await createNode();
    setNodes(addDBNode(dbNode));
    setNodesRel(addDBNodeRel(dbNode));
    setPorts(addPorts(dbNode.ports));
  };

  return (
    <div className="canvas">
      <div className="canvas-header">
        {canvas.name}
        <button
          className="canvas-header-button button primary"
          onClick={handleAdd}
        >
          Add Node
        </button>
      </div>
      <div className="canvas-nodes">
        <Nodes></Nodes>
      </div>
    </div>
  );
};

export default Canvas;
