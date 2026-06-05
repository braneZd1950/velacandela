import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookieConsentStore } from '@/store/cookieConsentStore'
import { useTranslation } from '@hooks/useTranslation'

export default function CookieConsent() {
  const { t } = useTranslation()
  const {
    hasDecided,
    analytics,
    marketing,
    showSettings,
    acceptAll,
    rejectOptional,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsentStore()

  const [draftAnalytics, setDraftAnalytics] = useState(analytics)
  const [draftMarketing, setDraftMarketing] = useState(marketing)

  useEffect(() => {
    if (showSettings) {
      setDraftAnalytics(analytics)
      setDraftMarketing(marketing)
    }
  }, [showSettings, analytics, marketing])

  if (hasDecided && !showSettings) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[200] border-t border-cream/20 bg-charcoal/95 p-4 shadow-2xl backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="mx-auto max-w-screen-xl">
        {!showSettings ? (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 id="cookie-consent-title" className="mb-2 font-display text-xl text-offwhite">
                {t.cookieConsent.title}
              </h2>
              <p className="font-body text-sm leading-relaxed text-cream/85">{t.cookieConsent.intro}</p>
              <p className="mt-2 font-body text-xs text-cream/60">
                {t.cookieConsent.learnMore}{' '}
                <Link to="/kolacici" className="text-gold underline-offset-2 hover:underline">
                  {t.footer.cookies}
                </Link>
                {' · '}
                <Link to="/privatnost" className="text-gold underline-offset-2 hover:underline">
                  {t.footer.privacy}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:shrink-0 lg:justify-end">
              <button
                type="button"
                onClick={openSettings}
                className="border border-cream/30 px-4 py-2.5 font-body text-xs uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {t.cookieConsent.settings}
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="border border-cream/30 px-4 py-2.5 font-body text-xs uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {t.cookieConsent.reject}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="bg-forest px-4 py-2.5 font-body text-xs uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
              >
                {t.cookieConsent.accept}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="cookie-consent-title" className="font-display text-xl text-offwhite">
                {t.cookieConsent.settingsTitle}
              </h2>
              {hasDecided ? (
                <button
                  type="button"
                  onClick={closeSettings}
                  className="font-body text-xs uppercase tracking-widest text-cream/70 hover:text-gold"
                >
                  {t.cookieConsent.close}
                </button>
              ) : null}
            </div>
            <p className="mb-6 max-w-3xl font-body text-sm leading-relaxed text-cream/85">
              {t.cookieConsent.settingsIntro}
            </p>
            <ul className="mb-6 space-y-4">
              <li className="rounded-sm border border-cream/15 bg-offwhite/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-sm font-medium text-offwhite">{t.cookieConsent.necessary.title}</p>
                    <p className="mt-1 font-body text-xs leading-relaxed text-cream/70">
                      {t.cookieConsent.necessary.desc}
                    </p>
                  </div>
                  <span className="shrink-0 font-body text-[10px] uppercase tracking-widest text-gold">
                    {t.cookieConsent.alwaysOn}
                  </span>
                </div>
              </li>
              <li className="rounded-sm border border-cream/15 bg-offwhite/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-sm font-medium text-offwhite">{t.cookieConsent.analytics.title}</p>
                    <p className="mt-1 font-body text-xs leading-relaxed text-cream/70">
                      {t.cookieConsent.analytics.desc}
                    </p>
                  </div>
                  <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={draftAnalytics}
                      onChange={(e) => setDraftAnalytics(e.target.checked)}
                    />
                    <span className="absolute inset-0 rounded-full bg-cream/20 transition-colors peer-checked:bg-forest" />
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-offwhite transition-transform peer-checked:translate-x-5" />
                  </label>
                </div>
              </li>
              <li className="rounded-sm border border-cream/15 bg-offwhite/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-sm font-medium text-offwhite">{t.cookieConsent.marketing.title}</p>
                    <p className="mt-1 font-body text-xs leading-relaxed text-cream/70">
                      {t.cookieConsent.marketing.desc}
                    </p>
                  </div>
                  <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={draftMarketing}
                      onChange={(e) => setDraftMarketing(e.target.checked)}
                    />
                    <span className="absolute inset-0 rounded-full bg-cream/20 transition-colors peer-checked:bg-forest" />
                    <span className="absolute left-0.5 h-5 w-5 rounded-full bg-offwhite transition-transform peer-checked:translate-x-5" />
                  </label>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => savePreferences(draftAnalytics, draftMarketing)}
                className="bg-forest px-4 py-2.5 font-body text-xs uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
              >
                {t.cookieConsent.save}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="border border-cream/30 px-4 py-2.5 font-body text-xs uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {t.cookieConsent.accept}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
