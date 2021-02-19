import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import './index.css';
import FBIcon from './fbicon.png';
import GHIcon from './GHicon.png';
import Micon from './Micon.png';
import YTicon from './YTicon.png';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Portfolio v1.0</h1>
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact me</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <div className="Social" style={{align: "center", textAlign: "center", margin: "10px"}}>
              <a href="https://www.facebook.com/MiguelAngel87" target="_blank">
              <img src={FBIcon} img style={{maxHeight: 80, maxWidth: 80, margin: "5px"}} alt="Facebook"/>
              </a>
              <a href="https://www.github.com/theclavedj" target="_blank">
              <img src={GHIcon} img style={{maxHeight: 80, maxWidth: 80, margin: "5px"}} alt="Github"/>
              </a>
              <a href="https://www.youtube.com/channel/UCygMYqAEgKNKh1FKZUDZK5Q" target="_blank">
              <img src={YTicon} img style={{maxHeight: 80, maxWidth: 80, margin: "5px"}} alt="Youtube"/>
              </a>
              <a href="mailto: m-a-jimenez@hotmail.com">
              <img src={Micon} img style={{maxHeight: 80, maxWidth: 80, margin: "5px"}} alt="Email me"/>
              </a>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
