import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./translations/en";
import esTranslations from "./translations/es";

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
    name: 'customDetector',
    lookup() {
        const detectedLanguage = navigator.language || navigator.userLanguage;
        return detectedLanguage.split('-')[0]; // Strip the region code
    }
});

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'customDetector', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie']
        },
        resources: {
            en: {
                translation: enTranslations
            },
            es: {
                translation: esTranslations
            }
        }
    })
