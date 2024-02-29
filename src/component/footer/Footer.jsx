import React from "react";
import './footer.css';


const Footer = () =>{
    return(
<div className="footer">
  <div className="footer-container">
  
    <div className="footer-row">
      <div className="footer-col">
        <h4>Categories</h4>
        <ul>
          <li><a href="#a">Web Builder</a></li>
          <li><a href="#a">Hosting</a></li>
          <li><a href="#a">Data Center</a></li>
          <li><a href="#a">Robotic-Automation</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#a">Contact</a></li>
          <li><a href="#a">Privacy Policy</a></li>
          <li><a href="#a">Terms Of Service</a></li>
          <li><a href="#a">Categories</a></li>
          <li><a href="#a">About</a></li>
        </ul>
      </div>
      <div className="footer-col2">
        <ul>
          <li><a href="#a">United States <i className="fa fa-angle-down"> </i></a></li>
        </ul>
      </div>
    </div>

  </div>
  </div> 
    )
}

export default Footer;


