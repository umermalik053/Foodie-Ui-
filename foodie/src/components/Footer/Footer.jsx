import React from "react";
import './Footer.css';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="section1Footer">
          <div className="delivery">
            <h2>Delivery</h2>
            <p>Order Products Faster Easier</p>
          </div>
          <div className="services">
            <h2>Our Services</h2>
            <ul>
                <li>Pricing</li>
                <li>Discounts</li>
                <li>Report a Bug</li>
                <li>Terms of Service</li>
            </ul>
          </div>
          <div className="company">
            <h2>Our Company</h2>
            <ul>
                <li>Blog</li>
                <li>Our Mission</li>
                <li>Get in Touch</li>
            </ul>
          </div>
          <div className="community">
            <h2>Community</h2>
            <ul>
                <li>Support</li>
                <li>Questions</li>
                <li>Customer Help</li>
            </ul>
          </div>
          <div className="socialIcon">
            <ul>
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><AiFillInstagram/></li>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
