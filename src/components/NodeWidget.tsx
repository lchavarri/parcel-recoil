import React from "react";

import { NodeModel } from "../types";

type Props = {
  node: NodeModel;
};

const NodeWidget = ({ node }: Props) => {
  const handleClick = () => {};

  return <div>{node.name}</div>;
};

export default NodeWidget;
