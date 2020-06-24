import React from "react";
import "./Canvas.scss";
import CanvasHeader from "./CanvasHeader";
import CanvasNodes from "./CanvasNodes";

const Canvas = () => {
  return (
    <div className="canvas">
      <CanvasHeader></CanvasHeader>
      <CanvasNodes></CanvasNodes>
    </div>
  );
};

export default Canvas;
