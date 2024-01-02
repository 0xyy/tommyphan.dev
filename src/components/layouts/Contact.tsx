import emailjs from "@emailjs/browser";
import { clsx } from "clsx";
import { motion } from "framer-motion";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../context/ThemeProvider";
import { SectionWrapper } from "../../helpers";
import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import EarthCanvas from "../canvas/Earth";

const ContactSection = () => {
	const formRef = useRef<null | HTMLFormElement>(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const { isDarkMode } = useTheme();
	const { t } = useTranslation("contact");

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Tommy",
					from_email: form.email,
					to_email: "tommyphan2004.tp@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_EMAIL_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					setForm({
						name: "",
						email: "",
						message: "",
					});
					toast.success(t("form-success"));
				},
				(error) => {
					setLoading(false);
					console.log(error);
					toast.error(t("form-error"));
				},
			);
	};

	return (
		<div className="flex flex-col-reverse justify-between gap-10 overflow-hidden xl:mt-12 xl:flex-row">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="bg-primary-b flex-[0.80] rounded-2xl p-8 shadow-xl"
			>
				<p className={styles.sectionSubText}>{t("subtitle")}</p>
				<h3 className={styles.sectionHeadText}>{t("title")}</h3>

				<div className="flex w-full">
					<p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
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

				<form ref={formRef} onSubmit={submitHandler} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-primary-t mb-4 font-medium">{t("name")}</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={changeHandler}
							placeholder={t("name-placeholder")}
							className="text-primary-t placeholder:text-secondary-t bg-secondary-b rounded-lg border-none px-3 py-4 font-medium shadow-md outline-none md:px-6"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-primary-t mb-4 font-medium">{t("email")}</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={changeHandler}
							placeholder={t("email-placeholder")}
							className="text-primary-t placeholder:text-secondary-t bg-secondary-b rounded-lg border-none px-3 py-4 font-medium shadow-md outline-none md:px-6"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-primary-t mb-4 font-medium">{t("message")}</span>
						<textarea
							rows={8}
							name="message"
							value={form.message}
							onChange={changeHandler}
							placeholder={t("message-placeholder")}
							className="text-primary-t placeholder:text-secondary-t bg-secondary-b resize-none rounded-lg border-none px-3 py-4 font-medium shadow-md outline-none md:px-6"
						/>
					</label>

					<button
						type="submit"
						className={clsx(
							isDarkMode ? "hover:bg-secondary-blue" : "hover:bg-primary-blue",
							"text-tertiary-t w-fit rounded-xl bg-accent-blue px-8 py-3 font-bold shadow-xl outline-none transition-colors",
						)}
					>
						{loading ? t("submitting") : t("submit")}
					</button>
				</form>
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
