import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { Platform } from 'react-native';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import ko from './ko.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

// Detect language based on platform
const getDeviceLanguage = () => {
  if (Platform.OS === 'web') {
    // Browser language detection is handled by i18next-browser-languagedetector automatically if used,
    // but we can also fallback to Localization.getLocales() for consistency.
    return Localization.getLocales()[0].languageCode;
  } else {
    // Native app language detection
    return Localization.getLocales()[0].languageCode;
  }
};

const initI18n = async () => {
  const lang = getDeviceLanguage() || 'ko';

  const i18nInstance = i18n.use(initReactI18next);

  // Use browser detector only on web
  if (Platform.OS === 'web') {
    i18nInstance.use(LanguageDetector);
  }

  await i18nInstance.init({
    resources,
    lng: lang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: false,
    },
  });
};

initI18n();

export default i18n;
