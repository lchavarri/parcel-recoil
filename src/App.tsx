import React from "react";
import { RecoilRoot } from "recoil";

import Nodes from "./components/Nodes";

const App = () => {
  return (
    <RecoilRoot>
      <Nodes></Nodes>
    </RecoilRoot>
  );
};

export default App;
