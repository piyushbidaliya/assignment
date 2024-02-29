import React from 'react'
import './blockcard.css'
import img from '../../asset/logo.png'
const BlockCard = ({imgname, boldtext, text, text2, number, grade, className, className1}) => {
  return (
    <div className='blockcard'>
      <div className="blockcard-image">
        <img src={img} alt="" />
        <p>{imgname}</p>
      </div>
      <div className="blockcard-content">
        <p><span>{boldtext}</span>{text}</p>
        <h4>Main highlights</h4>
        <p id='text'>{text2}</p>
        <p id='btn'>Show more <i className="fa fa-angle-down"> </i></p>
      </div>
      <div className="blockcard-rating">
        <div className="blockcard-rating-content">
          <h1>{number}</h1>
          <h4>{grade}</h4>
          <p><span><i className={className}></i></span>
          <span><i className={className}></i></span>
          <span><i className={className}></i></span>
          <span><i className={className}></i></span>
          <span><i className={className1}></i></span></p>
        </div>
        <div className="blockcard-rating-btn">
          <p><a href="#a">View</a></p>
        </div>
      </div>
    </div>
  )
}

export default BlockCard
