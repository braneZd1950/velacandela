import { Link } from 'react-router-dom'
import { useTranslation } from '@hooks/useTranslation'
import { formatPrice } from '@utils/formatPrice'

type ProductCardData = {
  id: string
  name: string
  price: number
  image: string
  slug?: string
}

type Props = {
  product: ProductCardData
}

export default function ProductCard({ product }: Props) {
  const { t, locale } = useTranslation()
  const slug = product.slug

  return (
    <article className="group">
      <div className="relative mb-4 aspect-square overflow-hidden bg-cream">
        {slug ? (
          <Link to={`/products/${slug}`} className="block h-full w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {slug ? (
          <Link
            to={`/products/${slug}`}
            className="absolute bottom-0 left-0 right-0 z-10 translate-y-full bg-forest py-3 text-center font-body text-xs uppercase tracking-widest text-offwhite transition-transform duration-300 group-hover:translate-y-0"
          >
            {t.productCard.viewDetails}
          </Link>
        ) : null}
      </div>
      <h3 className="font-body text-sm uppercase tracking-wide text-charcoal">
        {slug ? (
          <Link to={`/products/${slug}`} className="hover:text-teal">
            {product.name}
          </Link>
        ) : (
          product.name
        )}
      </h3>
      <p className="mt-1 font-display text-lg text-teal">{formatPrice(product.price, locale)}</p>
    </article>
  )
}
