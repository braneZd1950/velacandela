export const CONTACT_EMAIL = 'info@velacandela.com'

/** Pravni podaci — ažurirajte prije produkcijske objave. */
export const SITE = {
  name: 'Vela Candela',
  legalName: 'Vela Candela',
  /** npr. obrt, d.o.o. */
  legalForm: 'obrt za proizvodnju i prodaju',
  address: '[Ulica i broj], [Poštanski broj] [Mjesto], Republika Hrvatska',
  oib: '[OIB]',
  email: CONTACT_EMAIL,
  phone: '',
  developerEmail: 'banbranimir@outlook.com',
  /** Datum zadnjeg ažuriranja pravnih dokumenata (ISO). */
  legalLastUpdated: '2026-06-05',
} as const

export function orderMailto(productName: string, locale: 'hr' | 'en') {
  const subject =
    locale === 'hr' ? `Upit za narudžbu: ${productName}` : `Order inquiry: ${productName}`
  const body =
    locale === 'hr'
      ? `Pozdrav,\n\nZanima me proizvod: ${productName}.\n\nMolim vas za informacije o dostupnosti i cijeni.\n\nHvala!`
      : `Hello,\n\nI am interested in: ${productName}.\n\nPlease let me know about availability and pricing.\n\nThank you!`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
