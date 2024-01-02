import i18next from "i18next";

import { initReactI18next } from "react-i18next/initReactI18next";

import { resources } from "./resources";

type Language = keyof typeof resources;
export const defaultLanguage: Language = "en";

void i18next.use(initReactI18next).init({
	resources,
	fallbackLng: defaultLanguage,
	ns: Object.keys(resources[defaultLanguage]),
});
