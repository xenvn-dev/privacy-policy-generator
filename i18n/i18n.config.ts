import { de as vuetifyDe, en as vuetifyEn, fr as vuetifyFr, it as vuetifyIt } from 'vuetify/locale'
import de from './locales/de.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'

export default defineI18nConfig(() => ({
	globalInjection: true,
	legacy: false,
	fallbackLocale: 'en',
	messages: {
		de: {
			...de,
			$vuetify: vuetifyDe,
		},
		en: {
			...en,
			$vuetify: vuetifyEn,
		},
		fr: {
			...fr,
			$vuetify: vuetifyFr,
		},
		it: {
			...it,
			$vuetify: vuetifyIt,
		},

	},
}))
