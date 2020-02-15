import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

const App: () => JSX.Element = () => {
  return <div>Hello world</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
