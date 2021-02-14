import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import './index.css'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Portfolio v1.0</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contacts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
