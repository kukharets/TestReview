import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { frontend_url } from './app/const';
import Container from './app/profile/containers/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={frontend_url.profilePage} component={Container} />
      </Router>
    );
  }
}

export default App;
