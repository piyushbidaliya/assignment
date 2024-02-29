import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <h1 id='mainheading'>Best Website builders in the US</h1>
      <div className="header-box">
        <div className="header-content">
          <p><i className='far fa-check-circle'></i> Last Updated - February 22, 2020
          <span><i className='fa fa-info-circle'></i> Advertising Disclosure</span>
          </p>
        </div>
        <div className="header-dropdown">
          <p>Top Relevant <i className='fa fa-angle-down'></i></p>
        </div>
      </div>
      <div className="header-nav">
        <a href="#a"><p>Tools</p></a>
        <a href="#a"><p>AWS Builder</p></a>
        <a href="#a"><p>Start Build</p></a>
        <a href="#a"><p>Build Supplies</p></a>
        <a href="#a"><p>Tooling</p></a>
        <a href="#a"><p>BlueHosting</p></a>
      </div>
      <div className="header-nav2">
        <a href="#a"><p>Home <i className='fa fa-angle-right'></i></p></a>
        <a href="#a"><p>Hosting for all <i className='fa fa-angle-right'></i></p></a>
        <a href="#a"><p>Hosting <i className='fa fa-angle-right'></i></p></a>
        <a href="#a"><p>Hosting6 <i className='fa fa-angle-right'></i></p></a>
        <a href="#a"><p>Hosting5</p></a>
      </div>
    </div>
  )
}

export default Header
