import React from 'react';
import people from '../../assets/people.png';
import './header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="greentech__header hero__padding" id="home">
      <div className="greentech__header-content">
        <h1 className="title">
          {t('header.title')} <br />
          {t('header.subtitle')}
        </h1>
        <p>
          {t('header.description')}
        </p>
      </div>
      <div className='navpad__container'></div>
      <div className="navpad">
        <div className="div1"><a href="#home">{t('nav.home')}</a></div>
        <div className="div2"><a href="#aboutus">{t('nav.aboutUs')}</a></div>
        <div className="div3"><a href="#features">{t('nav.services')}</a></div>
        <div className="div4"><a href="#contacts">{t('nav.contact')}</a></div>
        <div className="div5"><a href="#blog">{t('nav.blog')}</a></div>
        <div className="div6"><a href="#careers">{t('nav.careers')}</a></div>
        <div className="div7"><a href="#partners">{t('nav.partners')}</a></div>
      </div>
    </div>
  );
};

export default Header;
