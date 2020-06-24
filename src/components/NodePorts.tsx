import React from "react";
import { useRecoilValue } from "recoil";

import { nodePortsQuery } from "../state/canvas";
import PortWidget from "./PortWidget";

const NodePorts = ({ nodeId }) => {
  const ports: string[] = useRecoilValue(nodePortsQuery(nodeId));

  if (!ports || !ports.length) {
    return null;
  }

  return (
    <div className="node-widget-ports">
      {ports.map((portId: string) => (
        <PortWidget key={portId} portId={portId}></PortWidget>
      ))}
    </div>
  );
};

export default React.memo(NodePorts);
