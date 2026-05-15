import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export default function Input({ label, id, className = '', ...rest }: Props) {
  const inputId = id ?? rest.name
  return (
    <label className="block font-body text-sm text-charcoal" htmlFor={inputId}>
      {label ? <span className="mb-1 block text-muted">{label}</span> : null}
      <input
        id={inputId}
        className={`mt-1 w-full rounded-sm border border-sage/40 bg-offwhite px-3 py-2 text-charcoal outline-none focus:border-forest ${className}`.trim()}
        {...rest}
      />
    </label>
  )
}
