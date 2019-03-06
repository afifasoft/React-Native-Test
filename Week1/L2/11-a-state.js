import React from "react";
import { render } from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <div>
            <button onClick={() => this.increaseCount()}>Add</button>
          </div>

          <h2>{this.state.count}</h2>
          <div>
            <button onClick={() => this.decreaseCount()}>Delete</button>
          </div>
        </div>
        <div>
          <div>
            <button onClick={() => this.increaseCount()}>Add</button>
          </div>

          <h2>{this.state.count}</h2>
          <div>
            <button onClick={() => this.decreaseCount()}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

let count = 0;
const rootElement = document.getElementById("root");
render(<App count={count++} />, rootElement);
