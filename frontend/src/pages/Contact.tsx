import { Mail } from 'lucide-react'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import { CONTACT_EMAIL, contactMailto } from '@/config/site'
import { usePageMeta } from '@hooks/usePageMeta'
import { useTranslation } from '@hooks/useTranslation'

export default function Contact() {
  const { t, locale } = useTranslation()

  usePageMeta({
    title: t.meta.contact.title,
    description: t.meta.contact.description,
    path: '/contact',
  })

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16">
      <p className="mb-2 font-body text-xs uppercase tracking-widest text-muted">{t.contact.eyebrow}</p>
      <h1 className="mb-4 font-display text-4xl text-charcoal">{t.contact.title}</h1>
      <p className="mb-8 max-w-2xl font-body leading-relaxed text-muted">{t.contact.intro}</p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mb-10 inline-flex items-center gap-2 bg-forest px-6 py-3 font-body text-sm uppercase tracking-widest text-offwhite transition-colors hover:bg-sage"
      >
        <Mail size={18} />
        {t.contact.emailCta}
      </a>

      <form
        className="grid max-w-lg gap-4 border-t border-cream pt-8"
        onSubmit={(e) => {
          e.preventDefault()
          const data = new FormData(e.currentTarget)
          const name = String(data.get('name') ?? '').trim()
          const email = String(data.get('email') ?? '').trim()
          const message = String(data.get('message') ?? '').trim()
          if (!name || !email || !message) return
          window.location.href = contactMailto(name, email, message, locale)
        }}
      >
        <Input label={t.contact.name} name="name" required />
        <Input label={t.contact.email} name="email" type="email" required />
        <label className="block font-body text-sm text-charcoal">
          <span className="mb-1 block text-muted">{t.contact.message}</span>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-sm border border-sage/40 bg-offwhite px-3 py-2 text-charcoal outline-none focus:border-forest"
          />
        </label>
        <p className="font-body text-xs leading-relaxed text-muted">{t.contact.formNote}</p>
        <Button type="submit">{t.contact.send}</Button>
      </form>
    </div>
  )
}
