import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function ProductGrid({ children, className = '' }: Props) {
  return (
    <div
      className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`.trim()}
    >
      {children}
    </div>
  )
}
