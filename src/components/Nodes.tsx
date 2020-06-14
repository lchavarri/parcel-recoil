import React from "react";

import { useCanvas } from "../hooks/useCanvas";

const Nodes = () => {
  const canvas = useCanvas();

  return <pre>{JSON.stringify(canvas)}</pre>;
};

export default Nodes;
