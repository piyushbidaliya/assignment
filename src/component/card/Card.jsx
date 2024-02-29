import React from 'react'
import './card.css'
import img from '../../asset/logo.png'
const Card = ({text, money, money2, heading}) => {
  return (
      <div class="card">
        <img src={img} alt="logo"/>
        <div class="card-container">
          <span id='off'>20% off</span> <span id='off'>Limited time</span>
          <h4><b>{heading}</b></h4> 
          <p id='text'>{text}</p> 
          <span id='money'>{money}</span> <span id='money2'>{money2}</span> <span id='off2'>[20% off]</span>
          <p id='viewbtn'><a href="#a">View Deal</a></p>
        </div>
      </div>
  )
}

export default Card
