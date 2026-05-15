import { PRODUCTS } from '@/data/products'

export function useProducts() {
  return { products: PRODUCTS, loading: false }
}
