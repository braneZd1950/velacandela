import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: Props) {
  const base =
    'inline-flex items-center justify-center font-body text-sm tracking-widest uppercase px-6 py-3 transition-colors disabled:opacity-50'
  const styles =
    variant === 'primary'
      ? 'bg-forest text-offwhite hover:bg-sage'
      : 'bg-transparent text-forest border border-forest hover:bg-cream'

  return (
    <button type="button" className={`${base} ${styles} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
