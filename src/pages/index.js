import * as React from "react";
import { Router } from "@reach/router";
import Home from "./home";
import About from "./about/index";
import Project from "./project/index";
import Service from "./service/index";
import Contact from "./contact/index";

const IndexPage = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Project path="/project" />
      <Service path="/service" />
      <Contact path="/contact" /> 
    </Router>
  );
};

export default IndexPage;

