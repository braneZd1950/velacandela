import { galleryImages } from '@/assets/images'
import GalleryGrid from '@components/gallery/GalleryGrid'
import { usePageMeta } from '@hooks/usePageMeta'
import { useTranslation } from '@hooks/useTranslation'

export default function Gallery() {
  const { t } = useTranslation()

  usePageMeta({
    title: t.meta.gallery.title,
    description: t.meta.gallery.description,
    path: '/gallery',
  })

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16">
      <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.gallery.eyebrow}</p>
      <h1 className="mb-4 font-display text-4xl text-charcoal">{t.gallery.title}</h1>
      <p className="mb-10 max-w-2xl font-body leading-relaxed text-muted">{t.gallery.intro}</p>
      <GalleryGrid images={galleryImages} />
    </div>
  )
}
