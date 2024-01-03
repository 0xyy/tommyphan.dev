import { clsx } from "clsx";
import { motion } from "framer-motion";

import { Mouse } from "lucide-react";
import { useTranslation } from "react-i18next";

import { blackCurveArrow, whiteCurveArrow } from "../../assets";
import { useTheme } from "../../context/ThemeProvider";
import { styles } from "../../styles";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../utils/motion";
import ShibaCanvas from "../canvas/Shiba";

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
					"mx-auto flex max-w-7xl flex-col justify-between gap-4 overflow-hidden pt-20  md:pt-40 lg:flex-row lg:gap-8 ",
				)}
			>
				<div className="h-fit pr-10 lg:h-auto">
					<motion.div variants={textVariant(0.4)}>
						<h1 className={clsx(styles.heroHeadText)}>
							<span>
								{t("greetings")}! 👋 <br className="block md:hidden" />
							</span>{" "}
							<br className="hidden lg:block" />
							<span className="text-blue-gradient">{t("introduction")}</span>
							<br />
							<span className="text-empty-stroke">
								Frontend <br className="hidden lg:block" /> Developer
							</span>
						</h1>
					</motion.div>
					<motion.p
						variants={fadeIn("", "", 0.3, 1)}
						className="text-md mt-10 max-w-2xl text-primary-t md:mt-20 md:text-xl lg:max-w-lg"
					>
						<span className="leading-10">{t("intro")}</span>
						<span className="leaading-10 text-blue-gradient font-bold">{t("much-more")}</span>
						<span className="leading-10">{t("description")} 📈</span>
					</motion.p>

					<motion.p
						variants={fadeIn("", "", 0.3, 1)}
						className="mt-10 text-sm text-primary-t md:mt-20"
					>
						<span className="flex items-center gap-2">
							<Mouse className="text-primary-t" /> {t("scroll")}
						</span>
					</motion.p>
				</div>

				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="relative h-[300px] w-full md:h-[350px] lg:h-auto lg:w-[390px] xl:w-[550px]"
				>
					<div className="absolute left-1/2 top-5 flex items-start md:top-10 lg:right-0">
						<img
							src={isDarkMode ? whiteCurveArrow : blackCurveArrow}
							alt="Curved arrow"
							className="-mt-[6px]"
						/>
						<p className="-ml-2 text-sm font-medium italic text-primary-t">{t("dog")}</p>
					</div>
					<div className="absolute bottom-0 h-2/3 w-full lg:h-4/5">
						<ShibaCanvas />
					</div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default Hero;
