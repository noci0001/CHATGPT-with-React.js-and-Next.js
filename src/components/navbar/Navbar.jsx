import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="greentech__navbar">
      <div className="greentech__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="greentech__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="greentech__navbar-menu_container scale-up-center">
            <div className="greentech__navbar-menu_container-links">
              <h3>Change language to: </h3>
              <button onClick={() => changeLanguage('en')}>English</button>
              <button onClick={() => changeLanguage('it')}>Italiano</button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;