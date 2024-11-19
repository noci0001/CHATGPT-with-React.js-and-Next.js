import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGreenTech.css';
import { useTranslation } from 'react-i18next';

const WhatGreenTech = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className="greentech__whatgreentech section__margin" id="aboutus">
      <h1 id="whatsection_title">{t('whatGreenTech.title')}</h1>
      <div className="greentech__whatgreentech-feature">
        <Feature
          title={t('whatGreenTech.aboutTitle')}
          text={t('whatGreenTech.aboutText')}
        />
      </div>
      <div className="greentech__whatgreentech-heading">
        <h1 className="gradient__text">{t('whatGreenTech.heading')}</h1>
        <p>{t('whatGreenTech.explorePortfolio')}</p>
      </div>
      <div className="greentech__whatgreentech-container">
        <Feature
          title={t('whatGreenTech.valueCreationTitle')}
          text={t('whatGreenTech.valueCreationText')}
        />
        <Feature
          title={t('whatGreenTech.innovationTitle')}
          text={t('whatGreenTech.innovationText')}
        />
        <Feature
          title={t('whatGreenTech.qualityTitle')}
          text={t('whatGreenTech.qualityText')}
        />
        <Feature
          title={t('whatGreenTech.partnerTitle')}
          text={t('whatGreenTech.partnerText')}
        />
        <Feature
          title={t('whatGreenTech.changeTitle')}
          text={t('whatGreenTech.changeText')}
        />
      </div>
    </div>
  );
};

export default WhatGreenTech;
