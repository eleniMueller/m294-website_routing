import logo from './logo.svg';
import './App.css';
import React from "react";
import {Dashboard} from "./Dashboard";
import {Home} from "./home";
import {About} from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BMIexample from "./bmiRechner";
import {FunctialHooks} from "./functionalHooks";
import {ListColor} from "./ListColor";



function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/listColor">
              <ListColor />
            </Route>
            <Route path="/functionalHooks">
              <FunctialHooks />
            </Route>
            <Route path="/bmiRechner">
              <BMIexample />
            </Route>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
