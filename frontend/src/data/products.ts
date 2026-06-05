import { galleryImages } from '@/assets/images'
import type { Locale } from '@/i18n/translations'
import { translations } from '@/i18n/translations'

export type Product = {
  id: string
  slug: string
  image: string
  nameHr: string
  nameEn: string
  weight?: number
  price: number | null
}

function parseWeight(label: string): number | undefined {
  const match = label.match(/(\d+)\s*g/i)
  return match ? Number(match[1]) : undefined
}

export const PRODUCTS: Product[] = galleryImages.map((item) => ({
  id: item.id,
  slug: item.id,
  image: item.src,
  nameHr: item.labelHr,
  nameEn: item.labelEn,
  weight: parseWeight(item.labelHr) ?? parseWeight(item.labelEn),
  price: null,
}))

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getProductName(product: Product, locale: Locale) {
  return locale === 'hr' ? product.nameHr : product.nameEn
}

export function getProductDescription(product: Product, locale: Locale) {
  const weight = product.weight
  const base = translations[locale].product.defaultDescription
  if (!weight) return base
  return `${base} ${translations[locale].product.weight}: ${weight} ${translations[locale].product.grams}.`
}
