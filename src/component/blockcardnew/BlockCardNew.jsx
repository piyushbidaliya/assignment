import React from 'react'
import './blockcardnew.css'
import img from '../../asset/logo.png'

const BlockCardNew =({imgname, boldtext, text, number, grade, className, className1})=>{
    return(
      <>
        <div className='blockcardnew'>
        <div className="blockcardnew-image">
          <img src={img} alt="logo" />
          <p>{imgname}</p>
        </div>
        <div className="blockcardnew-content">
          <p><span>{boldtext}</span>{text}</p>
          <p id='off'>26% off</p> 
          <h4>Main highlights</h4>
          <ul id='topul'>
            <li><span>9.9</span> Building Responsive</li>
            <li><span>8.9</span> Cool</li>
            <li><span>8.9</span> Docs</li>
          </ul>
          <p>Why We love it</p>
          <ul>
            <li><i className='fa fa-check-circle bgcolor'></i> Documentation</li>
            <li><i className='fa fa-check-circle bgcolor'></i> Easy Use</li>
            <li><i className='fa fa-check-circle bgcolor'></i> Out Of Box</li>
          </ul>
          <p id='btn'>Show more <i className="fa fa-angle-down"> </i></p>
        </div>
        <div className="blockcardnew-rating">
          <div className="blockcardnew-rating-content">
            <h1>{number}</h1>
            <h4>{grade}</h4>
            <p><span><i className={className}></i></span>
            <span><i className={className}></i></span>
            <span><i className={className}></i></span>
            <span><i className={className}></i></span>
            <span><i className={className1}></i></span></p>
          </div>
          <div className="blockcardnew-rating-btn">
            <p><a href="#a">View</a></p>
          </div>
        </div>
      </div>
      </>
    )
  }

export default BlockCardNew
