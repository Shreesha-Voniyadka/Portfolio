// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import Navibar from '../src/Navigationbar/navigationbar'
import Projects from './components/Projects/project'
import Resume from './components/Resume/resume'
import Home from './components/Home/Home'
import About from './components/About/About'
// import video from './Assets/production_id.mp4'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';

function App() {
  const [mousePosition, setmousePosition] = useState({
    x:0,
    y:0
  });
  return (   
      <div className="App">

      {/* <video src={video} className='bgvedio' autoPlay loop muted /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/navbar" element={<Navibar />} /> */}
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
