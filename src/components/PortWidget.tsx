import React from "react";
import { useRecoilValue } from "recoil";
import { portWithId } from "../state/canvas";
import { searchTermState } from "../state/search";
import { Port } from "../types";
import PortWidgetEditLabel from "./PortWidgetEditLabel";

type Props = {
  nodeId: string;
  portId: string;
};

const PortWidget = ({ nodeId, portId }: Props) => {
  const port: Port | undefined = useRecoilValue(portWithId([nodeId, portId]));
  const term = useRecoilValue(searchTermState).toLowerCase();

  if (!port) {
    return null;
  }

  const { id, name, type } = port;

  const match =
    term.length > 0 &&
    (id.toLowerCase() === term ||
      type.toLowerCase() === term ||
      name.toLowerCase().includes(term)) ? (
      <div>match</div>
    ) : null;
  const hlClass = match ? "highlighted" : "";

  return (
    <div className={`port-widget ${hlClass}`}>
      <span className="port-widget-hitarea"></span>
      <PortWidgetEditLabel
        nodeId={nodeId}
        portId={portId}
      ></PortWidgetEditLabel>
    </div>
  );
};

export default React.memo(PortWidget);
