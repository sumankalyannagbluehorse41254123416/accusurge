"use client"
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
      <div className="container md:px-10 mx-auto">
        <div className="logo">
          <a href="#">
            <img src="images/medical-equipment-logo.png" alt="Medical Equipment" />
          </a>
        </div>
        <div id="mainListDiv" className={`main_list ${isMenuOpen ? 'show_list' : ''}`}>
          <ul className="navlinks">
            <li><a href="#">About</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Brand</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <span className={`navTrigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;