import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 0;
const rootElement = document.getElementById("root");

ReactDOM.render(<App count={count++} />, rootElement);
