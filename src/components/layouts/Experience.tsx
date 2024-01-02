import { clsx } from "clsx";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../helpers";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import ExperienceCard from "../ui/ExperienceCard";

const ExperienceSection = () => {
	const { t } = useTranslation("experience");
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={clsx(styles.sectionSubText, "text-tertiary-t")}>{t("subtitle")}</p>
				<h2 className={clsx(styles.sectionHeadText, "text-tertiary-t")}>{t("title")}</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const Experience = SectionWrapper(ExperienceSection, "experience", "bg-accent-blue");

export default Experience;
