import {
	css,
	devtimate,
	devtimateLogo,
	dpkSystemLogo,
	fingowebLogo,
	git,
	html,
	itFocusLogo,
	javascript,
	nebucodeLogo,
	nestjs,
	nextjs,
	nodejs,
	omoka,
	promisLogo,
	reactNative,
	reactjs,
	redux,
	reviewAvatarOne,
	reviewAvatarTwo,
	sass,
	tailwind,
	tanstackQuery,
	tanstackRouter,
	typescript,
	zustand,
} from "../assets";

export const navLinks = ["about", "experience", "contact"] as const;

export type NavLink = (typeof navLinks)[number] | "";

export const services = [
	{
		title: "Web Development",
		icon: "web",
	},
	{
		title: "Mobile Development",
		icon: "mobile",
	},
	{
		title: "MVP & SaaS Solutions",
		icon: "rocket",
	},
	{
		title: "Product & Strategy",
		icon: "handshake",
	},
] as const;

export const experiences = [
	{
		title: "Frontend Web Developer",
		companyName: "Promis",
		icon: promisLogo,
		date: "promis.date",
		city: "promis.city",
		points: "promis.points",
	},
	{
		title: "Frontend Developer",
		companyName: "DPK System",
		icon: dpkSystemLogo,
		date: "dpk-system.date",
		city: "dpk-system.city",
		points: "dpk-system.points",
	},
	{
		title: "Backend Developer",
		companyName: "IT.focus",
		icon: itFocusLogo,
		date: "it-focus.date",
		city: "it-focus.city",
		points: "it-focus.points",
	},
	{
		title: "Full Stack Developer",
		companyName: "Nebucode",
		icon: nebucodeLogo,
		date: "nebucode.date",
		city: "nebucode.city",
		points: "nebucode.points",
	},
	{
		title: "Frontend Software Engineer",
		companyName: "Fingoweb",
		icon: fingowebLogo,
		date: "fingoweb.date",
		city: "fingoweb.city",
		points: "fingoweb.points",
	},
	{
		title: "Founder",
		companyName: "devtimate",
		icon: devtimateLogo,
		date: "devtimate.date",
		city: "devtimate.city",
		points: "devtimate.points",
	},
];

export type Experience = (typeof experiences)[number];

export const technologies = [
	{
		name: "HTML",
		icon: html,
	},
	{
		name: "CSS",
		icon: css,
	},
	{
		name: "Sass",
		icon: sass,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React.js",
		icon: reactjs,
	},
	{
		name: "React Native",
		icon: reactNative,
	},
	{
		name: "Next.js",
		icon: nextjs,
	},
	{
		name: "Tanstack Query",
		icon: tanstackQuery,
	},
	{
		name: "Tanstack Router",
		icon: tanstackRouter,
	},
	{
		name: "Zustand",
		icon: zustand,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node.js",
		icon: nodejs,
	},
	{
		name: "NestJS",
		icon: nestjs,
	},
	// {
	// 	name: "Sequelize-Typescript",
	// 	icon: sequelize,
	// },
	// {
	// 	name: "PostgreSQL",
	// 	icon: postgressql,
	// },
	// {
	// 	name: "Docker",
	// 	icon: docker,
	// },
	{
		name: "Git",
		icon: git,
	},
] as const;

export type Technology = (typeof technologies)[number]["name"];

export const projects = [
	{
		name: "devtimate",
		description: "devtimate-description",
		tags: [
			{
				name: "react",
				color: "var(--primary-t)",
			},
			{
				name: "typescript",
				color: "text-full-blue-gradient",
			},
			{
				name: "nodejs",
				color: "text-green-gradient",
			},
			{
				name: "laravel",
				color: "text-pink-gradient",
			},
		],
		image: devtimate,
		sourceCodeLink: "https://devtimate.com/",
	},
	{
		name: "omoka",
		description: "omoka-description",
		tags: [
			{
				name: "astro",
				color: "text-orange-gradient",
			},
			{
				name: "typescript",
				color: "text-full-blue-gradient",
			},
			{
				name: "scss",
				color: "text-pink-gradient",
			},
		],
		image: omoka,
		sourceCodeLink: "https://omoka.dev/",
	},
	// {
	// 	name: "Any Car",
	// 	description: "anycar-description",
	// 	tags: [
	// 		{
	// 			name: "reactjs",
	// 			color: "text-full-blue-gradient",
	// 		},

	// 		{
	// 			name: "typescript",
	// 			color: "text-full-blue-gradient",
	// 		},
	// 		{
	// 			name: "express",
	// 			color: "text-green-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "text-full-blue-gradient",
	// 		},
	// 	],
	// 	image: anyCar,
	// 	sourceCodeLink: "https://github.com/0xyy/AnyCarFront",
	// },
];

export type Project = (typeof projects)[number];

export const reviews = [
	{
		name: "Jan Puto",
		position: "Tech Programmer at Fool's Theory",
		review: "first-review",
		avatar: reviewAvatarTwo,
	},
	{
		name: "Sergiy Nimerovsky",
		position: "Software Engineer at Indeema",
		review: "second-review",
		avatar: reviewAvatarOne,
	},
];

export type Review = (typeof reviews)[number];
