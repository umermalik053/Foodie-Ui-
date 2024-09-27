import React from 'react'
import Button from '../common/Button/Button'
import './Header.css'

const Header = () => {
  return (
    <div className='parent'>
      <div className="navbar">
        <div className="logo">
        <h1>Foodie</h1>
        </div>
        <div className="navLink">
        <ul>
          <li className=''>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className="btn-wrapper">
            <Button text="Order Now"/>
        </div>
      

      </div>
    </div>
  )
}

export default Header
