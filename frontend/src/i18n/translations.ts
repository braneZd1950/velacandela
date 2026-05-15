export type Locale = 'hr' | 'en'

export const translations = {
  hr: {
    nav: {
      home: 'Početna',
      products: 'Proizvodi',
      about: 'O nama',
      contact: 'Kontakt',
    },
    a11y: {
      language: 'Jezik',
    },
    home: {
      tagline: 'Ručno izliveno s ljubavlju',
      titleLine1: 'Prirodni luksuz,',
      titleLine2: 'stvoren od svjetlosti.',
      description:
        'Naše svijeće inspirirane su prirodom i ručno su izrađene kako bi donijele toplinu, mir i ljepotu u vaš dom.',
      cta: 'Pogledaj proizvode →',
      heroAlt: 'Vela Candela svijeće',
    },
    products: {
      eyebrow: 'Proizvodi',
      title: 'Naše kolekcije',
      pageTitle: 'Proizvodi',
    },
    product: {
      eyebrow: 'Proizvod',
      orderEmail: 'Naručite putem e-maila',
      orderNote: 'Za narudžbu ili upit pošaljite nam e-mail — odgovaramo u najkraćem roku.',
      burnTime: 'Vrijeme gorenja',
      weight: 'Težina',
      grams: 'g',
      hours: 'h',
      notFound: 'Proizvod nije pronađen.',
      backToProducts: 'Natrag na proizvode',
    },
    productCard: {
      viewDetails: 'Detalji',
    },
    about: {
      eyebrow: 'O nama',
      title: 'Vela Candela',
      p1: 'Vela Candela je mala radionica ručno izrađenih svijeća od prirodnog sojinog voska. Svaka svijeća izlivena je s pažnjom, u malim serijama, kako bi zadržala autentičan miris i toplinu plamena.',
      p2: 'Inspirirani prirodom i mediteranskim ritmom, biramo mirise koji umiruju prostor i pozivaju na trenutak za sebe — bez žurbe, uz meko svjetlo.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Javite nam se',
      intro:
        'Za narudžbe, suradnje ili opće upite pišite nam na e-mail. Trenutno ne nudimo online kupnju — sve narudžbe zaprimamo osobno putem poruke.',
      name: 'Ime',
      email: 'E-mail',
      message: 'Poruka',
      send: 'Pošalji upit',
      success: 'Hvala! Poruka je zaprimljena (demo).',
      emailCta: 'Pošaljite e-mail',
    },
    footer: {
      join: 'Pridružite se našem svijetu',
      desc: 'Budite prvi koji saznaju o novim kolekcijama i ekskluzivnim ponudama.',
      emailPlaceholder: 'Vaša e-mail adresa',
      subscribe: 'Pretplati se',
    },
    catalog: {
      lemonBurst: {
        name: 'Limun & verbena',
        description: 'Svjež limun i verbena na bazi 100% sojinog voska. Lagana, osvježavajuća nota za dnevne prostore.',
      },
      forestMoss: {
        name: 'Šumska mahovina',
        description: 'Zelena mahovina i cedar za miran, prirodan ambijent. Idealno za večernje opuštanje.',
      },
      vanillaSky: {
        name: 'Vanilija & karamela',
        description: 'Topli vanilijski miris s nijansom karamela. Ugodna, domaća atmosfera.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    a11y: {
      language: 'Language',
    },
    home: {
      tagline: 'Hand poured with love',
      titleLine1: 'Natural luxury,',
      titleLine2: 'made with light.',
      description:
        'Our candles are inspired by nature and handcrafted to bring warmth, calm and beauty into your home.',
      cta: 'View products →',
      heroAlt: 'Vela Candela candles',
    },
    products: {
      eyebrow: 'Products',
      title: 'Our collections',
      pageTitle: 'Products',
    },
    product: {
      eyebrow: 'Product',
      orderEmail: 'Order via email',
      orderNote: 'For orders or inquiries, send us an email — we will reply as soon as possible.',
      burnTime: 'Burn time',
      weight: 'Weight',
      grams: 'g',
      hours: 'h',
      notFound: 'Product not found.',
      backToProducts: 'Back to products',
    },
    productCard: {
      viewDetails: 'Details',
    },
    about: {
      eyebrow: 'About',
      title: 'Vela Candela',
      p1: 'Vela Candela is a small workshop of handcrafted candles made from natural soy wax. Each candle is poured with care, in small batches, to preserve an authentic scent and the warmth of the flame.',
      p2: 'Inspired by nature and the Mediterranean rhythm, we choose fragrances that calm the space and invite a moment for yourself — unhurried, in soft light.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      intro:
        'For orders, collaborations or general questions, email us. We do not offer online checkout yet — all orders are handled personally by message.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send inquiry',
      success: 'Thank you! Your message was received (demo).',
      emailCta: 'Send an email',
    },
    footer: {
      join: 'Join our world',
      desc: 'Be the first to know about new collections and exclusive offers.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
    },
    catalog: {
      lemonBurst: {
        name: 'Lemon & verbena',
        description: 'Fresh lemon and verbena on a 100% soy wax base. A light, uplifting note for daytime spaces.',
      },
      forestMoss: {
        name: 'Forest moss',
        description: 'Green moss and cedar for a calm, natural ambience. Ideal for evening relaxation.',
      },
      vanillaSky: {
        name: 'Vanilla & caramel',
        description: 'Warm vanilla with a hint of caramel. A cozy, homely atmosphere.',
      },
    },
  },
} as const
