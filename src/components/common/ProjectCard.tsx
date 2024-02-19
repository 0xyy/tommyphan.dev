import { clsx } from "clsx";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";

import { github } from "../../assets";
import { Project } from "../../constants";
import { fadeIn } from "../../utils/motion";

type ProjectCardProps = {
	project: Project;
	index: number;
};

const ProjectCard = ({
	index,
	project: { name, description, tags, image, sourceCodeLink },
}: ProjectCardProps) => {
	const { t } = useTranslation("projects");

	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				scale={1}
				transitionSpeed={450}
				tiltMaxAngleX={23}
				tiltMaxAngleY={23}
				className="w-full rounded-2xl bg-secondary-b p-5 shadow-md sm:w-[360px]"
			>
				<div className="relative h-[230px] w-full">
					<img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
					<div className="card-img_hover absolute inset-0 m-3 flex justify-end">
						<div
							onClick={() => window.open(sourceCodeLink, "_blank")}
							className="black-gradient flex h-7 w-7 cursor-pointer items-center justify-center rounded-full"
						>
							<img
								src={github}
								alt="github"
								className="w-full rounded-full bg-black object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-full-blue-gradient text-[24px] font-bold">{name}</h3>
					<p className="mt-2 text-[14px] text-secondary-t">{t(description)}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={clsx("text-[14px]", tag.color)}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

export default ProjectCard;
