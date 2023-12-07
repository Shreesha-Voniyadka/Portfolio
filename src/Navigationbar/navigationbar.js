import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const NavigationBar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       {/* <Link to="/">Home</Link>  */}
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       {/* <Link to="/About">About</Link> */}
    //       <a href="/About">About</a>
    //     </li>
    //     <li>
    //       {/* <Link to="/Resume">Resume</Link> */}
    //       <a href="/Resume">Resume</a>
    //     </li>
    //     <li>
    //       {/* <Link to="/Projects">Projects</Link> */}
    //       <a href="/Projects">Projects</a>
    //     </li>
    //     {/* Add more navigation items as needed */}
    //   </ul>
    // </nav>
    <header >

      <nav>
        <ul>
          <li><a href="/"><i class="icon-home"></i>Home</a></li>
          <li><a href="/about"><i class="icon-user"></i>About</a></li>
          <li><a href="/projects"><i class="icon-thumbs-up-alt"></i>Projects</a></li>
          <li><a href="/resume"><i class="icon-gear"></i>Resume</a></li>
          {/* <li><a href="#gallery"><i class="icon-picture"></i>Gallery</a></li> */}
          {/* <li><a href="#contact"><i class="icon-phone"></i>Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
