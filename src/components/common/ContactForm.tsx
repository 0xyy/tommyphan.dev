import emailjs from "@emailjs/browser";
import { clsx } from "clsx";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../context/ThemeProvider";

const ContactForm = () => {
	const { t } = useTranslation("contact");
	const formRef = useRef<null | HTMLFormElement>(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { isDarkMode } = useTheme();

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message) {
			setError(t("validation-error"));
			return;
		}

		setError("");
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
		<form ref={formRef} onSubmit={submitHandler} className="mt-12 flex flex-col gap-8">
			<label className="flex flex-col">
				<span className="mb-4 font-medium text-primary-t">{t("name")}</span>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={changeHandler}
					placeholder={t("name-placeholder")}
					className="rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
				/>
			</label>
			<label className="flex flex-col">
				<span className="mb-4 font-medium text-primary-t">{t("email")}</span>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={changeHandler}
					placeholder={t("email-placeholder")}
					className="rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
				/>
			</label>
			<label className="flex flex-col">
				<span className="mb-4 font-medium text-primary-t">{t("message")}</span>
				<textarea
					rows={8}
					name="message"
					value={form.message}
					onChange={changeHandler}
					placeholder={t("message-placeholder")}
					className="resize-none rounded-lg border-none bg-secondary-b px-3 py-4 font-medium text-primary-t shadow-md outline-none placeholder:text-secondary-t md:px-6"
				/>
			</label>

			{error && <p className="font-semibold text-red-600 dark:text-red-600">{error}</p>}

			<button
				type="submit"
				className={clsx(
					isDarkMode ? "hover:bg-secondary-blue" : "hover:bg-primary-blue",
					"w-fit rounded-xl bg-accent-blue px-8 py-3 font-bold text-tertiary-t shadow-xl outline-none transition-colors",
				)}
			>
				{loading ? t("submitting") : t("submit")}
			</button>
		</form>
	);
};

export default ContactForm;
