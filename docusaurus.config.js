const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Znanje",
	tagline: "Zakaj bi pisal, če lahko bereš.",
	url: "https://znanje.tk",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/logo.svg",

	organizationName: "LovroG05",
	projectName: "Znanje",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: "testi",
					routeBasePath: "testi",
					sidebarPath: require.resolve("./sidebars.js"),
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				}
			}),
		],
	],

	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity:
				'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "gimnazija",
				path: "gimnazija",
				routeBasePath: "gimnazija",
				sidebarPath: require.resolve("./sidebars.js"),
				remarkPlugins: [math],
				rehypePlugins: [katex],
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "racunalnistvo",
				path: "racunalnistvo",
				routeBasePath: "racunalnistvo",
				sidebarPath: require.resolve("./sidebars.js"),
				remarkPlugins: [math],
				rehypePlugins: [katex],
			},
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Znanje",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docsVersion",
						docsPluginId: "racunalnistvo",
						position: "left",
						label: "Računalništvo",
					},
					{
						type: "docsVersion",
						docsPluginId: "gimnazija",
						position: "left",
						label: "Gimnazija",
					},
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Testi",
					},
					{
						href: "https://github.com/LovroG05/znanje",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Programi",
						items: [
							{
								label: "Računalništvo",
								to: "/racunalnistvo",
							},
							{
								label: "Gimnazija",
								to: "/gimnazija",
							},
						],
					},
					{
						title: "Uporabne zadeve",
						items: [
							{
								label: "Bewiesen",
								href: "https://play.google.com/store/apps/details?id=com.neleks.bewiesen",
							},
							{
								label: "vFinder",
								href: "https://vfinder.janhar.si",
							},
							{
								label: "Vegova Urniki",
								href: "https://v.sync.si",
							},
						],
					},
					{
						title: "Kontakt",
						items: [
							{
								label: "Github",
								href: "https://github.com/LovroG05/znanje",
							},
							{
								label: "@LovroG05",
								href: "https://perchperkins.ml/",
							},
							{
								label: "@chocoearly44",
								href: "https://github.com/chocoearly44",
							},
							{
								label: "@gapidobri",
								href: "https://github.com/gapidobri",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Znanje. Od vegovcov za vas.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
