<script setup lang="ts">
import { defineRule } from 'vee-validate'

const emit = defineEmits<{
	(e: 'hasErrors', state: boolean): void
}>()
const { t } = useI18n({ useScope: 'global' })
const countries = useCountries()
const settings = useSettings()

defineRule('name_or_org_required', (_value, _target, ctx) => {
	if (ctx.form.name || ctx.form.organization) {
		return true
	}
	return t('errors.name_or_org_required')
})

const { errors } = useForm({
	validationSchema: {
		name: 'name_or_org_required',
		email: 'required|email',
		street: 'required',
		zip: 'required',
		city: 'required',
		country: 'required',
	},
	validateOnMount: true,
})

const hasErrors = computed(() => Object.keys(errors.value).length > 0)

watch(hasErrors, (newHasErrors) => {
	emit('hasErrors', newHasErrors)
})
</script>

<template>
	<p>{{ $t('settings.data_controller.description') }}</p>
	<form>
		<FormTextField
			v-model="settings.dataController.organization"
			:label="$t('settings.data_controller.fields.organization.title')"
			name="organization"
		/>
		<FormTextField
			v-model="settings.dataController.name"
			:label="$t('settings.data_controller.fields.name.title')"
			name="name"
		/>
		<FormTextField
			v-model="settings.dataController.street"
			:label="$t('settings.data_processings.fields.processor.street.title')"
			name="street"
		/>
		<FormTextField
			v-model="settings.dataController.zip"
			:label="$t('settings.data_processings.fields.processor.zip.title')"
			name="zip"
		/>
		<FormTextField
			v-model="settings.dataController.city"
			:label="$t('settings.data_processings.fields.processor.city.title')"
			name="city"
		/>
		<FormSelectField
			v-model="settings.dataController.country"
			autocomplete
			:label="$t('settings.data_processings.fields.processor.country.title')"
			name="country"
			:items="countries.getOptions()"
		/>
		<FormTextField
			v-model="settings.dataController.email"
			:label="$t('settings.data_controller.fields.email.title')"
			name="email"
			type="email"
		/>
		<FormTextField
			v-model="settings.dataController.phone"
			:label="$t('settings.data_controller.fields.phone.title')"
			name="phone"
			type="tel"
		/>
	</form>
</template>
