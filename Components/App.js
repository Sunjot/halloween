import React from 'react';
import ReactDOM from 'react-dom';
import '../Stylesheets/App.scss';
import Home from './Home';
import List from './List';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/topsecret" component={List}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
