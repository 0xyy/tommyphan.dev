import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { waveBottomProjectsDark, waveBottomProjectsLight } from "../../assets";
import { projects } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { ProjectCard } from "../common";
import { SectionWrapper } from "../shared";

const ProjectsSection = () => {
	const { t } = useTranslation("projects");

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>{t("subtitle")}</p>
				<h2 className={styles.sectionHeadText}>{t("title")}</h2>
			</motion.div>

			<div className="flex w-full">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary-t"
				>
					{t("description")}
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} project={project} index={index} />
				))}
			</div>
		</>
	);
};

const Projects = () => {
	const { isDarkMode } = useTheme();
	const waveBottomImage = isDarkMode ? waveBottomProjectsDark : waveBottomProjectsLight;
	const SectionWithBackground = SectionWrapper(
		ProjectsSection,
		"",
		undefined,
		undefined,
		waveBottomImage,
		"pt-14 sm:pt-20  md:pt-32 pb-40 md:pb-96 2xl:pb-[450px]",
	);
	return <SectionWithBackground />;
};

export default Projects;
