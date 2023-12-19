import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hi from './hi.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'hi',
  fallbackLng: 'hi',
  compatibilityJSON: 'v3',
  interpolation:{
    escapeValue: false
  }
});