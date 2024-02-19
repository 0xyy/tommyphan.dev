import clsx from "clsx";
import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import type { Review } from "../../constants";
import { fadeIn } from "../../utils/motion";

type ReviewCardProps = {
	index: number;
	review: Review;
};

const ReviewCard = ({ review: { name, position, review, avatar }, index }: ReviewCardProps) => {
	return (
		<motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
			<Tilt
				scale={1}
				transitionSpeed={450}
				tiltMaxAngleX={23}
				tiltMaxAngleY={23}
				className="h-full w-full rounded-2xl bg-secondary-b p-7 shadow-md sm:w-[500px]"
			>
				<div className="flex gap-4">
					<img src={avatar} alt={name} className="h-16 w-16 rounded-full" />
					<div className="flex flex-col justify-between">
						<h3 className="text-full-blue-gradient text-[22px] font-bold md:text-[27px]">{name}</h3>
						<p className="text-sm text-secondary-t">{position}</p>
					</div>
				</div>
				<blockquote className="mt-5 text-justify text-[17px] italic leading-8">
					"{review}"
				</blockquote>
			</Tilt>
		</motion.div>
	);
};

export default ReviewCard;
