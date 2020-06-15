import React from "react";
import { RecoilRoot } from "recoil";

import Canvas from "./components/Canvas";

const App = () => {
  return (
    <RecoilRoot>
      <Canvas></Canvas>
    </RecoilRoot>
  );
};

export default App;
