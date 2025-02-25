import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    common: {
                        goBackAction: "Go back"
                    },
                    home: {
                        title: "Home page"
                    },
                    about: {
                        title: "About me page"
                    },
                    proyects: {
                        title: "Proyects page"
                    },
                }
            },
            es: {
                translation: {
                    common: {
                        goBackAction: "Volver"
                    },
                    home: {
                        title: "Página de inicio"
                    },
                    about: {
                        title: "Página sobre mi"
                    },
                    proyects: {
                        title: "Página proyectos"
                    }
                }
            }
        }
    })
