import React from "react";
import CanvasHeaderCta from "./CanvasHeaderCta";
import CanvasHeaderSearch from "./CanvasHeaderSearch";

type Props = {
  canvasName: string;
};

const CanvasHeader = ({ canvasName }: Props) => (
  <div className="canvas-header">
    {canvasName}
    <div className="canvas-header-actions">
      <CanvasHeaderSearch></CanvasHeaderSearch>
      <CanvasHeaderCta></CanvasHeaderCta>
    </div>
  </div>
);

export default CanvasHeader;
