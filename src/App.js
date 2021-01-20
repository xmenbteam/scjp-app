import React from "react";
import { Router } from "@reach/router";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Dev from "./Components/Dev";
import Music from "./Components/Music";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Dev path="/dev" component={Dev} />
          <Music path="/music" component={Music} />
          <Contact path="/contact" component={Contact} />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
