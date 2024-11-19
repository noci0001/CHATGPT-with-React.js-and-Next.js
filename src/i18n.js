import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
   .use(initReactI18next)
   .init({
      resources: {
         en: { translation: require('./locales/en/translation.json') },
         it: { translation: require('./locales/it/translation.json') },
      },
      lng: 'en', // Default language
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
   });

export default i18n;

