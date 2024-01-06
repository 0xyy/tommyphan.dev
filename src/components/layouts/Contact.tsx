import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import { EarthCanvas } from "../canvas";
import { ContactForm } from "../common";
import { SectionWrapper } from "../shared";

const ContactSection = () => {
	const { t } = useTranslation("contact");

	return (
		<div className="flex flex-col-reverse justify-between gap-10 overflow-hidden xl:mt-12 xl:flex-row">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.80] rounded-2xl bg-primary-b p-8 shadow-xl"
			>
				<p className={styles.sectionSubText}>{t("subtitle")}</p>
				<h3 className={styles.sectionHeadText}>{t("title")}</h3>

				<div className="flex w-full">
					<p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary-t">
						{t("description")}
						<a
							href="mailto:tommyphan2004.tp@gmail.com"
							target="_blank"
							className="text-full-blue-gradient cursor-pointer font-semibold"
						>
							Email
						</a>
						,{" "}
						<a
							href="https://www.linkedin.com/in/tommy04/"
							target="_blank"
							className="text-full-blue-gradient cursor-pointer font-semibold"
						>
							LinkedIn
						</a>{" "}
						{t("form-info")}
					</p>
				</div>

				<ContactForm />
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="h-[200px] md:h-[300px] xl:h-auto xl:w-[550px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

const Contact = SectionWrapper(ContactSection, "contact", "bg-quaternary-b");

export default Contact;
