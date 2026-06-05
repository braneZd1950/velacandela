export const CONTACT_EMAIL = 'info@velacandela.com'

/** Produkcijski URL — postavite u .env.local ili na hostingu. */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ?? 'https://velacandela.onrender.com'

/** Pravni podaci — ažurirajte kad klijent isporuči podatke. */
export const SITE = {
  name: 'Vela Candela',
  legalName: 'Vela Candela',
  legalForm: 'obrt za proizvodnju i prodaju',
  address: '[Ulica i broj], [Poštanski broj] [Mjesto], Republika Hrvatska',
  oib: '[OIB]',
  email: CONTACT_EMAIL,
  phone: '',
  developerEmail: 'banbranimir@outlook.com',
  legalLastUpdated: '2026-06-05',
} as const

export function isPlaceholder(value: string): boolean {
  return /^\[.+\]$/.test(value.trim())
}

/** Zamjenjuje placeholder vrijednosti prikazom dok klijent ne dostavi podatke. */
export function resolveSiteValue(value: string, pendingLabel: string): string {
  return isPlaceholder(value) ? pendingLabel : value
}

export function orderMailto(productName: string, locale: 'hr' | 'en') {
  const subject =
    locale === 'hr' ? `Upit za narudžbu: ${productName}` : `Order inquiry: ${productName}`
  const body =
    locale === 'hr'
      ? `Pozdrav,\n\nZanima me proizvod: ${productName}.\n\nMolim vas za informacije o dostupnosti i cijeni.\n\nHvala!`
      : `Hello,\n\nI am interested in: ${productName}.\n\nPlease let me know about availability and pricing.\n\nThank you!`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function contactMailto(name: string, email: string, message: string, locale: 'hr' | 'en') {
  const subject = locale === 'hr' ? 'Upit s web stranice Vela Candela' : 'Inquiry from Vela Candela website'
  const body =
    locale === 'hr'
      ? `Ime: ${name}\nE-mail: ${email}\n\nPoruka:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
