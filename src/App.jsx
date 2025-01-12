import React from "react";

import Home from "./pages/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const App = function () {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
};
export default App;
