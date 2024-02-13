import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json'; // استبدال 'en.json' بملف الترجمة الإنجليزي
import translationAR from './locales/ar.json'; // استبدال 'ar.json' بملف الترجمة العربي


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation:translationAR
      }
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // لا تفريغ القيمة
    }
  });
  export default i18n;