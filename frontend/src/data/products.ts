import { images } from '@/assets/images'
import type { Locale } from '@/i18n/translations'
import { translations } from '@/i18n/translations'

export type Product = {
  id: string
  slug: string
  price: number
  stock: number
  image: string
  scents: string[]
  weight: number
  burnTime: number
  copyKey: 'lemonBurst' | 'forestMoss' | 'vanillaSky' | 'mediumRose'
}

export const PRODUCTS: Product[] = [
  {
    id: 'lemon-burst',
    slug: 'lemon-burst',
    price: 24.99,
    stock: 50,
    image: images.candles[0],
    scents: ['lemon', 'verbena'],
    weight: 250,
    burnTime: 45,
    copyKey: 'lemonBurst',
  },
  {
    id: 'forest-moss',
    slug: 'forest-moss',
    price: 28.5,
    stock: 30,
    image: images.candles[1],
    scents: ['moss', 'cedar'],
    weight: 220,
    burnTime: 40,
    copyKey: 'forestMoss',
  },
  {
    id: 'vanilla-sky',
    slug: 'vanilla-sky',
    price: 22,
    stock: 40,
    image: images.candles[2],
    scents: ['vanilla', 'caramel'],
    weight: 200,
    burnTime: 38,
    copyKey: 'vanillaSky',
  },
  {
    id: 'medium-rose',
    slug: 'medium-rose',
    price: 26.5,
    stock: 35,
    image: images.candles[3],
    scents: ['rose', 'peony'],
    weight: 230,
    burnTime: 42,
    copyKey: 'mediumRose',
  },
]

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getProductName(product: Product, locale: Locale) {
  return translations[locale].catalog[product.copyKey].name
}

export function getProductDescription(product: Product, locale: Locale) {
  return translations[locale].catalog[product.copyKey].description
}
