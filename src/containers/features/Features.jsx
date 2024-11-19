import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  // Define translated features dynamically
  const featuresData = [
    {
      title: t('features.technologicalInnovationTitle'),
      text: t('features.technologicalInnovationText'),
    },
    {
      title: t('features.environmentalSustainabilityTitle'),
      text: t('features.environmentalSustainabilityText'),
    },
    {
      title: t('features.qualityReliabilityTitle'),
      text: t('features.qualityReliabilityText'),
    },
    {
      title: t('features.customizationFlexibilityTitle'),
      text: t('features.customizationFlexibilityText'),
    },
    {
      title: t('features.globalImpactTitle'),
      text: t('features.globalImpactText'),
    },
  ];

  return (
    <div className="greentech__features section__padding" id="features">
      <div className="greentech__features-heading">
        <h1 className="gradient__text">{t('features.heading')}</h1>
        <p>{t('features.description')}</p>
      </div>
      <div className="greentech__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
