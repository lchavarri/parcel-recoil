import React from "react";
import { useRecoilValue } from "recoil";

import { nodePortsQuery } from "../state/canvas";
import { Port } from "../types";
import PortWidget from "./PortWidget";

const NodePorts = ({ nodeId }) => {
  const ports: Port[] = useRecoilValue(nodePortsQuery(nodeId));

  return (
    <div>
      {ports.map((p) => (
        <PortWidget key={p.id} port={p}></PortWidget>
      ))}
    </div>
  );
};

export default NodePorts;
