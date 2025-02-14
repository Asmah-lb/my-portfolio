import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";
import Project from "./component/Project/Project"
import Footer from "./component/Footer/Footer";


const App = function () {
  return (
    <main>
      <Header />


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
      <About />
      <Skills/>
      <Project />
      <Contact />
      <Footer/>

    </main>
  );
};
export default App;
