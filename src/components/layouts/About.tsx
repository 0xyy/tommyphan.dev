import { clsx } from "clsx";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import {
	stackedWavesBottomAboutDark,
	stackedWavesBottomAboutLight,
	waveTopAboutDark,
	waveTopAboutLight,
} from "../../assets";
import { services } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { SectionWrapper } from "../../helpers";
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
				className="text-secondary-t py- mt-4 max-w-3xl text-[17px] leading-[30px]"
			>
				{t("description")}
			</motion.p>

			<div className="pb- mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={`service-${index}`} index={index} {...service} />
				))}
			</div>
		</>
	);
};

const About = () => {
	const { isDarkMode } = useTheme();
	const waveTopImage = isDarkMode ? waveTopAboutDark : waveTopAboutLight;
	const waveBottomImage = isDarkMode ? stackedWavesBottomAboutDark : stackedWavesBottomAboutLight;
	const SectionWithBackground = SectionWrapper(
		AboutSection,
		"about",
		undefined,
		waveTopImage,
		waveBottomImage,
		"pt-28 md:pt-36 2xl:pt-[200px] pb-40 md:pb-96 2xl:pb-[450px]",
	);
	return <SectionWithBackground />;
};

export default About;
