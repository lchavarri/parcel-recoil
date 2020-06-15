import React from "react";
import { RecoilRoot } from "recoil";

import Canvas from "./components/Canvas";
import Search from "./components/Search";

const App = () => {
  return (
    <RecoilRoot>
      <Canvas></Canvas>
      <Search></Search>
    </RecoilRoot>
  );
};

export default App;
