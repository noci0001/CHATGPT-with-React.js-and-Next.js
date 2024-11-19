import React from 'react';
import './cta.css';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="greentech__cta">
      <div className="greentech__cta-content">
        <p>{t('cta.contact')}</p>
        <h3>{t('cta.writeToday')}</h3>
      </div>
      <div className="greentech__cta-btn">
        <button type="button">{t('cta.getStarted')}</button>
      </div>
    </div>
  );
};

export default CTA;
