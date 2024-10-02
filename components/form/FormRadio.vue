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
		type: String,
		default: '',
	},
})

const { value, handleChange, errors } = useField(toRef(props, 'name'), undefined, {
	label: props.label,
	syncVModel: true,
})
</script>

<template>
	<v-radio-group
		:label="label"
		:model-value="value"
		:error-messages="errors"
		hide-details="auto"
		@update:model-value="handleChange"
	>
		<v-radio :model-value="value" @update:model-value="handleChange">
			<template #label>
				{{ label }}
			</template>
		</v-radio>
	</v-radio-group>
</template>
