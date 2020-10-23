import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Skills from "../src/components/skills/Skills";
import Contact from "../src/components/contact/Contact";
import Carousel from "./components/carousel/Carousel";
import ProjectSection from "./components/projects/ProjectSection";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={ProjectSection} />
          <Route path="/contact" component={Contact} />
          <Route path="/images" component={Carousel} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
