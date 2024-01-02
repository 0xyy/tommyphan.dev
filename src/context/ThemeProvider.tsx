import { type ReactNode, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

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

		toast(!isDarkMode ? "Hello Darkness!" : "Hello Sunshine!", {
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
