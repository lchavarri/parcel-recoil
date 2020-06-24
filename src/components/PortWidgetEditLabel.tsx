import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useRecoilState } from "recoil";
import { portWithId } from "../state/canvas";

type Props = {
  nodeId: string;
  portId: string;
};

const PortWidgetEditLabel = ({ nodeId, portId }: Props) => {
  const [port, setPort] = useRecoilState(portWithId([nodeId, portId]));

  const text = useRef(port?.name || "");

  const handleChange = (evt) => {
    text.current = evt.target.value.trim();
  };

  const handleBlur = () => {
    const name = new DOMParser().parseFromString(text.current, "text/html")
      .documentElement.textContent;
    setPort((oldPort) => ({ ...oldPort, name }));
  };

  if (!port) {
    return null;
  }

  return (
    <ContentEditable
      className="content-editable"
      tagName="span"
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
      spellCheck={false}
    />
  );
};

export default React.memo(PortWidgetEditLabel);
