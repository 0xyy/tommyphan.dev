import { clsx } from "clsx";
import { motion } from "framer-motion";

import { ComponentType, FC } from "react";

import { NavLink } from "../constants";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper =
	(
		Component: ComponentType,
		idName: NavLink,
		bg?: string,
		wave1?: string,
		wave2?: string,
		paddingY?: string,
	): FC =>
	() => {
		return (
			<div className={clsx(bg && bg, "relative z-0")}>
				{wave1 && <img src={wave1} alt="waves" className="absolute top-0 -z-20 h-fit w-full" />}
				<motion.section
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.25 }}
					className={clsx(
						styles.paddingX,
						paddingY ? paddingY : styles.paddingY,
						"relative z-0 mx-auto max-w-7xl",
					)}
				>
					<span className="hash-span" id={idName}>
						&nbsp;
					</span>

					<Component />
				</motion.section>
				{wave2 && <img src={wave2} alt="waves" className="absolute bottom-0 -z-20 h-fit w-full" />}
			</div>
		);
	};

export default SectionWrapper;