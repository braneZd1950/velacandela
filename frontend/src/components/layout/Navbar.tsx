import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { CONTACT_EMAIL } from '@/config/site'
import BrandLogo from '@components/ui/BrandLogo'
import LanguageToggle from '@components/layout/LanguageToggle'
import { useTranslation } from '@hooks/useTranslation'

export default function Navbar() {
  const { t } = useTranslation()

  const nav = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.products, to: '/products' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.contact, to: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-forest text-offwhite">
      <nav className="relative mx-auto flex h-[4.5rem] max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <ul className="hidden gap-6 font-body text-xs uppercase tracking-widest md:flex lg:gap-8">
          {nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          aria-label="Vela Candela — početna"
        >
          <BrandLogo size="nav" onDark />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-1.5 font-body text-xs uppercase tracking-widest transition-colors hover:text-gold"
            aria-label={t.contact.emailCta}
          >
            <Mail size={18} />
            <span className="hidden sm:inline">{t.contact.emailCta}</span>
          </a>
        </div>
      </nav>
      <ul className="flex gap-6 overflow-x-auto border-t border-offwhite/10 px-4 py-2 font-body text-[10px] uppercase tracking-widest md:hidden">
        {nav.map((item) => (
          <li key={item.to} className="shrink-0">
            <Link to={item.to} className="whitespace-nowrap transition-colors hover:text-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
