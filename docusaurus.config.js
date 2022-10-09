const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Znanje",
	tagline: "Zakaj bi pisal, če lahko bereš.",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/logo.svg",

	organizationName: "facebook",
	projectName: "docusaurus",

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
				},
			}),
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "gimnazija",
				path: "gimnazija",
				routeBasePath: "gimnazija",
				sidebarPath: require.resolve("./sidebars.js"),
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
						docsPluginId: "gimnazija",
						position: "left",
						label: "Gimnazija"
					},
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Testi',
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
								label: "Gimnazija",
								to: "/gimnazija",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/docusaurus",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/docusaurus",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/facebook/docusaurus",
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
