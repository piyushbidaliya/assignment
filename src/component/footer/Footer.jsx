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
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="footer-col">
        <br />
        <ul>
          <li>United States <i className="fa fa-angle-down"> </i></li>
        </ul>
      </div>
    </div>

  </div>
  </div> 
    )
}

export default Footer;


