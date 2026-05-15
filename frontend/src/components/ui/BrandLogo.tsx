import { images } from '@/assets/images'

type Size = 'nav' | 'footer' | 'hero'

const sizeClass: Record<Size, string> = {
  nav: 'h-10 w-auto max-w-[140px] sm:max-w-[160px]',
  footer: 'h-16 w-auto max-w-[220px] sm:h-[4.5rem] sm:max-w-[260px]',
  hero: 'h-auto max-h-[min(380px,50vh)] w-full max-w-md',
}

type Props = {
  size?: Size
  /** Svijetla podloga — za tamnu (forest) pozadinu u headeru/footeru */
  onDark?: boolean
  className?: string
}

export default function BrandLogo({ size = 'nav', onDark = false, className = '' }: Props) {
  const img = (
    <img
      src={images.logo}
      alt="Vela Candela"
      className={`object-contain object-center ${sizeClass[size]} ${className}`.trim()}
    />
  )

  if (size === 'hero') {
    return (
      <div className="flex justify-center">
        <div className="rounded-md bg-offwhite px-8 py-6 shadow-xl ring-1 ring-sage/20 sm:px-10 sm:py-8">
          {img}
        </div>
      </div>
    )
  }

  if (!onDark) return img

  const pad = size === 'footer' ? 'px-4 py-3' : 'px-3 py-2'

  return (
    <div
      className={`inline-flex items-center justify-center rounded-md bg-offwhite shadow-md ring-1 ring-cream/80 ${pad}`}
    >
      {img}
    </div>
  )
}
