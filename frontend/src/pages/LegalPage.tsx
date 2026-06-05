import { Link, useLocation } from 'react-router-dom'
import { SITE } from '@/config/site'
import { useTranslation } from '@hooks/useTranslation'

const PATH_TO_DOC: Record<string, 'privacy' | 'cookies' | 'terms' | 'imprint'> = {
  '/privatnost': 'privacy',
  '/kolacici': 'cookies',
  '/uvjeti': 'terms',
  '/pravne-informacije': 'imprint',
}

function docFromPath(pathname: string): 'privacy' | 'cookies' | 'terms' | 'imprint' | null {
  const key = pathname.replace(/\/$/, '') || '/'
  return PATH_TO_DOC[key] ?? null
}

function interpolate(text: string): string {
  return text
    .replaceAll('{{businessName}}', SITE.legalName)
    .replaceAll('{{legalForm}}', SITE.legalForm)
    .replaceAll('{{address}}', SITE.address)
    .replaceAll('{{oib}}', SITE.oib)
    .replaceAll('{{email}}', SITE.email)
    .replaceAll('{{phone}}', SITE.phone || '—')
    .replaceAll('{{lastUpdated}}', SITE.legalLastUpdated)
}

export default function LegalPage() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const doc = docFromPath(pathname)

  if (!doc) {
    return (
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <p className="font-body text-muted">404</p>
        <Link to="/" className="mt-4 inline-block font-body text-sm text-teal underline">
          {t.nav.home}
        </Link>
      </div>
    )
  }

  const section = t.legal[doc]

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{SITE.name}</p>
      <h1 className="mb-2 font-display text-3xl text-charcoal md:text-4xl">{section.title}</h1>
      <p className="mb-8 font-body text-sm text-muted">
        {t.legal.lastUpdated}: {SITE.legalLastUpdated}
      </p>
      <div className="space-y-8">
        {section.blocks.map((block, i) => (
          <section key={i}>
            {'heading' in block && block.heading ? (
              <h2 className="mb-3 font-display text-xl text-charcoal">{interpolate(block.heading)}</h2>
            ) : null}
            <div className="space-y-4 font-body leading-relaxed text-muted">
              {block.paragraphs.map((p, j) => (
                <p key={j}>{interpolate(p)}</p>
              ))}
            </div>
            {'bullets' in block && block.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 font-body leading-relaxed text-muted">
                {block.bullets.map((item, k) => (
                  <li key={k}>{interpolate(item)}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      <Link
        to="/"
        className="mt-10 inline-block font-body text-sm text-teal underline hover:text-forest"
      >
        ← {t.nav.home}
      </Link>
    </div>
  )
}
