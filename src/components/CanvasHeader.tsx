import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState } from "../state/canvas";
import CanvasHeaderCta from "./CanvasHeaderCta";
import CanvasHeaderSearch from "./CanvasHeaderSearch";

const CanvasHeader = () => {
  const canvas = useRecoilValue(canvasState);
  if (!canvas) {
    return null;
  }
  return (
    <div className="canvas-header">
      {canvas.name}
      <div className="canvas-header-actions">
        <CanvasHeaderSearch></CanvasHeaderSearch>
        <CanvasHeaderCta></CanvasHeaderCta>
      </div>
    </div>
  );
};

export default React.memo(CanvasHeader);
