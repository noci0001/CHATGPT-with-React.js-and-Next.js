import React from 'react';
import GreenTechLogo from '../../assets/GreenTechLogo.png';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="greentech__footer section__padding">
      <div className="greentech__footer-heading">
        <h1 className="gradient__text">{t('footer.title')}</h1>
      </div>

      <div className="greentech__footer-btn">
        <a href='https://calendly.com/d/cqng-fvd-psc?primary_color=00ff05'><p>{t('footer.contactUs')}</p></a>
      </div>

      <div className="greentech__footer-links">
        <div className="greentech__footer-links_logo">
          <img src={GreenTechLogo} alt={t('footer.logoAlt')} />
          <p>{t('footer.address')} <br /> {t('footer.rightsReserved')}</p>
        </div>
        <div className="greentech__footer-links_div">
          <h4>{t('footer.links')}</h4>
          <p>{t('footer.overons')}</p>
          <p>{t('footer.socialMedia')}</p>
          <p>{t('footer.contact')}</p>
        </div>
        <div className="greentech__footer-links_div">
          <h4>{t('footer.company')}</h4>
          <p>{t('footer.terms')}</p>
          <p>{t('footer.privacy')}</p>
          <p>{t('footer.contact')}</p>
        </div>
        <div className="greentech__footer-links_div">
          <h4>{t('footer.getInTouch')}</h4>
          <p>{t('footer.fullAddress')}</p>
          <p>{t('footer.phone')}</p>
          <p>{t('footer.email')}</p>
        </div>
      </div>

      <div className="greentech__footer-copyright">
        <p>{t('footer.copyright')}</p>
        <p>
          {t('footer.codedBy')} <a target="_blank" rel="noopener noreferrer" href="https://www.samuelnocita.com/">
            Samuel Nocita
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
