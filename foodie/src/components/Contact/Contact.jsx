import React from 'react'
import Button from '../common/Button/Button'
import { contact } from '../../utils/constant'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contactParent">
            <div className="section1">
                <h2>{contact.title}</h2>
                <p>{contact.text}</p>
            </div>
            <div className="section2">
                <ul>
                    <li>{contact.tel}</li>
                    <li>{contact.email}</li>
                    <li>{contact.location}</li>
                

                </ul>
            </div>
            <div className="section3">
                <Button text="Contact Us"/>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
