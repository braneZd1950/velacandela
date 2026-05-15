import type { ReactNode } from 'react'
import Modal from '@components/ui/Modal'

type Props = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function ProductModal({ open, onClose, title, children }: Props) {
  return (
    <Modal open={open} title={title} onClose={onClose}>
      {children}
    </Modal>
  )
}
