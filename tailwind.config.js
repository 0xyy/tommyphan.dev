/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-t": "var(--primary-t)",
				"secondary-t": "var(--secondary-t)",
				"tertiary-t": "var(--tertiary-t)",
				"primary-b": "var(--primary-b)",
				"secondary-b": "var(--secondary-b)",
				"tertiary-b": "var(--tertiary-b)",
				"quaternary-b": "var(--quaternary-b)",
				"primary-blue": "var(--primary-blue)",
				"secondary-blue": "var(--secondary-blue)",
				"accent-blue": "var(--accent-blue)",
			},
			screens: {
				xs: "450px",
				"2xs": "561px",
				"3xl": "2300px",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
		},
	},
	plugins: [],
};
