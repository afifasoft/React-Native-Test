import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let id = 0;
const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} />
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("TODO text please!");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onDelete={() => this.removeTodo(todo.id)} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

