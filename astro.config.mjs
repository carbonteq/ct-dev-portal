// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					// Wrap the heading text in a link.
					behavior: "wrap",
				},
			],
		],
	},
	integrations: [
		starlight({
			title: "Carbonteq Developer Portal",
			logo: {
				light: "./src/assets/logo-light.svg",
				dark: "./src/assets/logo-dark.svg",
			},
			favicon: "public/favicon.svg",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			customCss: [
				"./src/fonts/vactorySansFontFace.css",
				"./src/fonts/kgHappyFontFace.css",
				"./src/styles/custom.css",
				"./src/tailwind.css",
				"./src/styles/headings.css",
			],

			sidebar: [
				{
					label: "Portal Intro",
					items: [
						{ label: "❄️ Overview", slug: "index" },
						{ label: "📖 How We Learn", slug: "about-us/learningatcarbonteq" },
						{ label: "👻How We Critique", slug: "about-us/howwecritique" },
					],
				},
				{
					label: "Best Practices & Principles",
					items: [
						{ label: "Overview", slug: "best-practices/overview" },
						{
							label: "Solid Principles",
							slug: "best-practices/solid",
						},
						{
							label: "Javascript/Typescript",
							slug: "best-practices/javascript",
						},

						{
							label: "Backend",
							items: [
								{
									label: "Best Practices",
									slug: "best-practices/backend/best_practices",
								},
								{
									label: "Principles",
									slug: "best-practices/backend/principles",
								},
								{
									label: "Architecture",
									slug: "best-practices/backend/architecture",
								},
								{
									label: "Stack/Tooling",
									slug: "best-practices/backend/stack_tooling",
								},
							],
						},

						{
							label: "Frontend",
							items: [
								{
									label: "Best Practices",
									slug: "best-practices/frontend/best_practices",
								},
								{
									label: "Principles",
									slug: "best-practices/frontend/principles",
								},
								{
									label: "Architecture",
									slug: "best-practices/frontend/architecture",
								},
								{
									label: "Stack/Tooling",
									slug: "best-practices/frontend/stack_tooling",
								},
							],
						},

						{
							label: "Proposals",
							slug: "best-practices/proposals/template",
						},
					],
				},
				{
					label: "Training",
					items: [
						{
							label: "Backend - TypeScript",
							items: [
								{
									label: "Headless Document Management",
									slug: "training/backend-typescript/headless-doc-management",
								},
								{
									label: "CQRS Booking",
									slug: "training/backend-typescript/cqrs-booking",
								},
								{
									label: "Todo App",
									badge: "Deprecated",
									slug: "training/backend-typescript/todo",
								},
							],
						},
						{
							label: "Frontend - React",
							items: [
								{
									label: "POS Application",
									slug: "training/frontend-react/pos-application",
								},
								{
									label: "Ant Design Chart Customization",
									slug: "training/frontend-react/antd-chart-customization",
								},
								{
									label: "Calendar Carousel",
									slug: "training/frontend-react/calendarcarousal",
								},
								{
									label: "GitHub Search",
									slug: "training/frontend-react/githubsearch",
								},
								{
									label: "User Search",
									slug: "training/frontend-react/usersearch",
								},
							],
						},
						{
							label: "Architecture",
							items: [
								{
									label: "Real Estate System Design",
									slug: "training/architecture/realestatesystemdesign",
								},
							],
						},
						{
							label: "Devops",
							items: [
								{
									label: "Build Your Own K8s Container",
									slug: "training/devops/build_your_own_k8_container",
								},
							],
						},
						{
							label: "Quality Assurance",
							items: [
								{
									label: "Task for Mobile QA Automation",
									slug: "training/quality-assurance/qa-automation",
								},
								{
									label: "Task for Web QA Automation",
									slug: "training/quality-assurance/qa-web",
								},
							],
						},
					],
				},
				{
					label: "Build Your Own X",
					items: [
						{
							label: "Backend",
							items: [
								{
									label: "Build Your Own Single Sign On Server",
									slug: "build-your-own-x/backend/byo-sso",
								},
							],
						},
						{
							label: "Cloud Architectural Patterns",
							items: [
								{
									label: "Circuit Breaker",
									slug: "build-your-own-x/cloud-architectural-patterns/circuitbreaker",
								},
								{
									label: "Priority Queue",
									slug: "build-your-own-x/cloud-architectural-patterns/priorityqueue",
								},
								{
									label: "Rate Limiter",
									slug: "build-your-own-x/cloud-architectural-patterns/ratelimiter",
								},
							],
						},
						{
							label: "Frontend",
							items: [
								{
									label: "Virtual DOM",
									slug: "build-your-own-x/frontend/virtual_dom",
								},
							],
						},
						{
							label: "General",
							items: [
								{
									label: "Forth Interpreter",
									slug: "build-your-own-x/general/forth_interpreter",
								},
							],
						},
						{
							label: "Graphics",
							items: [
								{
									label: "Interpolation",
									slug: "build-your-own-x/graphics/interpolation",
								},
								{
									label: "Minimum Bounding Box",
									slug: "build-your-own-x/graphics/minimumboundingbox",
								},
								{
									label: "Point in Polygon",
									slug: "build-your-own-x/graphics/pointinpolygon",
								},
							],
						},
						{
							label: "Networking",
							items: [
								{
									label: "DNS Client",
									slug: "build-your-own-x/networking/dns_client",
								},
								{
									label: "Network Scanner",
									slug: "build-your-own-x/networking/networkscanner",
								},
								{
									label: "Peer-to-Peer Communications",
									slug: "build-your-own-x/networking/peertopeercommunications",
								},
								{
									label: "TCP Tunnel",
									slug: "build-your-own-x/networking/tcp_tunnel",
								},
								{
									label: "WebSockets",
									slug: "build-your-own-x/networking/websockets",
								},
							],
						},
					],
				},

				{
					label: "Learning Resources",
					items: [
						{
							label: "Frontend",
							items: [
								{
									label: "Beginner",
									items: [
										{
											label: "Courses",
											slug: "learning-resources/frontend/beginner/courses",
										},
										{
											label: "Blogs, Videos & Tools",
											slug: "learning-resources/frontend/beginner/tutorials",
										},
									],
								},
								{
									label: "Advanced",
									items: [
										{
											label: "Courses",
											slug: "learning-resources/frontend/advanced/courses",
										},
										{
											label: "Blogs, Videos & Tools",
											slug: "learning-resources/frontend/advanced/tutorials",
										},
									],
								},
								{
									label: "Utilities",
									slug: "learning-resources/frontend/utilities",
								},
							],
						},
					],
				},
			],
		}),
		mdx(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
