import React, { Component } from 'react';

class ListElement extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick}>
        <p> {`${this.props.element.name} - ${this.props.element.done ? 'Done' : 'Todo'} `} </p>
      </div>
    );
  }
}

export default ListElement;
