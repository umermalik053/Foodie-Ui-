import React from 'react'
import './Card.css'


const Card = ({data}) => {
  return (
    <div>
      <div className="card-wrapper">
        <div className="cardHead">
            <h2 >{data.title}</h2>
        </div>
        <div className="cardBody">
            <img width={150} src={data.icon}  /> 
  </div>

  <div className="cardFoot">
            <p>{data.text}</p>
  </div>
  <div className="cardButton">
            <button className='cardbtn'>Learn More</button>
            </div>

      </div>
    </div>
  )
}

export default Card
