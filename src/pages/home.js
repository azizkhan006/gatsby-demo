import React from "react";
import { Link } from "gatsby";

const Home = () => {
  return (
    <div className="main">
      <h1>Home Page</h1>
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Home;

export const Head = () => <title>Home Page</title>;