import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CookieConsentState = {
  hasDecided: boolean
  analytics: boolean
  marketing: boolean
  showSettings: boolean
  acceptAll: () => void
  rejectOptional: () => void
  savePreferences: (analytics: boolean, marketing: boolean) => void
  openSettings: () => void
  closeSettings: () => void
}

export const useCookieConsentStore = create<CookieConsentState>()(
  persist(
    (set) => ({
      hasDecided: false,
      analytics: false,
      marketing: false,
      showSettings: false,
      acceptAll: () =>
        set({
          hasDecided: true,
          analytics: true,
          marketing: true,
          showSettings: false,
        }),
      rejectOptional: () =>
        set({
          hasDecided: true,
          analytics: false,
          marketing: false,
          showSettings: false,
        }),
      savePreferences: (analytics, marketing) =>
        set({
          hasDecided: true,
          analytics,
          marketing,
          showSettings: false,
        }),
      openSettings: () => set({ showSettings: true }),
      closeSettings: () => set({ showSettings: false }),
    }),
    { name: 'vela-cookie-consent' },
  ),
)
