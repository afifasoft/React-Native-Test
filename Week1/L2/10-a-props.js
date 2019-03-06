import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h2>{props.count}</h2>
    </div>
  );
}

let count=0;
const rootElement = document.getElementById("root");
setInterval(() => ReactDOM.render(<App count={count++} />, rootElement),1000);

