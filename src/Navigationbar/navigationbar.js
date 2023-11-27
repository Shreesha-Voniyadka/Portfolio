import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link>  */}
          <a href="/">Home</a>
        </li>
        <li>
          {/* <Link to="/About">About</Link> */}
          <a href="/About">About</a>
        </li>
        <li>
          {/* <Link to="/Resume">Resume</Link> */}
          <a href="/Resume">Resume</a>
        </li>
        <li>
          {/* <Link to="/Projects">Projects</Link> */}
          <a href="/Projects">Projects</a>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
