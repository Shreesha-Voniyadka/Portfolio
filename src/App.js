import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/projects" element={<Project />} /> */}
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
