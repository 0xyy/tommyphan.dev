import { clsx } from "clsx";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import {
	stackedWavesBottomAboutDark,
	stackedWavesBottomAboutLight,
	stackedWavesBottomAboutSmallDark,
	stackedWavesBottomAboutSmallLight,
	waveTopAboutDark,
	waveTopAboutLight,
	waveTopAboutSmallDark,
	waveTopAboutSmallLight,
} from "../../assets";
import { services } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { ServiceCard } from "../common";
import { SectionWrapper } from "../shared";

const AboutSection = () => {
	const { t } = useTranslation("about");

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={clsx(styles.sectionSubText)}>{t("subtitle")}</p>
				<h2 className={styles.sectionHeadText}>{t("title")}</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary-t"
			>
				{t("description")}
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={`service-${index}`} index={index} {...service} />
				))}
			</div>
		</>
	);
};

const About = () => {
	const { isDarkMode } = useTheme();
	const isMobile = useMediaQuery("(max-width: 640px)");

	const waveTopImage = isMobile
		? isDarkMode
			? waveTopAboutSmallDark
			: waveTopAboutSmallLight
		: isDarkMode
			? waveTopAboutDark
			: waveTopAboutLight;

	const waveBottomImage = isMobile
		? isDarkMode
			? stackedWavesBottomAboutSmallDark
			: stackedWavesBottomAboutSmallLight
		: isDarkMode
			? stackedWavesBottomAboutDark
			: stackedWavesBottomAboutLight;

	const SectionWithBackground = SectionWrapper(
		AboutSection,
		"about",
		undefined,
		waveTopImage,
		waveBottomImage,
		"pt-[300px] xs:pt-[380px] md:pt-[400px] lg:pt-[450px] xl:pt-[550px] 2xl:pt-[650px] 3xl:pt-[950px] pb-40 md:pb-96 xl:pb-[550px] 2xl:pt-[650px] 3xl:pb-[850px]",
	);
	return <SectionWithBackground />;
};

export default About;
