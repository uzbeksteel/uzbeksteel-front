import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const languages = ['ru', 'uz', 'уз'];

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'уз',
        supportedLngs: languages,
        detection: {
            order: ['querystring', 'localStorage', 'cookie', 'navigator'],
            caches: ['localStorage', 'cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
