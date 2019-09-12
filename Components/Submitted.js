import React from 'react';
import ReactDOM from 'react-dom';

class Submitted extends React.Component {

  constructor() {
    super();
    this.state = {
      completed: false
    }
  }

  render() {
    return (
      <div id="app-wrap">
        <div id="thanks">Thanks. See you there, {this.props.name}! :)</div>
        <img src="https://i.imgur.com/ymNmunO.gif"></img>
      </div>
    )
  }
}

export default Submitted;
