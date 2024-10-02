import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import nuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat()

export default antfu(
	{
		ignores: [
		],
		stylistic: {
			indent: 'tab',
		},
		formatters: {
			css: true,
			html: true,
		},
		typescript: true,
		vue: true,
		jsonc: true,
		yaml: false,
		markdown: false,
	},
	nuxt,
	{
		ignores: [
		],
	},
	{
		rules: {
			'ts/consistent-type-definitions': ['error', 'type'],
			'node/prefer-global/process': ['error', 'always'],
			'unused-imports/no-unused-vars': 'off',
			'no-console': 'off',
			'antfu/if-newline': 'off',
			'antfu/top-level-function': 'off',
			'curly': ['error', 'all'],
			'@stylistic/comma-dangle': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/max-attributes-per-line': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-unused-vars': 'off',
			'vue/no-v-html': 'off',
		}
	},
	{
		plugins: { tailwindcss: pluginTailwindcss },
		rules: {
			...pluginTailwindcss.configs.recommended.rules,
			...{
				'tailwindcss/no-custom-classname': 'off',
				'tailwindcss/migration-from-tailwind-2': 'off',
			}
		},
	}
)
