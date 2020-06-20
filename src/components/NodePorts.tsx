import React from "react";
import { useRecoilValue } from "recoil";

import { nodePortsQuery } from "../state/canvas";
import { Port } from "../types";
import PortWidget from "./PortWidget";

const NodePorts = ({ nodeId }) => {
  const ports: Port[] = useRecoilValue(nodePortsQuery(nodeId));

  if (!ports || !ports.length) {
    return null;
  }

  return (
    <div className="node-widget-ports">
      {ports.map((p) => (
        <PortWidget key={p.id} port={p}></PortWidget>
      ))}
    </div>
  );
};

export default NodePorts;
