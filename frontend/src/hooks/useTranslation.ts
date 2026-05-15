import { useEffect } from 'react'
import { translations, type Locale } from '@/i18n/translations'
import { useLocaleStore } from '@store/localeStore'

export function useTranslation() {
  const locale = useLocaleStore((s) => s.locale)
  const setLocale = useLocaleStore((s) => s.setLocale)
  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return { locale, setLocale, t }
}

export function useLocale(): Locale {
  return useLocaleStore((s) => s.locale)
}
