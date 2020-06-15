import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  fetchCanvas,
  parseDBCanvas,
  createNode,
} from "../services/canvasService";
import {
  canvasState,
  nodesState,
  portsState,
  nodePortsRel,
} from "../state/canvas";
import { addPorts, addDBNode, addDBNodeRel } from "../state/canvas.reducer";
import Nodes from "./Nodes";

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
    <>
      <h1>{canvas.name}</h1>
      <button onClick={handleAdd}>Add Node</button>
      <Nodes></Nodes>
    </>
  );
};

export default Canvas;
