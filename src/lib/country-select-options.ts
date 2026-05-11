import enLocale from 'i18n-iso-countries/langs/en.json'
import {
  getName,
  getNames,
  registerLocale,
  type LocaleData,
} from 'i18n-iso-countries'

registerLocale(enLocale as LocaleData)

const names = getNames('en', { select: 'official' })

export function countryAlpha2ToOfficialName(
  alpha2: string
): string | undefined {
  const c = alpha2.trim().toUpperCase()
  if (c.length !== 2) {
    return undefined
  }
  return getName(c, 'en', { select: 'official' })
}

export const COUNTRY_SELECT_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'Select your country' },
  ...Object.entries(names)
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label, 'en')),
]
