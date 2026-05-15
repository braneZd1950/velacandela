import { images } from '@/assets/images'
import { useTranslation } from '@hooks/useTranslation'

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.about.eyebrow}</p>
          <h1 className="mb-6 font-display text-4xl text-charcoal">{t.about.title}</h1>
          <p className="mb-4 max-w-2xl font-body leading-relaxed text-muted">{t.about.p1}</p>
          <p className="max-w-2xl font-body leading-relaxed text-muted">{t.about.p2}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={images.brand}
            alt="Vela Candela"
            className="max-h-[480px] w-full rounded-sm object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
