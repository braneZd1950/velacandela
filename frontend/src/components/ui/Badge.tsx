import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: string | number
}

export default function Badge({ children, className = '', ...rest }: Props) {
  return (
    <span
      className={`inline-flex min-w-6 h-6 items-center justify-center rounded-full bg-gold px-1.5 text-[10px] font-bold text-forest ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  )
}
