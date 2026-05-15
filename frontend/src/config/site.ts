export const CONTACT_EMAIL = 'info@velacandela.com'

export function orderMailto(productName: string, locale: 'hr' | 'en') {
  const subject =
    locale === 'hr' ? `Upit za narudžbu: ${productName}` : `Order inquiry: ${productName}`
  const body =
    locale === 'hr'
      ? `Pozdrav,\n\nZanima me proizvod: ${productName}.\n\nMolim vas za informacije o dostupnosti i cijeni.\n\nHvala!`
      : `Hello,\n\nI am interested in: ${productName}.\n\nPlease let me know about availability and pricing.\n\nThank you!`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
