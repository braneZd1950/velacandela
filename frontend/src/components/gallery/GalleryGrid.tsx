import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/assets/images'
import { useTranslation } from '@hooks/useTranslation'

type Props = {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: Props) {
  const { locale, t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIndex, close, showNext, showPrev])

  const active = activeIndex !== null ? images[activeIndex] : null
  const label = (item: GalleryImage) => (locale === 'hr' ? item.labelHr : item.labelEn)

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              className="group relative aspect-square w-full overflow-hidden bg-cream text-left"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.src}
                alt={label(item)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-3 py-3 font-body text-xs uppercase tracking-wide text-offwhite opacity-0 transition-opacity group-hover:opacity-100">
                {label(item)}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 animate-fade-in"
          role="presentation"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full p-2 text-offwhite/80 transition-colors hover:text-gold"
            onClick={close}
            aria-label={t.gallery.close}
          >
            <X size={28} />
          </button>

          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-offwhite/80 transition-colors hover:text-gold sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label={t.gallery.prev}
          >
            <ChevronLeft size={36} />
          </button>

          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-offwhite/80 transition-colors hover:text-gold sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label={t.gallery.next}
          >
            <ChevronRight size={36} />
          </button>

          <figure
            className="flex max-h-[85vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={label(active)}
              className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
            />
            <figcaption className="mt-4 font-body text-sm uppercase tracking-widest text-cream">
              {label(active)}
              <span className="ml-2 text-cream/50">
                {activeIndex + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
