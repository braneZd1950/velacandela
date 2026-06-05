import type { Locale } from '@/i18n/translations'
import { translations } from '@/i18n/translations'

export function formatPrice(amount: number, locale: Locale = 'hr', currency = 'EUR') {
  const intlLocale = locale === 'hr' ? 'hr-HR' : 'en-IE'
  return new Intl.NumberFormat(intlLocale, {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatProductPrice(price: number | null, locale: Locale = 'hr') {
  if (price === null) return translations[locale].product.priceOnRequest
  return formatPrice(price, locale)
}
