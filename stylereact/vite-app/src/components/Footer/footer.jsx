import React from 'react';

import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer"> 
      <div className="footer-content"> 
        <div className="footer-section about"> 
          <h2>ABC Book Store</h2> 
          <p>We are a leading bookstore offering a wide range of books for all tastes and ages. Explore our collection and find your next great read!</p> {/* Şirket açıklaması */}
        </div>
        
        <div className="footer-section links"> 
          <h3>Quick Links</h3> 
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact"> 
          <h3>Contact Us</h3>
          <p>Email: info@abcbookstore.com</p> 
          <p>Phone: +123 456 7890</p> 
          <p>Address: 123 Book St, Book City, BC</p> 
        </div>
        
        <div className="footer-section social"> 
          <h3>Follow Us</h3>
          
           <div className="social-icons"> 
           <FaFacebook />
          <FaFacebook />
          <FaFacebook />
          <FaFacebook />
           
          </div> 
        </div>
      </div>
      
      <div className="footer-bottom"> 
        &copy; 2024 ABC Book Store. All Rights Reserved. 
      </div>
    </footer>
  );
}

export default Footer;
