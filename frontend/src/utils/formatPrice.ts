import type { Locale } from '@/i18n/translations'

export function formatPrice(amount: number, locale: Locale = 'hr', currency = 'EUR') {
  const intlLocale = locale === 'hr' ? 'hr-HR' : 'en-IE'
  return new Intl.NumberFormat(intlLocale, {
    style: 'currency',
    currency,
  }).format(amount)
}
