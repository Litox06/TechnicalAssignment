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
    // Settear router con un switch que tiene routes
    // Solo existe la ruta / para el componente : Main
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  };
};

export default App;