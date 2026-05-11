import enLocale from 'i18n-iso-countries/langs/en.json'
import {
  getName,
  getNames,
  registerLocale,
  type LocaleData,
} from 'i18n-iso-countries'

registerLocale(enLocale as LocaleData)

const sorted = Object.entries(getNames('en', { select: 'official' }))
  .map(([code, label]) => ({ value: code, label }))
  .sort((a, b) => a.label.localeCompare(b.label))

/** Placeholder + all ISO 3166-1 alpha-2 countries (English official names). */
export const COUNTRY_SELECT_OPTIONS = [
  { value: '', label: 'Select your country' },
  ...sorted,
] as const

/** Maps Country Code e.g. `NG` → `Nigeria` for register API bodies that expect a country name e.g. `country: 'Nigeria'`. */
export function countryAlpha2ToOfficialName(
  alpha2: string
): string | undefined {
  const code = String(alpha2).trim().toUpperCase()
  if (code.length !== 2) {
    return undefined
  }
  const name = getName(code, 'en', { select: 'official' })
  return name ?? undefined
}
