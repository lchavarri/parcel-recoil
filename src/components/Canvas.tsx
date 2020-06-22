import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { fetchCanvas, parseDBCanvas } from "../services/canvasService";
import {
  canvasState,
  nodePortsRel,
  nodesState,
  portsState,
} from "../state/canvas";
import "./Canvas.scss";
import CanvasHeader from "./CanvasHeader";
import CanvasNodes from "./CanvasNodes";

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

  return (
    <div className="canvas">
      <CanvasHeader canvasName={canvas.name}></CanvasHeader>
      <CanvasNodes></CanvasNodes>
    </div>
  );
};

export default Canvas;
