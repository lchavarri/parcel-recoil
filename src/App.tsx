import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.scss";
import Canvas from "./components/Canvas";
import TestState from "./components/TestState";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={"Loading..."}>
        <Canvas></Canvas>
        <TestState></TestState>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
