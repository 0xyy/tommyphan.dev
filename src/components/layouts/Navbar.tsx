import { clsx } from "clsx";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { styles } from "../../styles";

const Navbar = () => {
	const { t, i18n } = useTranslation("navbar");
	const currentLanguage = i18n.resolvedLanguage;

	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("");
	const { isDarkMode, toggleTheme } = useTheme();

	const changeLanguageHandler = () => {
		i18n.changeLanguage(currentLanguage === "en" ? "pl" : "en");
	};

	const languageButton = (
		<button
			className="text-md text-primary-t font-bold hover:text-accent-blue"
			onClick={changeLanguageHandler}
		>
			<span>{currentLanguage === "en" ? "PL" : "EN"}</span>
		</button>
	);

	const themeButton = (
		<button onClick={toggleTheme}>
			{isDarkMode ? (
				<Sun className="text-primary-t hover:text-accent-blue" size={20} />
			) : (
				<Moon className="text-primary-t hover:text-accent-blue" size={20} />
			)}
		</button>
	);

	return (
		<nav
			className={clsx(
				"border-secondary-b fixed z-20 flex w-full items-center border-b-2 bg-transparent py-5 backdrop-blur-lg backdrop-filter",
			)}
		>
			<div
				className={clsx(
					styles.paddingX,
					"mx-auto flex w-full max-w-7xl items-center justify-between",
				)}
			>
				<Link to="/">
					<p className="text-blue-gradient cursor-pointer text-lg font-bold md:text-xl">
						tommyphan.dev
					</p>
				</Link>

				{/* desktop navigation */}
				<div className="hidden gap-9 md:flex">
					<ul className="flex list-none gap-9">
						{navLinks.map((link) => (
							<li
								className={clsx(
									link === active ? "text-blue-gradient" : "text-primary-t",
									"text-md cursor-pointer font-semibold hover:text-accent-blue",
								)}
								key={link}
								onClick={() => setActive(link)}
							>
								<a href={`#${link}`}>{t(link)}</a>
							</li>
						))}
					</ul>
					{languageButton}
					<button onClick={toggleTheme}>
						{isDarkMode ? (
							<Sun className="text-primary-t hover:text-accent-blue" size={20} />
						) : (
							<Moon className="text-primary-t hover:text-accent-blue" size={20} />
						)}
					</button>
				</div>

				{/* mobile navigation */}
				<div className="flex flex-1 items-center justify-end md:hidden">
					{isOpen ? (
						<button onClick={() => setIsOpen(false)}>
							<X
								size={25}
								className="text-blue-gradient hover:text-blue-accent transition-colors"
							/>
						</button>
					) : (
						<button onClick={() => setIsOpen(true)}>
							<Menu
								size={25}
								className="text-blue-gradient hover:text-blue-accent transition-colors"
							/>
						</button>
					)}
					<div
						className={clsx(
							!isOpen ? "hidden" : "flex",
							"bg-secondary-b absolute top-20 z-10 mx-4 my-1 min-w-[140px] flex-col gap-3 rounded-xl p-6 shadow-lg",
						)}
					>
						<ul className="flex list-none flex-col items-end justify-center gap-4">
							{navLinks.map((link) => (
								<li
									className={clsx(
										link === active ? "text-blue-gradient" : "text-primary-t",
										"text-md cursor-pointer font-semibold transition-colors hover:text-accent-blue",
									)}
									key={link}
									onClick={() => {
										setIsOpen(false);
										setActive(link);
									}}
								>
									<a href={`#${link}`}>{t(link)}</a>
								</li>
							))}
						</ul>
						<div className="flex items-center justify-end gap-3">
							{languageButton}
							{themeButton}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
