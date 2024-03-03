import {
	anyCar,
	css,
	docker,
	dpkSystemLogo,
	fingowebLogo,
	git,
	html,
	itFocusLogo,
	javascript,
	mogoWebsite,
	nebucodeLogo,
	nestjs,
	nextjs,
	nodejs,
	postgressql,
	promisLogo,
	reactjs,
	reactquery,
	redux,
	reviewAvatarOne,
	reviewAvatarTwo,
	sass,
	sequelize,
	swiftShop,
	tailwind,
	typescript,
} from "../assets";

export const navLinks = ["about", "experience", "contact"] as const;

export type NavLink = (typeof navLinks)[number] | "";

export const services = [
	{
		title: "Web Developer",
		icon: "web",
	},
	{
		title: "React/Next Developer",
		icon: "mobile",
	},
	{
		title: "React Native Developer",
		icon: "smartphone",
	},
	{
		title: "Backend Developer",
		icon: "database",
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
		title: "Frontend Developer",
		companyName: "Fingoweb",
		icon: fingowebLogo,
		date: "fingoweb.date",
		city: "fingoweb.city",
		points: "fingoweb.points",
	},
];

export type Experience = (typeof experiences)[number];

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
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
		name: "Next.js",
		icon: nextjs,
	},
	{
		name: "React.js",
		icon: reactjs,
	},
	{
		name: "React Query",
		icon: reactquery,
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
	{
		name: "Sequelize-Typescript",
		icon: sequelize,
	},
	{
		name: "PostgreSQL",
		icon: postgressql,
	},
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "Git",
		icon: git,
	},
] as const;

export type Technology = (typeof technologies)[number]["name"];

export const projects = [
	{
		name: "Swift Shop",
		description: "swift-shop-description",
		tags: [
			{
				name: "nextjs",
				color: "var(--primary-t)",
			},
			{
				name: "typescript",
				color: "text-full-blue-gradient",
			},
			{
				name: "tailwind",
				color: "text-green-gradient",
			},
			{
				name: "graphql",
				color: "text-pink-gradient",
			},
		],
		image: swiftShop,
		sourceCodeLink: "https://github.com/0xyy/swift-shop",
	},
	{
		name: "Mogo Website",
		description: "mogo-website-description",
		tags: [
			{
				name: "html",
				color: "text-orange-gradient",
			},
			{
				name: "css",
				color: "text-full-blue-gradient",
			},
			{
				name: "scss",
				color: "text-pink-gradient",
			},
		],
		image: mogoWebsite,
		sourceCodeLink: "https://github.com/0xyy/mogo-website",
	},
	{
		name: "Any Car",
		description: "anycar-description",
		tags: [
			{
				name: "reactjs",
				color: "text-full-blue-gradient",
			},

			{
				name: "typescript",
				color: "text-full-blue-gradient",
			},
			{
				name: "express",
				color: "text-green-gradient",
			},
			{
				name: "css",
				color: "text-full-blue-gradient",
			},
		],
		image: anyCar,
		sourceCodeLink: "https://github.com/0xyy/AnyCarFront",
	},
];

export type Project = (typeof projects)[number];

export const reviews = [
	{
		name: "Jan Puto",
		position: "Senior Gameplay Programmer at THE PARASIGHT",
		review: "first-review",
		avatar: reviewAvatarTwo,
	},
	{
		name: "Sergiy Nimerovsky",
		position: "Mid Node.js Backend Developer at Nebucode",
		review: "second-review",
		avatar: reviewAvatarOne,
	},
];

export type Review = (typeof reviews)[number];
