import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


const App = function () {
  return (
    <main>
      <Header />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Route path="/skills" element={<Home/>}></Route> */}
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
      <About />
      <Project />
      <Contact />

    </main>
  );
};
export default App;
