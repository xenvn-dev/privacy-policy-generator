<script setup lang="ts">
import { useTheme } from 'vuetify'
const { locale: currentLocale, locales: availableLocales, localeProperties } = useI18n()
const theme = useTheme()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const toggleTheme = () =>
	(theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark')

const themeIcon = computed(() =>
	theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
)
</script>

<template>
	<v-app-bar tag="header" :elevation="2" border="b">
		<template #prepend>
			<v-app-bar-nav-icon>
				<NuxtLink
					:to="'/' + currentLocale"
					class="unstyled"
					:title="$t('general.back_to_home')"
				>
					<span class="sr-only">{{ $t('general.back_to_home') }}</span>
					<img :alt="$t('images.favicon.alt')" src="/favicon.svg" class="w-32" />
				</NuxtLink>
			</v-app-bar-nav-icon>
		</template>
		<template #append>
			<v-btn
				icon="mdi-github"
				tag="a"
				href="https://github.com/webflorist/privacy-policy-generator"
				target="_blank"
				class="on-background"
				:title="$t('general.goto_github')"
			></v-btn>
			<v-btn
				:icon="themeIcon"
				class="on-background"
				:title="$t('general.switch_theme')"
				@click="toggleTheme"
			></v-btn>
			<v-divider vertical class="mx-3"></v-divider>
			<v-menu>
				<template #activator="{ props }">
					<v-btn color="primary" variant="elevated" v-bind="props">
						<v-icon icon="mdi-web" class="mr-2"></v-icon>
						{{ localeProperties.name }}
					</v-btn>
				</template>

				<v-list>
					<v-list-item
						v-for="locale in availableLocales"
						:key="locale.code"
						@click="router.push({ path: switchLocalePath(locale.code) })"
					>
						<v-list-item-title>
							{{ locale.name }}
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</template>
	</v-app-bar>
</template>
