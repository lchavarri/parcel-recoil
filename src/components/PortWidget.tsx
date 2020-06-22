import React from "react";
import { useRecoilValue } from "recoil";

import { Port } from "../types";
import { searchTermState } from "../state/search";

type Props = {
  port: Port;
};

const PortWidget = ({ port }: Props) => {
  const { id, name, type } = port;

  const term = useRecoilValue(searchTermState).toLowerCase();

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
      {name}
    </div>
  );
};

export default PortWidget;
