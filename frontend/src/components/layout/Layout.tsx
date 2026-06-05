import { Outlet } from 'react-router-dom'
import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import CookieConsent from '@components/legal/CookieConsent'
import { useTranslation } from '@hooks/useTranslation'

export default function Layout() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:bg-forest focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-offwhite"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
