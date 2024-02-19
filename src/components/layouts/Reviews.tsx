import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { blobBottomReviewsDark, blobBottomReviewsLight } from "../../assets";
import { reviews } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { ReviewCard } from "../common";
import { SectionWrapper } from "../shared";

const ReviewsSection = () => {
	const { t } = useTranslation("reviews");

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>{t("subtitle")}</p>
				<h2 className={styles.sectionHeadText}>{t("title")}</h2>
			</motion.div>

			<div className="flex w-full">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary-t"
				>
					{t("description")}
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap justify-between gap-10">
				{reviews.map((review, index) => (
					<ReviewCard key={`review-${index}`} review={review} index={index} />
				))}
			</div>
		</>
	);
};

const Reviews = () => {
	const { isDarkMode } = useTheme();
	const blobBottomImage = isDarkMode ? blobBottomReviewsDark : blobBottomReviewsLight;
	const SectionWithBackground = SectionWrapper(
		ReviewsSection,
		"",
		undefined,
		undefined,
		blobBottomImage,
		"pt-14 sm:pt-20 pb-40 md:pb-72 2xl:pb-[440px]",
	);
	return <SectionWithBackground />;
};

export default Reviews;
