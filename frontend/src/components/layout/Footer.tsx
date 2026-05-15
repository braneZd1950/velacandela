import { Link } from 'react-router-dom'
import BrandLogo from '@components/ui/BrandLogo'
import { useTranslation } from '@hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto">
      <section className="bg-forest py-12 text-offwhite">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <Link to="/" className="shrink-0" aria-label="Vela Candela">
            <BrandLogo size="footer" onDark />
          </Link>
          <div className="max-w-md text-center md:text-left">
            <p className="mb-1 font-body text-xs uppercase tracking-widest text-cream">{t.footer.join}</p>
            <p className="font-body text-sm text-cream/80">{t.footer.desc}</p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-0 sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              name="newsletter"
              placeholder={t.footer.emailPlaceholder}
              className="min-w-[220px] flex-1 border-0 bg-offwhite px-4 py-3 font-body text-sm text-charcoal outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="bg-gold px-6 py-3 font-body text-xs font-medium uppercase tracking-widest text-forest transition-colors hover:bg-gold/90"
            >
              {t.footer.subscribe}
            </button>
          </form>
        </div>
      </section>
      <div className="bg-charcoal py-4 text-center font-body text-xs text-cream/60">
        <Link to="/" className="hover:text-gold">
          © {new Date().getFullYear()} Vela Candela
        </Link>
      </div>
    </footer>
  )
}
