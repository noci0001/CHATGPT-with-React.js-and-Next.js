import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import italian_flag from '../../assets/flags/Italian_flag.png';
import english_flag from '../../assets/flags/english_flag.png';
import './navbar.css';
import { useTranslation } from 'react-i18next';

//!!! CREA LOGO
//!!! Posizione Google Maps
//!!! Google MyBusiness
//!!! Privacy Policy
//!!! 2 domini -> gwtech.it e greenwavestech.it
//!!! Morsettiere e connettori
//!!! BOM -> Bill of Materials
//DONE linehieght adjust

//DONE  when hovered, other panels lower their contrast

//Numero di ricezione => 384 8443102
//DONE EMAIL => info@gwtech.it

// FIX donwards scroll

// LOGO? =>

//DONE FIX SPELLING ITALIAN VERSION => GREENWAVES TECHNOLOGIES

const Navbar = () => {
  const { i18n } = useTranslation(); // Access i18n instance
  const [toggleMenu, setToggleMenu] = useState(false); // Track toggle state

  const handleLanguageToggle = () => {
    if (toggleMenu) {
      i18n.changeLanguage('en'); // Change to English
    } else {
      i18n.changeLanguage('it'); // Change to Italian
    }
    setToggleMenu(!toggleMenu); // Toggle the menu state
  };

  return (
    <div className="greentech__navbar">
      <div className="greentech__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="greentech__navbar-menu">
        <img
          width="25px"
          src={toggleMenu ? italian_flag : english_flag}
          alt="language toggle"
          onClick={handleLanguageToggle}
        />
      </div>
    </div>
  );
};

export default Navbar;