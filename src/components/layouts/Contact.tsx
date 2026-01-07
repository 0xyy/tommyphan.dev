import { clsx } from "clsx";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { styles } from "../../styles";
import { SectionWrapper } from "../shared";

// Contact links data with Lucide icons
const contactLinks = [
	{
		name: "Email",
		href: "mailto:tommy.phan.dev@gmail.com",
		value: "tommy.phan.dev@gmail.com",
		icon: Mail,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/phan-tommy/",
		value: "Tommy Phan",
		icon: Linkedin,
	},
	{
		name: "GitHub",
		href: "https://github.com/0xyy",
		value: "0xyy",
		icon: Github,
	},
];

const ContactSection = () => {
	const { t } = useTranslation("contact");

	return (
		<div className="flex flex-col justify-between gap-20 pb-20 md:flex-row md:items-center">
			{/* Title and subtitle */}
			<div>
				<div>
					<p className={clsx(styles.sectionSubText)}>{t("subtitle")}</p>
					<h2 className={styles.sectionHeadText}>{t("title")}</h2>
				</div>

				{/* Description */}
				<p className="wrap-break-word mt-4 max-w-lg text-[17px] leading-[30px] text-secondary-t">
					{t("description")}
				</p>
			</div>
			{/* Contact links with icons */}
			<div className="bg- flex flex-col gap-10">
				{contactLinks.map((link) => {
					const Icon = link.icon;
					return (
						<a
							key={link.name}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 transition-all duration-300"
						>
							{/* Icon */}
							<div className="bg-accent-blue/10 group-hover:bg-accent-blue/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
								<Icon className="h-5 w-5 text-accent-blue" />
							</div>

							{/* Text */}
							<div className="flex flex-col">
								<span className="text-sm font-medium text-secondary-t">{link.name}</span>
								<span className="text-full-blue-gradient font-semibold group-hover:underline">
									{link.value}
								</span>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

const Contact = SectionWrapper(ContactSection, "contact", "bg-quaternary-b");

export default Contact;
