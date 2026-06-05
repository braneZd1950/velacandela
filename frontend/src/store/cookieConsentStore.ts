import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CookieConsentState = {
  hasDecided: boolean
  accept: () => void
  openBanner: () => void
}

export const useCookieConsentStore = create<CookieConsentState>()(
  persist(
    (set) => ({
      hasDecided: false,
      accept: () => set({ hasDecided: true }),
      openBanner: () => set({ hasDecided: false }),
    }),
    { name: 'vela-cookie-consent' },
  ),
)
