import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { SITE } from '@/config/site'
import { useCookieConsentStore } from '@/store/cookieConsentStore'
import BrandLogo from '@components/ui/BrandLogo'
import { useTranslation } from '@hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()
  const openCookieSettings = useCookieConsentStore((s) => s.openSettings)

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/products', label: t.nav.products },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  const legalLinks = [
    { to: '/pravne-informacije', label: t.footer.imprint },
    { to: '/privatnost', label: t.footer.privacy },
    { to: '/kolacici', label: t.footer.cookies },
    { to: '/uvjeti', label: t.footer.terms },
  ]

  return (
    <footer className="mt-auto">
      <section className="bg-forest py-12 text-offwhite">
        <div className="mx-auto grid max-w-screen-xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="shrink-0" aria-label={SITE.name}>
              <BrandLogo size="footer" onDark />
            </Link>
            <p className="mt-4 max-w-xs text-center font-body text-sm leading-relaxed text-cream/80 md:text-left">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-widest text-cream">{t.footer.navigation}</p>
            <ul className="space-y-2 font-body text-sm">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/85 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-widest text-cream">{t.footer.contactTitle}</p>
            <ul className="space-y-3 font-body text-sm text-cream/85">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="shrink-0 text-gold" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              {SITE.phone ? (
                <li>
                  <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">
                    {SITE.phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-widest text-cream">{t.footer.legalTitle}</p>
            <ul className="space-y-2 font-body text-sm">
              {legalLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/85 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-left text-cream/85 transition-colors hover:text-gold"
                >
                  {t.footer.cookieSettings}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-charcoal px-4 py-6 text-center font-body text-xs text-cream/70">
        <p className="mb-3 max-w-3xl mx-auto leading-relaxed text-cream/55">{t.footer.gdprNotice}</p>
        <nav
          className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          aria-label={t.footer.legalNavLabel}
        >
          {legalLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-cream/80 underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mb-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-cream/60">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. {t.footer.rights}
          </span>
        </div>
        <p className="text-cream/55">
          {t.footer.credit}{' '}
          <a
            href={`mailto:${SITE.developerEmail}`}
            className="text-cream/80 underline-offset-2 transition-colors hover:text-gold hover:underline"
          >
            {SITE.developerEmail}
          </a>
        </p>
      </div>
    </footer>
  )
}
