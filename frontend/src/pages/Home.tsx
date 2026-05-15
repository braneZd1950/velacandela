import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductName } from '@/data/products'
import ProductCard from '@components/product/ProductCard'
import ProductGrid from '@components/product/ProductGrid'
import BrandLogo from '@components/ui/BrandLogo'
import { useProducts } from '@hooks/useProducts'
import { useTranslation } from '@hooks/useTranslation'

export default function Home() {
  const { t, locale } = useTranslation()
  const { products } = useProducts()
  const featured = products.slice(0, 3)

  return (
    <>
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <motion.div
            className="animate-fade-up"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 font-body text-xs uppercase tracking-widest text-muted">{t.home.tagline}</p>
            <h1 className="mb-6 font-display text-5xl leading-tight text-charcoal lg:text-6xl">
              {t.home.titleLine1}
              <br />
              <em>{t.home.titleLine2}</em>
            </h1>
            <p className="mb-8 max-w-sm font-body leading-relaxed text-muted">{t.home.description}</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-forest px-8 py-4 font-body text-sm uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
            >
              {t.home.cta}
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <BrandLogo size="hero" />
          </motion.div>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.products.eyebrow}</p>
          <h2 className="mb-10 font-display text-3xl text-charcoal">{t.products.title}</h2>
          <ProductGrid>
            {featured.map((p) => (
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
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex border border-forest px-8 py-3 font-body text-sm uppercase tracking-widest text-forest transition-colors hover:bg-forest hover:text-offwhite"
            >
              {t.home.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
