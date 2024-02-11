import { motion } from "framer-motion";

import { Database, PanelsTopLeft, Smartphone, TabletSmartphone } from "lucide-react";
import Tilt from "react-parallax-tilt";

import { fadeIn } from "../../utils/motion";

const iconMap = {
	web: PanelsTopLeft,
	mobile: TabletSmartphone,
	database: Database,
	smartphone: Smartphone,
};

type ServiceCardProps = {
	index: number;
	title: string;
	icon: keyof typeof iconMap;
};

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
	const Icon = iconMap[icon];

	return (
		<Tilt
			className="w-full sm:w-[230px] md:w-[250px]"
			scale={1}
			transitionSpeed={450}
			tiltMaxAngleX={23}
			tiltMaxAngleY={23}
		>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full rounded-2xl bg-secondary-b p-1 shadow-md"
			>
				<div className="flex min-h-[140px] flex-col items-center justify-evenly px-12 py-5 sm:min-h-[280px]">
					<Icon className="h-[30px] w-[30px] text-primary-blue sm:h-[40px] sm:w-[40px]" />
					<h3 className="text-full-blue-gradient text-md text-center font-bold sm:text-lg md:text-xl">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default ServiceCard;
