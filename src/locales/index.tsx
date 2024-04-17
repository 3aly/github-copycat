import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en.json";
import arTranslation from "./ar.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});
