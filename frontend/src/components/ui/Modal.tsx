import type { ReactNode } from 'react'

type Props = {
  open: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

export default function Modal({ open, title, onClose, children }: Props) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/40 p-4 animate-fade-in"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-md bg-offwhite p-6 shadow-lg"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          {title ? <h2 className="font-display text-2xl text-charcoal">{title}</h2> : <span />}
          <button
            type="button"
            className="font-body text-sm uppercase tracking-wide text-muted hover:text-forest"
            onClick={onClose}
          >
            Zatvori
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
