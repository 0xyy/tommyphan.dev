import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import {
	layeredWaveTopTechDark,
	layeredWaveTopTechLight,
	layeredWaveTopTechSmallDark,
	layeredWaveTopTechSmallLight,
} from "../../assets";
import { technologies } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { SectionWrapper } from "../../helpers";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import TechCard from "../ui/TechCard";

const TechSection = () => {
	const { t } = useTranslation("tech");
	const content = (
		<>
			<p className={styles.sectionSubText}>{t("subtitle")}</p>
			<h2 className={styles.sectionHeadText}>{t("title")}</h2>
		</>
	);
	return (
		<>
			<motion.div variants={textVariant()} className="hidden md:block">
				{content}
			</motion.div>
			<div className="block md:hidden">{content}</div>

			<div className="pt- mt-20 flex flex-wrap gap-9">
				{technologies.map((tech, index) => (
					<TechCard key={`tech-${index}`} index={index} name={tech.name} icon={tech.icon} />
				))}
			</div>
		</>
	);
};

const Tech = () => {
	const { isDarkMode } = useTheme();
	const isMobile = useMediaQuery("(max-width: 640px)");

	const waveTopImage = isMobile
		? isDarkMode
			? layeredWaveTopTechSmallDark
			: layeredWaveTopTechSmallLight
		: isDarkMode
			? layeredWaveTopTechDark
			: layeredWaveTopTechLight;

	const SectionWithBackground = SectionWrapper(
		TechSection,
		"",
		undefined,
		waveTopImage,
		undefined,
		"pb-20 md:pb-32 pt-52 md:pt-96 2xl:pt-[410px]",
	);
	return <SectionWithBackground />;
};

export default Tech;
