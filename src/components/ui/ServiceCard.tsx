import { motion } from "framer-motion";

import { Database, PanelsTopLeft, PencilLine, TabletSmartphone } from "lucide-react";
import Tilt from "react-parallax-tilt";

import { fadeIn } from "../../utils/motion";

const iconMap = {
	web: PanelsTopLeft,
	mobile: TabletSmartphone,
	database: Database,
	pencil: PencilLine,
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
			className="xs:w-[250px] w-full"
			scale={1}
			transitionSpeed={450}
			tiltMaxAngleX={23}
			tiltMaxAngleY={23}
		>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="bg-secondary-b w-full rounded-2xl p-1 shadow-md"
			>
				<div className="flex min-h-[280px] flex-col items-center justify-evenly px-12 py-5">
					<Icon size={40} className="text-primary-blue" />
					<h3 className=" text-full-blue-gradient text-center text-xl font-bold">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

export default ServiceCard;
