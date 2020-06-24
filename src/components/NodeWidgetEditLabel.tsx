import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSetRecoilState, useRecoilState } from "recoil";
import { nodeWithId } from "../state/canvas";

type Props = {
  nodeId: string;
};

const NodeWidgetEditLabel = ({ nodeId }: Props) => {
  const [node, setNode] = useRecoilState(nodeWithId(nodeId));

  const text = useRef(node?.name || "");

  const handleChange = (evt) => {
    text.current = evt.target.value.trim();
  };

  const handleBlur = () => {
    const name = new DOMParser().parseFromString(text.current, "text/html")
      .documentElement.textContent;
    setNode((oldNode) => ({ ...oldNode, name }));
  };

  if (!node) {
    return null;
  }

  return (
    <ContentEditable
      className="node-widget-header-editor"
      tagName="span"
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
      spellCheck={false}
    />
  );
};

export default React.memo(NodeWidgetEditLabel);
