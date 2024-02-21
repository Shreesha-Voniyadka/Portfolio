import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
