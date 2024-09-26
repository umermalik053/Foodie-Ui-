import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <div>
      <button className='dynamicBtn'>{text}</button>
    </div>
  )
}

export default Button
