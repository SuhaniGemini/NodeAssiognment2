import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">Logo</div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/view">View</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
