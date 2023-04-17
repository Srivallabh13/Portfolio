import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";

import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/education" Component={Education} />
            <Route exact path="/skills" Component={Skills} />
            <Route exact path="/projects" Component={Project} />
            <Route exact path="/contact" Component={Contact} />
        </Routes>
    </Router>
  );
};

export default App;