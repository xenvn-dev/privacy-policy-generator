<script setup lang="ts">
const props = defineProps({
	settings: {
		type: Object as () => GeneratorSettings,
		required: true,
	},
})

const { getCountryName } = useCountries()

const locale = computed(() => props.settings.general.language)
const t = (keypath: string) => useI18n({ useScope: 'global' }).t(keypath, 1, { locale: locale.value })

const usesBrowserStore = computed(() =>
	Object.values(props.settings.dataProcessings).some(category =>
		category.some(process => process.browserStore && process.browserStore.length > 0)
	)
)
</script>

<template>
	<h1>{{ t('privacy_policy.title') }}</h1>
	<p>{{ t('privacy_policy.intro_content.p1') }}</p>
	<p>{{ t('privacy_policy.intro_content.p2') }}</p>

	<section>
		<h2>{{ t('privacy_policy.gdpr_rights.title') }}</h2>
		<i18n-t keypath="privacy_policy.gdpr_rights.content.p1" :locale="locale" tag="p" />
		<ul>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li1.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li1.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li2.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li2.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li3.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li3.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li4.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li4.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li5.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li5.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li6.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li6.text') }}
			</li>
			<li>
				<strong>{{ t('privacy_policy.gdpr_rights.content.ul1.li7.strong') }}</strong>
				{{ t('privacy_policy.gdpr_rights.content.ul1.li7.text') }}
			</li>
		</ul>
	</section>

	<section>
		<h2>{{ t('privacy_policy.data_controller.title') }}</h2>
		<p>{{ t('privacy_policy.data_controller.content.p1') }}</p>
		<address>
			<template v-if="settings.dataController.organization">
				{{ settings.dataController.organization }}<br>
			</template>
			<template v-if="settings.dataController.name">
				{{ settings.dataController.name }}<br>
			</template>
			<template v-if="settings.dataController.street">
				{{ settings.dataController.street }}<br>
			</template>
			<template v-if="settings.dataController.zip && settings.dataController.city">
				{{ settings.dataController.zip }} {{ settings.dataController.city }}<br>
			</template>
			<template v-if="settings.dataController.country">
				{{ getCountryName(settings.dataController.country, locale) }}<br>
			</template>
			<template v-if="settings.dataController.email">
				<a :href="`mailto:${settings.dataController.email}`">{{ settings.dataController.email }}<br></a>
			</template>
			<template v-if="settings.dataController.phone">
				<a :href="`tel:${settings.dataController.phone}`">{{
					settings.dataController.phone
				}}</a>
			</template>
		</address>
	</section>

	<section>
		<h2>{{ t('privacy_policy.security.title') }}</h2>
		<p>{{ t('privacy_policy.security.content.p1') }}</p>
		<p>{{ t('privacy_policy.security.content.p2') }}</p>
	</section>

	<section>
		<h2>{{ t('privacy_policy.browser_store.title') }}</h2>

		<p v-if="!usesBrowserStore">
			{{ t('privacy_policy.browser_store.no_browser_store_content.p1') }}
		</p>
		<template v-else>
			<p>{{ t('privacy_policy.browser_store.content.p1') }}</p>
			<p>{{ t('privacy_policy.browser_store.content.p2') }}</p>
			<p>{{ t('privacy_policy.browser_store.content.p3') }}</p>
			<p>{{ t('privacy_policy.browser_store.content.p4') }}</p>
		</template>
	</section>

	<section>
		<h2>{{ t('privacy_policy.data_processing.title') }}</h2>

		<p>{{ t('privacy_policy.data_processing.content.p1') }}</p>
		<p>{{ t('privacy_policy.data_processing.content.p2') }}</p>
		<p>{{ t('privacy_policy.data_processing.content.p3') }}</p>
		<section
			v-if="Object.entries(settings.dataProcessings.webhosting).length > 0"
			id="process-webhosting"
		>
			<h3>{{ t('privacy_policy.data_processing.webhosting.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.webhosting.content.p1') }}</p>
			<ul>
				<li>
					{{ t('privacy_policy.data_processing.webhosting.content.ul1.li1') }}
				</li>
				<li>
					{{ t('privacy_policy.data_processing.webhosting.content.ul1.li2') }}
				</li>
				<li>
					{{ t('privacy_policy.data_processing.webhosting.content.ul1.li3') }}
				</li>
				<li>
					{{ t('privacy_policy.data_processing.webhosting.content.ul1.li4') }}
				</li>
			</ul>
			<p>{{ t('privacy_policy.data_processing.webhosting.content.p2') }}</p>
			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="webhosting"
				:items="settings.dataProcessings.webhosting"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.tagmanager).length > 0"
			id="process-tagmanager"
		>
			<h3>{{ t('privacy_policy.data_processing.tagmanager.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.tagmanager.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.tagmanager.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="tagmanager"
				:items="settings.dataProcessings.tagmanager"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.analytics).length > 0"
			id="process-analytics"
		>
			<h3>{{ t('privacy_policy.data_processing.analytics.title') }}</h3>

			<p>{{ t('privacy_policy.data_processing.analytics.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.analytics.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="analytics"
				:items="settings.dataProcessings.analytics"
			/>
		</section>

		<section v-if="Object.entries(settings.dataProcessings.maps).length > 0" id="process-maps">
			<h3>{{ t('privacy_policy.data_processing.maps.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.maps.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.maps.content.p2') }}</p>
			<p>{{ t('privacy_policy.data_processing.maps.content.p3') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="maps"
				:items="settings.dataProcessings.maps"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.videos).length > 0"
			id="process-videos"
		>
			<h3>{{ t('privacy_policy.data_processing.videos.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.videos.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.videos.content.p2') }}</p>
			<p>{{ t('privacy_policy.data_processing.videos.content.p3') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="videos"
				:items="settings.dataProcessings.videos"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.emails).length > 0"
			id="process-emails"
		>
			<h3>{{ t('privacy_policy.data_processing.send_emails.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.send_emails.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.send_emails.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="emails"
				:items="settings.dataProcessings.emails"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.payment).length > 0"
			id="process-payment"
		>
			<h3>{{ t('privacy_policy.data_processing.payment.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.payment.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.payment.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="payment"
				:items="settings.dataProcessings.payment"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.advertising).length > 0"
			id="process-advertising"
		>
			<h3>{{ t('privacy_policy.data_processing.advertising.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.advertising.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.advertising.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="advertising"
				:items="settings.dataProcessings.advertising"
			/>
		</section>

		<section
			v-if="Object.entries(settings.dataProcessings.booking).length > 0"
			id="process-booking"
		>
			<h3>{{ t('privacy_policy.data_processing.booking.title') }}</h3>
			<p>{{ t('privacy_policy.data_processing.booking.content.p1') }}</p>
			<p>{{ t('privacy_policy.data_processing.booking.content.p2') }}</p>

			<PrivacyPolicyDataProcessings
				:locale="settings.general.language"
				category="booking"
				:items="settings.dataProcessings.booking"
			/>
		</section>
	</section>

	<section>
		<h2>{{ t('privacy_policy.outgoing_links.title') }}</h2>
		<p>{{ t('privacy_policy.outgoing_links.content.p1') }}</p>
	</section>
</template>
