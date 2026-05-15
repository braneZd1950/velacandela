import { images } from '@/assets/images'

type Size = 'nav' | 'footer' | 'hero'

const sizeClass: Record<Size, string> = {
  nav: 'h-11 max-w-[140px] sm:max-w-[160px]',
  footer: 'h-20 max-w-[220px] sm:h-24 sm:max-w-[260px]',
  hero: 'h-auto max-h-[min(400px,50vh)] w-full max-w-sm',
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
      <div className="w-full max-w-lg rounded-md bg-offwhite p-10 shadow-xl ring-1 ring-sage/20 sm:p-12">
        {img}
      </div>
    )
  }

  if (!onDark) return img

  const pad = size === 'footer' ? 'px-5 py-4' : 'px-3 py-2.5'

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-offwhite shadow-md ring-1 ring-cream/80 ${pad}`}
    >
      {img}
    </div>
  )
}
