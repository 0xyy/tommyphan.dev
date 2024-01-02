import { type ReactNode, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { useLocalStorageState } from "../hooks/useLocalStorageState";

type ThemeState = {
	isDarkMode: boolean;
};

type ThemeContextValue = ThemeState & {
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeContextProviderProps = {
	children: ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
		window.matchMedia("(prefers-color-scheme: dark)").matches,
		"isDarkMode",
	);
	const { t } = useTranslation("theme");

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.removeAttribute("data-theme");
		}
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((isDark: boolean) => !isDark);

		toast.dismiss();

		toast(!isDarkMode ? t("dark-mode") : t("light-mode"), {
			icon: !isDarkMode ? "🌙" : "☀️",
			duration: 1000,
		});
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("ThemeContext used outside provider");
	return context;
};

export { ThemeContextProvider, useTheme };
