// https://nuxt.com/docs/api/configuration/nuxt-config

import { theme } from './tailwind.config.js'

export default defineNuxtConfig({
	runtimeConfig: {
		public: {},
	},
	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/sitemap',
		'@vueuse/nuxt',
		'@invictus.codes/nuxt-vuetify',
		'@nuxt/eslint'
	],
	css: [
		'@fontsource/roboto/300.css',
		'@fontsource/roboto/400.css',
		'@fontsource/roboto/700.css',
		'@fontsource/amaranth/400.css',
		'@fontsource/amaranth/700.css',
		'@mdi/font/css/materialdesignicons.css',
	],
	vite: {
		css: {
			devSourcemap: true,
		},
	},

	// eslint module config (see https://eslint.nuxt.com/packages/module)
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		}
	},

	// I18n module config (see https://github.com/nuxt-modules/i18n)
	i18n: {
		locales: [
			{
				code: 'de',
				name: 'Deutsch',
				file: 'de.json',
			},
			{
				code: 'en',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'it',
				name: 'Italiano',
				file: 'it.json',
			},
			{
				code: 'fr',
				name: 'Français',
				file: 'fr.json',
			},
		],
		detectBrowserLanguage: {
			useCookie: false,
			alwaysRedirect: true,
		},
		strategy: 'prefix',
		langDir: 'locales',
		defaultLocale: 'en',
		compilation: {
			strictMessage: false,
		},
		customRoutes: 'config',
		pages: {
			'privacy-policy': {
				de: '/datenschutzerklaerung',
				it: '/informativa-sulla-privacy',
			},
		},
	},

	// https://nuxt.com/modules/nuxt-vuetify
	vuetify: {
		/* vuetify options */
		vuetifyOptions: {
			theme: {
				defaultTheme: 'light',
				themes: {
					light: {
						dark: false,
						colors: {
							'surface': theme.colors.primary[100],
							'background': '#ffffff',
							'primary': theme.colors.primary.DEFAULT,
							'primary-light': theme.colors.primary.light,
							'primary-dark': theme.colors.primary.dark,
							'secondary': theme.colors.neutral.DEFAULT,
							'secondary-light': theme.colors.neutral.light,
							'secondary-dark': theme.colors.neutral.dark,
						},
					},
					dark: {
						dark: true,
						colors: {
							'surface': '#1a2128',
							'background': '#191919',
							'on-surface-variant': '#1a2128',
							'primary': theme.colors.primary.DEFAULT,
							'secondary': '#4d4d4d',
							'secondary-light': '#777777',
							'secondary-dark': theme.colors.neutral.dark,
						},
					},
				},
			},
			defaults: {
				VBtnToggle: {
					color: 'primary',
					divided: true,
				},
				VBtn: {
					color: 'primary',
				},
				VCard: {
					tag: 'section',
				},
				VContainer: {
					tag: 'section',
				},
				VAlert: {
					tag: 'section',
				},
				VExpansionPanels: {
					variant: 'popout',
					tag: 'section',
				},
				VExpansionPanelTitle: {
					color: 'secondary',
				},
				VTextField: {
					// variant: 'default'
				},
				VTabs: {
					bgColor: 'primary',
					showArrows: true,
					centerActive: true,
				},
				VChipGroup: {
					selectedClass: 'bg-primary',
					column: true,
				},
			},
		},

		moduleOptions: {
			/* nuxt-vuetify module options */
			treeshaking: true,
			useIconCDN: false,

			/* vite-plugin-vuetify options */
			styles: true,
			autoImport: true,
			useVuetifyLabs: false,
		},
	},

	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			'tailwindcss': {},
			'autoprefixer': {},
		},
	},

	// Global page headers (https://nuxt.com/docs/api/configuration/nuxt-config/#head)
	app: {
		head: {
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			/* 			link: [
				{
					rel: 'preload',
					as: 'font',
					href: '/fonts/woff2/ForzaSSm-Book_Web.woff2',
					crossorigin: 'anonymous',
				},
			], */
		},
	},

	// Sitemap module config (see https://nuxtseo.com/sitemap)
	site: {
		url: 'https://privacy-policy-generator.web.florist',
	},

	sitemap: {
		discoverImages: false,
		discoverVideos: false,
		autoI18n: false,

	},

	// Nitro Config (See https://nitro.unjs.io/config)
	nitro: {
		prerender: {
			failOnError: true,
			crawlLinks: true,
		},
	},

	compatibilityDate: '2024-07-10',
})
