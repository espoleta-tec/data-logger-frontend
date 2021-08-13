import { useI18n } from 'vue-i18n'
import { MIN_TO_DAY, MIN_TO_HOUR, MIN_TO_MONTH, MIN_TO_WEEK, MIN_TO_YEAR } from 'src/utils/constants'

export function minToHumanReadableFormat(mins: number) {
  const i18n = useI18n()
  const years = Math.floor(mins / MIN_TO_YEAR)
  let rest = mins % MIN_TO_YEAR
  const months = Math.floor(rest / MIN_TO_MONTH)
  rest = rest % MIN_TO_MONTH
  const weeks = Math.floor(rest / MIN_TO_WEEK)
  rest = rest % MIN_TO_WEEK
  const days = Math.floor(rest / MIN_TO_DAY)
  rest = rest % MIN_TO_DAY
  const hours = Math.floor(rest / MIN_TO_HOUR)
  const minutes = rest % MIN_TO_HOUR

  let response = ''
  if (years) response += `${years} ${i18n.t('units.time.years', years)} `
  if (months) response += `${months} ${i18n.t('units.time.months', months)} `
  if (weeks) response += `${weeks} ${i18n.t('units.time.weeks', weeks)} `
  if (days) response += `${days} ${i18n.t('units.time.days', days)} `
  if (hours) response += `${hours} ${i18n.t('units.time.hours', hours)} `
  if (minutes) response += `${minutes} ${i18n.t('units.time.minutes', minutes)} `

  return response
}


