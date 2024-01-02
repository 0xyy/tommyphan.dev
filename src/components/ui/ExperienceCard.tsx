import { useTranslation } from "react-i18next";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Experience } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";

type ExperienceCardProps = {
	experience: Experience;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const { t } = useTranslation("experience");
	const { isDarkMode } = useTheme();
	const cardColor = isDarkMode ? "var(--secondary-blue)" : "var(--primary-blue)";

	return (
		<VerticalTimelineElement
			contentStyle={{
				background: cardColor,
				color: "var(--tertiary-t)",
			}}
			contentArrowStyle={{ borderRight: `7px solid ${cardColor}` }}
			date={t(experience.date)}
			icon={
				<div className="flex h-full w-full items-center justify-center rounded-full">
					<img
						src={experience.icon}
						alt={experience.companyName}
						className="h-full rounded-full object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-tertiary-t text-[24px] font-bold">{experience.title}</h3>
				<p className="text-tertiary-t text-[16px] font-semibold" style={{ margin: 0 }}>
					{experience.companyName}
				</p>
			</div>

			<ul className="list-dist ml-5 mt-5 space-y-3">
				{t(experience.points, { returnObjects: true }).map((point: string, index: number) => (
					<li
						key={`experience-point-${index}`}
						className="text-tertiary-t pl-1 text-[14px] tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

export default ExperienceCard;
