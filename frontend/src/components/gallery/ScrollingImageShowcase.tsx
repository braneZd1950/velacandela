import { galleryImages, type GalleryImage } from '@/assets/images'
import { useTranslation } from '@hooks/useTranslation'

type MarqueeRowProps = {
  items: GalleryImage[]
  reverse?: boolean
  duration: number
  label: (item: GalleryImage) => string
}

function MarqueeRow({ items, reverse = false, duration, label }: MarqueeRowProps) {
  const track = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-3 sm:gap-4 ${reverse ? 'marquee-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, index) => (
          <figure
            key={`${item.id}-${index}`}
            className="group relative aspect-square h-40 shrink-0 overflow-hidden bg-cream sm:h-48 md:h-56 lg:h-64"
          >
            <img
              src={item.src}
              alt={label(item)}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

function splitIntoRows(items: GalleryImage[], rowCount: number): GalleryImage[][] {
  const rows = Array.from({ length: rowCount }, () => [] as GalleryImage[])
  items.forEach((item, index) => {
    rows[index % rowCount].push(item)
  })
  return rows
}

export default function ScrollingImageShowcase() {
  const { locale } = useTranslation()
  const label = (item: GalleryImage) => (locale === 'hr' ? item.labelHr : item.labelEn)

  const [row1, row2, row3] = splitIntoRows(galleryImages, 3)

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <div className="flex flex-col gap-3 sm:gap-4">
        <MarqueeRow items={row1} duration={55} label={label} />
        <MarqueeRow items={row2} reverse duration={45} label={label} />
        <MarqueeRow items={row3} duration={60} label={label} />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-offwhite to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-offwhite to-transparent sm:w-24"
        aria-hidden
      />
    </div>
  )
}
