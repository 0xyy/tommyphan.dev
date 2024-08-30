import { clsx } from "clsx";
import { motion } from "framer-motion";

import { Mouse } from "lucide-react";
import { useTranslation } from "react-i18next";

import { blackCurveArrow, whiteCurveArrow } from "../../assets";
import { useTheme } from "../../context/ThemeProvider";
import { styles } from "../../styles";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../utils/motion";
import { ShibaCanvas } from "../canvas";

const Hero = () => {
	const { t } = useTranslation("hero");
	const { isDarkMode } = useTheme();
	return (
		<>
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={clsx(
					styles.paddingX,
					"align-center mx-auto flex max-w-7xl flex-col gap-4 overflow-hidden pt-20 md:pt-40 lg:gap-8",
				)}
			>
				<div className="h-fit w-full lg:h-auto">
					<motion.div variants={textVariant(0.4)}>
						<h1 className={clsx(styles.heroHeadText, "text-left md:text-center")}>
							<span>{t("greetings")}! 👋 </span>
							<br className="block md:hidden" />
							<span className="text-blue-gradient">{t("introduction")}</span>
							<br />
							<span className="text-empty-stroke">Software Engineer</span>
						</h1>
					</motion.div>

					<motion.p
						variants={fadeIn("", "", 0.3, 1)}
						className="text-md mt-10 w-full  text-left text-primary-t md:text-center md:text-xl"
					>
						<span className="leading-10">{t("intro")}</span>
						<span className="leaading-10 text-blue-gradient font-bold">{t("much-more")}</span>
						<span className="leading-10">{t("description")} 📈</span>
					</motion.p>
				</div>

				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="mt-5 flex select-none flex-col items-center"
				>
					<div className="flex w-fit translate-x-1/3 items-start ">
						<img
							src={isDarkMode ? whiteCurveArrow : blackCurveArrow}
							alt="Curved arrow"
							className="-mt-[6px]"
						/>
						<p className="-ml-2 text-sm font-medium italic text-primary-t">{t("dog")}</p>
					</div>
					<div className="h-[200px] w-[250px] lg:h-[250px] lg:w-[350px]">
						<ShibaCanvas />
					</div>
				</motion.div>

				<motion.p
					variants={fadeIn("", "", 0.3, 1)}
					className="mt-10 flex justify-start text-sm text-primary-t md:justify-center"
				>
					<span className="flex items-center gap-2">
						<Mouse className="text-primary-t" /> {t("scroll")}
					</span>
				</motion.p>
			</motion.section>
		</>
	);
};

export default Hero;
