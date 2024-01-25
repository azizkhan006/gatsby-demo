import { Link } from "gatsby"
import * as React from "react"


const IndexPage = () => {
  return (
    <div className="main">
      <h1>About Us Page</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>About Us Page</title>
