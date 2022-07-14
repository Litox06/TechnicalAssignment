
// import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./Views/Main";

class App extends Component {


render () {
  return (
    // Set router with a switch with routes
    // (Just route / for component : Main)
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  };
};

export default App;