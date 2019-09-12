import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Submitted from './Submitted';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      completed: false,
      name: ''
    }
  }

  setComplete = (name) => {
    this.setState({
      completed: true,
      name: name
    });
  }

  render() {
    return (
      <div>
        <Link id="topsecret" to="/topsecret" />
        { this.state.completed === false && 
          <Form setComplete={this.setComplete} />
        }
        { this.state.completed === true && 
          <Submitted name={this.state.name}/>
        }
      </div>
    )
  }
}

export default Home;
