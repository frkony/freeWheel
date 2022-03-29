import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import tr from './tr';

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};
i18next
  .use(initReactI18next) //passes i18 down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'tr',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18next;
