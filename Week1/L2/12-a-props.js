import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}

let count = 0;
const rootElement = document.getElementById("root");
setInterval(() => {
  ReactDOM.render(<App count={count++} />, rootElement);
}, 1000);



// Styles.css
.App {
  font-family: sans-serif;
  text-align: center;
}
