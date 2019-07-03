import React, { Component } from 'react';
import './App.css';
import ListElement from './ListElement';

const tasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.props.initTodoList(tasks);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    return e => {
      this.props.changeListStatus(element);
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.props.tasks.map((element, index) => (
              <ListElement element={element} key={index} handleClick={this.handleClick(element)} />
            ))}
            <form>
              <label>New task </label>
              <input type="text" on />
              <input type="submit" onClick={this.handleSubmit} />
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
