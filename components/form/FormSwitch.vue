<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: false,
		default: undefined,
	},
	modelValue: {
		type: [String, Boolean],
		default: '',
	},
})

const { value, handleChange, errors } = useField(toRef(props, 'name'), undefined, {
	label: props.label,
	syncVModel: true,
})
</script>

<template>
	<v-switch
		:label="label"
		:model-value="value"
		:error-messages="errors"
		hide-details="auto"
		@update:model-value="handleChange"
	/>
</template>
