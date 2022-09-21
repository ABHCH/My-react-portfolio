import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Resume from "./component/Resume";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
