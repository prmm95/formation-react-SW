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

    this.state = { tasks };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    const newArray = this.state.tasks.filter(filterElement => filterElement !== element);
    const newArrayWithElement = newArray.concat([{ ...element, done: !element.done }]);

    return e => {
      this.setState({
        tasks: newArrayWithElement
      });
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.tasks.map((element, index) => (
            <ListElement element={element} key={index} handleClick={this.handleClick(element)} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
