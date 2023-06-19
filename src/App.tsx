import type { Component } from 'solid-js';

import {styled} from "@macaron-css/solid";
import {Test} from "./style";

const TestOverride = styled(Test, {
  base: {
    backgroundColor: 'green'
  }
})

const App: Component = () => {
  return (
    <>
      <Test>hello hello</Test>
      <TestOverride>hello hello</TestOverride>
    </>
  );
};

export default App;
