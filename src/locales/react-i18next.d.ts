import { type defaultLanguage } from "@/locales/i18n";
import { type resources } from "@/locales/resources";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)[typeof defaultLanguage];
		returnNull: false;
	}
}
