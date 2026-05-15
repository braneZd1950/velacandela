import type { Locale } from '@/i18n/translations'
import { useTranslation } from '@hooks/useTranslation'

const options: { value: Locale; label: string }[] = [
  { value: 'hr', label: 'HR' },
  { value: 'en', label: 'EN' },
]

export default function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation()
  const isEn = locale === 'en'

  return (
    <div
      className="relative flex h-7 w-[72px] items-center rounded-full bg-charcoal/25 p-0.5"
      role="group"
      aria-label={t.a11y.language}
    >
      <span
        className="pointer-events-none absolute top-0.5 h-6 w-[34px] rounded-full bg-gold shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: isEn ? 'translateX(34px)' : 'translateX(2px)' }}
        aria-hidden
      />
      {options.map((opt) => {
        const active = opt.value === locale
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLocale(opt.value)}
            className={`relative z-10 flex h-6 flex-1 items-center justify-center font-body text-[10px] font-medium uppercase tracking-wider transition-colors ${
              active ? 'text-forest' : 'text-offwhite/80 hover:text-offwhite'
            }`}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
