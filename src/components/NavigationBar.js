import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class NavigationBar extends Component {
  render() {
    return (
      <nav className="Navi">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
