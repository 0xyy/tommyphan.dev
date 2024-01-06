import { clsx } from "clsx";
import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { Technology } from "../../constants";
import { fadeIn } from "../../utils/motion";

type TechCardProps = {
	name: Technology;
	icon: string;
	index: number;
};

const TechCard = ({ name, icon, index }: TechCardProps) => {
	const cardStyle = "w-[160px] sm:w-[180px] md:w-[250px]";
	const content = (
		<div className="flex min-h-[160px] flex-col items-center justify-evenly px-12 py-5 sm:min-h-[180px]">
			<img
				src={icon}
				alt={name}
				className="h-[45px] w-[45px] object-contain sm:h-[65px] sm:w-[65px]"
			/>
			<h3 className="text-full-blue-gradient text-center text-sm font-bold sm:text-lg md:text-xl">
				{name}
			</h3>
		</div>
	);

	return (
		<>
			<Tilt
				className={clsx(cardStyle, "hidden md:block")}
				scale={1}
				transitionSpeed={450}
				tiltMaxAngleX={23}
				tiltMaxAngleY={23}
			>
				<motion.div
					variants={fadeIn("down", "spring", 0.1 * index, 0.75)}
					className="w-full rounded-2xl bg-secondary-b p-1 shadow-md"
				>
					{content}
				</motion.div>
			</Tilt>

			<div className={clsx(cardStyle, "w-full rounded-2xl bg-secondary-b p-1 shadow-md md:hidden")}>
				{content}
			</div>
		</>
	);
};

export default TechCard;
