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
	return (
		<Tilt
			className="xs:w-[180px] w-full sm:w-[250px]"
			scale={1}
			transitionSpeed={450}
			tiltMaxAngleX={23}
			tiltMaxAngleY={23}
		>
			<motion.div
				variants={fadeIn("down", "spring", 0.1 * index, 0.75)}
				className="bg-secondary-b w-full rounded-2xl p-1 shadow-md"
			>
				<div className="flex min-h-[160px] flex-col items-center justify-evenly px-12 py-5 sm:min-h-[180px]">
					<img
						src={icon}
						alt={name}
						className="h-[55px] w-[55px] object-contain sm:h-[65px] sm:w-[65px]"
					/>
					<h3 className="text-full-blue-gradient text-center text-sm font-bold sm:text-lg md:text-xl">
						{name}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default TechCard;
