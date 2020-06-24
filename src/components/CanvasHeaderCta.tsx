import React from "react";
import { useSetRecoilState } from "recoil";
import { createNode } from "../services/canvasService";
import { canvasState } from "../state/canvas";
import { upsertNodeModel } from "../state/canvas.reducer";

const CanvasHeaderCta = () => {
  const setDbCanvas = useSetRecoilState(canvasState);

  const handleAdd = async () => {
    const nodeModel = await createNode();
    setDbCanvas(upsertNodeModel(nodeModel));
  };

  return (
    <button className="canvas-header-button button primary" onClick={handleAdd}>
      Add Node
    </button>
  );
};

export default CanvasHeaderCta;
