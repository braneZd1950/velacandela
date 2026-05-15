import { Link, useParams } from 'react-router-dom'
import {
  getProductBySlug,
  getProductDescription,
  getProductName,
} from '@/data/products'
import { orderMailto } from '@/config/site'
import { useTranslation } from '@hooks/useTranslation'
import { formatPrice } from '@utils/formatPrice'

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const { t, locale } = useTranslation()

  const product = slug ? getProductBySlug(slug) : undefined

  if (!slug || !product) {
    return (
      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <p className="font-body text-muted">{t.product.notFound}</p>
        <Link to="/products" className="mt-4 inline-block font-body text-sm text-teal underline">
          {t.product.backToProducts}
        </Link>
      </div>
    )
  }

  const name = getProductName(product, locale)
  const description = getProductDescription(product, locale)

  return (
    <div className="mx-auto grid max-w-screen-xl gap-12 px-6 py-16 md:grid-cols-2">
      <img src={product.image} alt={name} className="w-full rounded-sm object-cover shadow-md" />
      <div>
        <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.product.eyebrow}</p>
        <h1 className="mb-4 font-display text-4xl text-charcoal">{name}</h1>
        <p className="mb-6 font-display text-2xl text-teal">{formatPrice(product.price, locale)}</p>
        <p className="mb-8 font-body leading-relaxed text-muted">{description}</p>
        <a
          href={orderMailto(name, locale)}
          className="inline-flex bg-forest px-8 py-4 font-body text-sm uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
        >
          {t.product.orderEmail}
        </a>
        <p className="mt-4 max-w-sm font-body text-sm text-muted">{t.product.orderNote}</p>
        <div className="mt-8 space-y-1 font-body text-sm text-muted">
          <p>
            {t.product.weight}: {product.weight} {t.product.grams}
          </p>
          <p>
            {t.product.burnTime}: {product.burnTime} {t.product.hours}
          </p>
        </div>
      </div>
    </div>
  )
}
