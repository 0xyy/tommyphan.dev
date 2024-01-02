import { clsx } from "clsx";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import {
	stackedWavesBottomAboutDark,
	stackedWavesBottomAboutLight,
	test,
	waveTopAboutDark,
	waveTopAboutLight,
} from "../../assets";
import { services } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { SectionWrapper } from "../../helpers";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "../ui/ServiceCard";

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
				className="text-secondary-t mt-4 max-w-3xl text-[17px] leading-[30px]"
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

	const waveTopImage = isDarkMode ? waveTopAboutDark : waveTopAboutLight;
	const waveBottomImage = isDarkMode ? stackedWavesBottomAboutDark : stackedWavesBottomAboutLight;
	const bottomImage = isMobile ? test : waveBottomImage;

	const SectionWithBackground = SectionWrapper(
		AboutSection,
		"about",
		undefined,
		waveTopImage,
		bottomImage,
		"pt-28 md:pt-36 2xl:pt-[200px] pb-40 md:pb-96 2xl:pb-[450px]",
	);
	return <SectionWithBackground />;
};

export default About;
