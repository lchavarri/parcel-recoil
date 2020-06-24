import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState } from "../state/canvas";

const TestState = () => {
  const state = useRecoilValue(canvasState);
  return (
    <div>
      <pre>{JSON.stringify(state, null, 4)}</pre>
    </div>
  );
};

export default TestState;
