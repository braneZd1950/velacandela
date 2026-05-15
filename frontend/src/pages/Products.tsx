import ProductCard from '@components/product/ProductCard'
import ProductGrid from '@components/product/ProductGrid'
import { getProductName } from '@/data/products'
import { useProducts } from '@hooks/useProducts'
import { useTranslation } from '@hooks/useTranslation'

export default function Products() {
  const { products } = useProducts()
  const { t, locale } = useTranslation()

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16">
      <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.products.eyebrow}</p>
      <h1 className="mb-10 font-display text-4xl text-charcoal">{t.products.title}</h1>
      <ProductGrid>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={{
              id: p.id,
              name: getProductName(p, locale),
              price: p.price,
              image: p.image,
              slug: p.slug,
            }}
          />
        ))}
      </ProductGrid>
    </div>
  )
}
