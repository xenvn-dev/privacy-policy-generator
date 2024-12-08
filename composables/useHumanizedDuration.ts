import humanizeDuration from 'humanize-duration'

export const useHumanizedDuration = () => {
	const { locale } = useI18n({ useScope: 'global' })

	const humanizeMinutes = (minutes: number) =>
		humanizeDuration(minutes * 60000, { language: locale.value })
	return {
		humanizeDuration,
		humanizeMinutes,
	}
}
