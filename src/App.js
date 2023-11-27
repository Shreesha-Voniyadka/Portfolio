// import logo from './logo.svg';
import {  BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navibar from '../src/Navigationbar/navigationbar'
import Projects from './components/Projects/project'
import Resume from './components/Resume/resume'
import Home from './components/Home/Home'
import About from './components/About/About'
// import video from './Assets/production_id.mp4'
import { useEffect, useState } from 'react';
import { SwitchLayoutGroupContext, motion } from 'framer-motion';

import './App.css';

function App() {
  //   hit = state variable
  // setHit = function to update state variable
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const mouseMove = e => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }



  return (
    <div className="App">
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
      <Router>
        <div>
          <Navibar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/navbar" element={<Navibar />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
