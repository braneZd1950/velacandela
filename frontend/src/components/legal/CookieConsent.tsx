import { Link } from 'react-router-dom'
import { useCookieConsentStore } from '@/store/cookieConsentStore'
import { useTranslation } from '@hooks/useTranslation'

export default function CookieConsent() {
  const { t } = useTranslation()
  const { hasDecided, accept } = useCookieConsentStore()

  if (hasDecided) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[200] border-t border-cream/20 bg-charcoal/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 id="cookie-consent-title" className="mb-2 font-display text-xl text-offwhite">
            {t.cookieConsent.title}
          </h2>
          <p className="font-body text-sm leading-relaxed text-cream/85">{t.cookieConsent.intro}</p>
          <p className="mt-2 font-body text-xs text-cream/60">
            <Link to="/kolacici" className="text-gold underline-offset-2 hover:underline">
              {t.footer.cookies}
            </Link>
            {' · '}
            <Link to="/privatnost" className="text-gold underline-offset-2 hover:underline">
              {t.footer.privacy}
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 bg-forest px-6 py-3 font-body text-xs uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
        >
          {t.cookieConsent.accept}
        </button>
      </div>
    </div>
  )
}
