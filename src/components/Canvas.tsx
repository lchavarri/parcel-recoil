import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import {
  fetchCanvas,
  parseDBCanvas,
  createNode,
} from "../services/canvasService";
import { canvasState, nodesState, portsState } from "../state/canvas";
import { addNodeToCanvas, addPorts, addDBNode } from "../state/canvas.reducer";
import { NodeModel } from "../types";
import NodeWidget from "./NodeWidget";

const Canvas = () => {
  const [canvas, setCanvas] = useRecoilState(canvasState);
  const [nodes, setNodes] = useRecoilState(nodesState);
  const setPorts = useSetRecoilState(portsState);

  useEffect(() => {
    async function init() {
      const dbCanvas = await fetchCanvas().catch((err) => {
        console.error(err);
      });
      if (dbCanvas) {
        const [canvas, nodes, ports] = parseDBCanvas(dbCanvas);
        setCanvas(canvas);
        setNodes(nodes);
        setPorts(ports);
      }
    }

    init();
  }, []);

  const handleAdd = async () => {
    const dbNode = await createNode();
    setCanvas(addNodeToCanvas(dbNode.id));
    setNodes(addDBNode(dbNode));
    setPorts(addPorts(dbNode.ports));
  };

  return (
    <>
      <h1>{canvas.name}</h1>

      {Object.values(nodes).map((node: NodeModel) => (
        <NodeWidget key={node.id} node={node}></NodeWidget>
      ))}

      <button onClick={handleAdd}>Add Node</button>
    </>
  );
};

export default Canvas;
