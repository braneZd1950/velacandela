import { Link } from 'react-router-dom'
import { usePageMeta } from '@hooks/usePageMeta'
import { useTranslation } from '@hooks/useTranslation'

export default function NotFound() {
  const { t } = useTranslation()

  usePageMeta({
    title: t.meta.notFound.title,
    description: t.meta.notFound.description,
    path: '/404',
  })

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-screen-xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mb-4 font-display text-4xl text-charcoal">{t.notFound.title}</h1>
      <p className="mb-8 max-w-md font-body leading-relaxed text-muted">{t.notFound.description}</p>
      <Link
        to="/"
        className="inline-flex border border-forest px-8 py-3 font-body text-sm uppercase tracking-widest text-forest transition-colors hover:bg-forest hover:text-offwhite"
      >
        {t.notFound.cta}
      </Link>
    </div>
  )
}
