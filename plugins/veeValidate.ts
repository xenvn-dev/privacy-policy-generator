import { localize, setLocale } from '@vee-validate/i18n'
import de from '@vee-validate/i18n/dist/locale/de.json'

import en from '@vee-validate/i18n/dist/locale/en.json'
import { email, numeric, one_of, required, url } from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
	configure({
		generateMessage: localize({
			en,
			de,
		}),
	})

	watch(nuxtApp.$i18n.locale, newLocale => setLocale(newLocale), {
		immediate: true,
	})

	defineRule('required', required)
	defineRule('email', email)
	defineRule('url', url)
	defineRule('numeric', numeric)
	defineRule('one_of', one_of)
})
