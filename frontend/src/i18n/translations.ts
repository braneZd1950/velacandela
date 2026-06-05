export type Locale = 'hr' | 'en'

export const translations = {
  hr: {
    nav: {
      home: 'Početna',
      products: 'Proizvodi',
      gallery: 'Galerija',
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
      galleryCta: 'Pogledaj galeriju →',
      heroAlt: 'Vela Candela svijeće',
    },
    products: {
      eyebrow: 'Proizvodi',
      title: 'Naše kolekcije',
      pageTitle: 'Proizvodi',
    },
    gallery: {
      eyebrow: 'Galerija',
      title: 'Naše kreacije',
      intro:
        'Pregledajte ručno izrađene svijeće i bukete iz naše radionice. Kliknite na fotografiju za veći prikaz.',
      close: 'Zatvori',
      prev: 'Prethodna slika',
      next: 'Sljedeća slika',
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
      desc: 'Ručno izrađene svijeće od prirodnog voska — toplina, mir i ljepota u vašem domu.',
      navigation: 'Navigacija',
      contactTitle: 'Kontakt',
      legalTitle: 'Pravne informacije',
      legalNavLabel: 'Pravne informacije i politike',
      imprint: 'Pravne informacije',
      privacy: 'Politika privatnosti',
      cookies: 'Politika kolačića',
      terms: 'Uvjeti korištenja',
      cookieSettings: 'Postavke kolačića',
      gdprNotice:
        'Poštujemo vašu privatnost u skladu s Općom uredbom o zaštiti podataka (GDPR) i važećim propisima Republike Hrvatske. Ne prodajemo vaše osobne podatke trećim stranama.',
      rights: 'Sva prava pridržana.',
      credit: 'Web stranicu izradio',
    },
    cookieConsent: {
      title: 'Kolačići i vaša privatnost',
      intro:
        'Koristimo kolačiće kako bismo osigurali ispravan rad stranice, zapamtili vaše jezične postavke i — uz vašu privolu — analizirali promet. Neophodne kolačiće koristimo na temelju legitimnog interesa; ostale samo uz vašu suglasnost, u skladu s GDPR-om i ePrivacy pravilima EU.',
      learnMore: 'Više informacija:',
      settings: 'Postavke',
      reject: 'Odbij neobavezne',
      accept: 'Prihvati sve',
      settingsTitle: 'Upravljanje privolama',
      settingsIntro:
        'Odaberite kategorije kolačića koje želite dopustiti. Neophodni kolačići uvijek su aktivni jer su potrebni za osnovno funkcioniranje stranice.',
      close: 'Zatvori',
      save: 'Spremi odabir',
      alwaysOn: 'Uvijek aktivno',
      necessary: {
        title: 'Neophodni kolačići',
        desc: 'Potrebni za rad stranice, sigurnost i pamćenje jezičnih postavki (localStorage). Ne mogu se isključiti.',
      },
      analytics: {
        title: 'Analitički kolačići',
        desc: 'Pomažu nam razumjeti korištenje stranice anonimiziranim statistikama (npr. Google Analytics), samo uz vašu privolu.',
      },
      marketing: {
        title: 'Marketinški kolačići',
        desc: 'Koriste se za personalizirane oglase i mjerne tagove društvenih mreža, samo uz vašu privolu.',
      },
    },
    legal: {
      lastUpdated: 'Zadnje ažuriranje',
      imprint: {
        title: 'Pravne informacije',
        blocks: [
          {
            heading: 'Podaci o subjektu',
            paragraphs: [
              '{{businessName}} — {{legalForm}}.',
              'Sjedište: {{address}}.',
              'OIB: {{oib}}.',
              'E-mail: {{email}}.',
            ],
          },
          {
            heading: 'Djelatnost',
            paragraphs: [
              'Web stranica služi za informativnu prezentaciju ručno izrađenih svijeća i proizvoda brenda {{businessName}}. Online prodaja i plaćanje nisu dostupni putem ove stranice; narudžbe se zaprimaju putem e-maila ili drugih dogovorenih kanala.',
            ],
          },
          {
            heading: 'Nadzorno tijelo',
            paragraphs: [
              'Za pritužbe u vezi zaštite osobnih podataka nadležan je Agencija za zaštitu osobnih podataka (AZOP), Martićeva ulica 14, 10000 Zagreb, www.azop.hr.',
            ],
          },
        ],
      },
      privacy: {
        title: 'Politika privatnosti',
        blocks: [
          {
            heading: '1. Uvod',
            paragraphs: [
              'Ova Politika privatnosti objašnjava kako {{businessName}} („mi“, „nas“) obrađuje osobne podatke posjetitelja web stranice u skladu s Uredbom (EU) 2016/679 (GDPR), Zakonom o provedbi Opće uredbe o zaštiti podataka (NN 42/18) i ostalim primjenjivim propisima Republike Hrvatske i Europske unije.',
            ],
          },
          {
            heading: '2. Upravitelj obrade',
            paragraphs: [
              'Upravitelj obrade: {{businessName}}, {{address}}. OIB: {{oib}}. Kontakt za zaštitu podataka: {{email}}.',
            ],
          },
          {
            heading: '3. Koje podatke obrađujemo',
            paragraphs: [
              'Ovisno o načinu korištenja stranice, možemo obrađivati sljedeće kategorije podataka:',
            ],
            bullets: [
              'Identifikacijski i kontakt podaci koje nam dobrovoljno pošaljete e-mailom (ime, adresa e-pošte, sadržaj poruke).',
              'Tehničke podatke koje automatski generira vaš uređaj (IP adresa, tip preglednika, operativni sustav, datum i vrijeme pristupa) — u log datotekama poslužitelja, u opsegu nužnom za sigurnost i rad stranice.',
              'Podatke o postavkama (npr. odabrani jezik sučelja, postavke kolačića) pohranjene lokalno u vašem pregledniku.',
            ],
          },
          {
            heading: '4. Svrha i pravna osnova obrade',
            paragraphs: ['Podatke obrađujemo samo u sljedeće svrhe i na odgovarajućim pravnim osnovama:'],
            bullets: [
              'Odgovor na vaše upite i narudžbe — izvršenje mjera prije sklapanja ugovora ili legitimni interes (čl. 6. st. 1. t. b) i f) GDPR-a).',
              'Pružanje i sigurnost web stranice — legitimni interes (čl. 6. st. 1. t. f) GDPR-a).',
              'Analitika i marketinški kolačići — isključivo uz vašu privolu (čl. 6. st. 1. t. a) GDPR-a), koju možete povući u bilo kojem trenutku.',
              'Ispunjavanje zakonskih obveza (npr. računovodstvo, porezni propisi) — pravna obveza (čl. 6. st. 1. t. c) GDPR-a).',
            ],
          },
          {
            heading: '5. Rok čuvanja',
            paragraphs: [
              'Podatke iz e-mail komunikacije čuvamo onoliko koliko je potrebno za obradu upita, vođenje poslovne dokumentacije i ispunjavanje zakonskih rokova, a zatim ih sigurno brišemo ili anonimiziramo. Tehnički logovi se obično čuvaju do 12 mjeseci, osim ako duže čuvanje nije nužno radi sigurnosnih incidenta.',
            ],
          },
          {
            heading: '6. Primatelji i prijenos podataka',
            paragraphs: [
              'Podatke ne prodajemo niti iznajmljujemo. Možemo angažirati pouzdane pružatelje usluga (hosting, e-mail, analitika) koji djeluju kao izvršitelji obrade i ugovorno su obvezni štititi podatke. Prijenos podataka izvan EU/EGP obavlja se samo uz odgovarajuće jamstvo (npr. standardne ugovorne klauzule EU).',
            ],
          },
          {
            heading: '7. Vaša prava',
            paragraphs: ['U skladu s GDPR-om imate sljedeća prava:'],
            bullets: [
              'Pravo na pristup, ispravak, brisanje i ograničenje obrade.',
              'Pravo na prenosivost podataka (gdje je primjenjivo).',
              'Pravo na prigovor obradi temeljenoj na legitimnom interesu.',
              'Pravo povući privolu u bilo kojem trenutku, bez utjecaja na zakonitost obrade prije povlačenja.',
              'Pravo podnijeti pritužbu AZOP-u (www.azop.hr).',
            ],
          },
          {
            heading: '8. Sigurnost',
            paragraphs: [
              'Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu podataka od neovlaštenog pristupa, gubitka ili zlouporabe, u skladu s načelom integriteta i povjerljivosti.',
            ],
          },
          {
            heading: '9. Promjene politike',
            paragraphs: [
              'Ovu politiku možemo povremeno ažurirati. Nova verzija bit će objavljena na ovoj stranici s naznačenim datumom ažuriranja. Preporučujemo povremeni pregled.',
            ],
          },
        ],
      },
      cookies: {
        title: 'Politika kolačića',
        blocks: [
          {
            heading: '1. Što su kolačići',
            paragraphs: [
              'Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vaš uređaj prilikom posjeta web stranici. Slične tehnologije uključuju localStorage i sessionStorage. Korištenje nebitnih kolačića uređuje Direktiva 2002/58/EZ (ePrivacy) i GDPR.',
            ],
          },
          {
            heading: '2. Kako koristimo kolačići',
            paragraphs: ['Na stranici {{businessName}} koristimo sljedeće kategorije:'],
            bullets: [
              'Neophodni — osiguravaju rad stranice, sigurnost i pamćenje jezičnih postavki (npr. vela-locale, vela-cookie-consent). Pravna osnova: legitimni interes.',
              'Analitički — pomažu nam razumjeti posjećenost (npr. Google Analytics), samo uz vašu privolu.',
              'Marketinški — služe za remarketing i društvene mreže, samo uz vašu privolu.',
            ],
          },
          {
            heading: '3. Upravljanje privolama',
            paragraphs: [
              'Pri prvom posjetu prikazujemo banner za upravljanje privolama. Svoj odabir možete promijeniti u bilo kojem trenutku putem linka „Postavke kolačića“ u podnožju stranice. Povlačenje privole ne utječe na zakonitost obrade prije povlačenja.',
            ],
          },
          {
            heading: '4. Kolačići trećih strana',
            paragraphs: [
              'Ako aktivirate analitičke ili marketinške kolačiće, odgovarajući pružatelji usluga mogu postaviti vlastite kolačiće. Preporučujemo pregled njihovih politika privatnosti. Podatke dijelimo samo u opsegu nužnom za pružanje odabrane usluge i uz odgovarajuće ugovore o obradi.',
            ],
          },
          {
            heading: '5. Brisanje kolačića',
            paragraphs: [
              'Kolačiće možete obrisati ili blokirati u postavkama preglednika. Imajte na umu da onemogućavanje neophodnih kolačića može utjecati na funkcionalnost stranice (npr. pamćenje jezika).',
            ],
          },
        ],
      },
      terms: {
        title: 'Uvjeti korištenja',
        blocks: [
          {
            heading: '1. Opće odredbe',
            paragraphs: [
              'Ovi Uvjeti korištenja uređuju korištenje web stranice {{businessName}}. Korištenjem stranice potvrđujete da ste pročitali i razumjeli ove uvjete, Politiku privatnosti i Politiku kolačića.',
            ],
          },
          {
            heading: '2. Priroda usluge',
            paragraphs: [
              'Stranica ima informativni karakter i služi za predstavljanje proizvoda. Online plaćanje putem stranice nije dostupno. Ugovor o kupnji sklapa se izvan stranice (e-mail, telefon ili osobno), u skladu sa Zakonom o zaštiti potrošača (NN 19/22) i propisima o daljinskoj prodaji, gdje je primjenjivo.',
            ],
          },
          {
            heading: '3. Cijene i dostupnost',
            paragraphs: [
              'Prikazane cijene su informativne i mogu se promijeniti. Konačna cijena, dostupnost i uvjeti dostave potvrđuju se u komunikaciji s kupcem prije plaćanja. Sve cijene za potrošače u RH iskazuju se u eurima, uključujući PDV ako je primjenjivo.',
            ],
          },
          {
            heading: '4. Intelektualno vlasništvo',
            paragraphs: [
              'Sav sadržaj stranice (tekstovi, fotografije, logotip, dizajn) zaštićen je autorskim pravom i ostali pravima intelektualnog vlasništva. Zabranjeno je neovlašteno kopiranje, distribucija ili komercijalna uporaba bez pisane suglasnosti {{businessName}}.',
            ],
          },
          {
            heading: '5. Ograničenje odgovornosti',
            paragraphs: [
              'Trudimo se osigurati točnost informacija, ali ne jamčimo da su svi sadržaji u svakom trenutku potpuni i bez pogrešaka. Slike proizvoda mogu se razlikovati od stvarnog izgleda zbog ručne izrade i fotografije. U maksimalnoj mjeri dopuštenoj zakonom, ne odgovaramo za posrednu štetu nastalu korištenjem stranice.',
            ],
          },
          {
            heading: '6. Prava potrošača',
            paragraphs: [
              'Kupci koji su potrošači u smislu zakona imaju sva zakonom propisana prava, uključujući pravo na jednostrani raskid ugovora sklopljenog na daljinu u propisanom roku, osim za proizvode izuzete zakonem. Reklamacije se podnose na {{email}}.',
            ],
          },
          {
            heading: '7. Mjerodavno pravo',
            paragraphs: [
              'Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za sporove je nadležan stvarno nadležan sud u Republici Hrvatskoj, osim kad je za potrošače propisano drugačije.',
            ],
          },
          {
            heading: '8. Izmjene uvjeta',
            paragraphs: [
              'Zadržavamo pravo izmjene ovih uvjeta. Važeća verzija uvijek je objavljena na ovoj stranici s datumom ažuriranja.',
            ],
          },
        ],
      },
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
      mediumRose: {
        name: 'Srednja ruža',
        description: 'Blaga ružina nota s cvjetnim akcentima. Romantičan, nježan miris za posebne trenutke.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      gallery: 'Gallery',
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
      galleryCta: 'View gallery →',
      heroAlt: 'Vela Candela candles',
    },
    products: {
      eyebrow: 'Products',
      title: 'Our collections',
      pageTitle: 'Products',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Our creations',
      intro:
        'Browse handcrafted candles and bouquets from our workshop. Click a photo for a larger view.',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
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
      desc: 'Handcrafted natural wax candles — warmth, calm and beauty for your home.',
      navigation: 'Navigation',
      contactTitle: 'Contact',
      legalTitle: 'Legal information',
      legalNavLabel: 'Legal information and policies',
      imprint: 'Legal notice',
      privacy: 'Privacy policy',
      cookies: 'Cookie policy',
      terms: 'Terms of use',
      cookieSettings: 'Cookie settings',
      gdprNotice:
        'We respect your privacy in accordance with the General Data Protection Regulation (GDPR) and applicable laws of the Republic of Croatia. We do not sell your personal data to third parties.',
      rights: 'All rights reserved.',
      credit: 'Website developed by',
    },
    cookieConsent: {
      title: 'Cookies and your privacy',
      intro:
        'We use cookies to ensure the site works correctly, remember your language settings and — with your consent — analyse traffic. Essential cookies are used on the basis of legitimate interest; all others only with your consent, in line with the GDPR and EU ePrivacy rules.',
      learnMore: 'Learn more:',
      settings: 'Settings',
      reject: 'Reject optional',
      accept: 'Accept all',
      settingsTitle: 'Consent management',
      settingsIntro:
        'Choose which cookie categories you wish to allow. Essential cookies are always active because they are required for basic site functionality.',
      close: 'Close',
      save: 'Save selection',
      alwaysOn: 'Always active',
      necessary: {
        title: 'Essential cookies',
        desc: 'Required for site operation, security and remembering language settings (localStorage). They cannot be disabled.',
      },
      analytics: {
        title: 'Analytics cookies',
        desc: 'Help us understand site usage through anonymised statistics (e.g. Google Analytics), only with your consent.',
      },
      marketing: {
        title: 'Marketing cookies',
        desc: 'Used for personalised ads and social media tracking tags, only with your consent.',
      },
    },
    legal: {
      lastUpdated: 'Last updated',
      imprint: {
        title: 'Legal notice',
        blocks: [
          {
            heading: 'Business details',
            paragraphs: [
              '{{businessName}} — {{legalForm}}.',
              'Registered address: {{address}}.',
              'OIB (tax ID): {{oib}}.',
              'Email: {{email}}.',
            ],
          },
          {
            heading: 'Activity',
            paragraphs: [
              'This website provides information about handcrafted candles and products of {{businessName}}. Online sales and payment are not available on this site; orders are accepted by email or other agreed channels.',
            ],
          },
          {
            heading: 'Supervisory authority',
            paragraphs: [
              'For complaints regarding personal data protection, the competent authority is the Croatian Personal Data Protection Agency (AZOP), Martićeva 14, 10000 Zagreb, www.azop.hr.',
            ],
          },
        ],
      },
      privacy: {
        title: 'Privacy policy',
        blocks: [
          {
            heading: '1. Introduction',
            paragraphs: [
              'This Privacy Policy explains how {{businessName}} (“we”, “us”) processes personal data of website visitors in accordance with Regulation (EU) 2016/679 (GDPR), the Croatian Act on Implementation of the GDPR (OG 42/18) and other applicable laws of the Republic of Croatia and the European Union.',
            ],
          },
          {
            heading: '2. Data controller',
            paragraphs: [
              'Data controller: {{businessName}}, {{address}}. OIB: {{oib}}. Data protection contact: {{email}}.',
            ],
          },
          {
            heading: '3. Data we process',
            paragraphs: [
              'Depending on how you use the site, we may process the following categories of data:',
            ],
            bullets: [
              'Identification and contact data you voluntarily send by email (name, email address, message content).',
              'Technical data automatically generated by your device (IP address, browser type, operating system, date and time of access) — in server log files, to the extent necessary for security and site operation.',
              'Preference data (e.g. selected interface language, cookie settings) stored locally in your browser.',
            ],
          },
          {
            heading: '4. Purpose and legal basis',
            paragraphs: ['We process data only for the following purposes and on the appropriate legal bases:'],
            bullets: [
              'Responding to inquiries and orders — pre-contractual measures or legitimate interest (Art. 6(1)(b) and (f) GDPR).',
              'Providing and securing the website — legitimate interest (Art. 6(1)(f) GDPR).',
              'Analytics and marketing cookies — only with your consent (Art. 6(1)(a) GDPR), which you may withdraw at any time.',
              'Compliance with legal obligations (e.g. accounting, tax law) — legal obligation (Art. 6(1)(c) GDPR).',
            ],
          },
          {
            heading: '5. Retention period',
            paragraphs: [
              'Email communication data is kept as long as needed to handle inquiries, maintain business records and meet statutory deadlines, then securely deleted or anonymised. Technical logs are usually kept for up to 12 months, unless longer retention is required for security incidents.',
            ],
          },
          {
            heading: '6. Recipients and data transfers',
            paragraphs: [
              'We do not sell or rent your data. We may use trusted service providers (hosting, email, analytics) acting as processors under contractual data protection obligations. Transfers outside the EU/EEA occur only with appropriate safeguards (e.g. EU Standard Contractual Clauses).',
            ],
          },
          {
            heading: '7. Your rights',
            paragraphs: ['Under the GDPR you have the following rights:'],
            bullets: [
              'Right of access, rectification, erasure and restriction of processing.',
              'Right to data portability (where applicable).',
              'Right to object to processing based on legitimate interest.',
              'Right to withdraw consent at any time, without affecting the lawfulness of processing before withdrawal.',
              'Right to lodge a complaint with AZOP (www.azop.hr).',
            ],
          },
          {
            heading: '8. Security',
            paragraphs: [
              'We apply appropriate technical and organisational measures to protect data against unauthorised access, loss or misuse, in line with the principles of integrity and confidentiality.',
            ],
          },
          {
            heading: '9. Policy changes',
            paragraphs: [
              'We may update this policy from time to time. The new version will be published on this page with the update date. We recommend reviewing it periodically.',
            ],
          },
        ],
      },
      cookies: {
        title: 'Cookie policy',
        blocks: [
          {
            heading: '1. What are cookies',
            paragraphs: [
              'Cookies are small text files stored on your device when you visit a website. Similar technologies include localStorage and sessionStorage. Use of non-essential cookies is governed by Directive 2002/58/EC (ePrivacy) and the GDPR.',
            ],
          },
          {
            heading: '2. How we use cookies',
            paragraphs: ['On the {{businessName}} website we use the following categories:'],
            bullets: [
              'Essential — ensure site operation, security and language settings (e.g. vela-locale, vela-cookie-consent). Legal basis: legitimate interest.',
              'Analytics — help us understand traffic (e.g. Google Analytics), only with your consent.',
              'Marketing — used for remarketing and social networks, only with your consent.',
            ],
          },
          {
            heading: '3. Consent management',
            paragraphs: [
              'On your first visit we display a consent banner. You can change your choice at any time via “Cookie settings” in the footer. Withdrawal of consent does not affect the lawfulness of processing before withdrawal.',
            ],
          },
          {
            heading: '4. Third-party cookies',
            paragraphs: [
              'If you enable analytics or marketing cookies, the relevant service providers may set their own cookies. We recommend reviewing their privacy policies. Data is shared only to the extent necessary for the selected service and under appropriate processing agreements.',
            ],
          },
          {
            heading: '5. Deleting cookies',
            paragraphs: [
              'You can delete or block cookies in your browser settings. Note that disabling essential cookies may affect site functionality (e.g. language memory).',
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of use',
        blocks: [
          {
            heading: '1. General',
            paragraphs: [
              'These Terms of Use govern use of the {{businessName}} website. By using the site you confirm that you have read and understood these terms, the Privacy Policy and the Cookie Policy.',
            ],
          },
          {
            heading: '2. Nature of the service',
            paragraphs: [
              'The site is informational and presents products. Online payment is not available. A purchase contract is concluded off-site (email, phone or in person), in accordance with Croatian consumer protection law (OG 19/22) and distance selling rules where applicable.',
            ],
          },
          {
            heading: '3. Prices and availability',
            paragraphs: [
              'Displayed prices are indicative and may change. Final price, availability and delivery terms are confirmed in communication with the customer before payment. All consumer prices in Croatia are shown in euros, including VAT where applicable.',
            ],
          },
          {
            heading: '4. Intellectual property',
            paragraphs: [
              'All site content (text, photos, logo, design) is protected by copyright and other intellectual property rights. Unauthorised copying, distribution or commercial use without written consent from {{businessName}} is prohibited.',
            ],
          },
          {
            heading: '5. Limitation of liability',
            paragraphs: [
              'We strive to keep information accurate but do not guarantee that all content is complete and error-free at all times. Product images may differ from the actual item due to handcrafting and photography. To the maximum extent permitted by law, we are not liable for indirect damage arising from use of the site.',
            ],
          },
          {
            heading: '6. Consumer rights',
            paragraphs: [
              'Customers who are consumers under the law have all statutory rights, including the right to withdraw from a distance contract within the prescribed period, except for products excluded by law. Complaints should be sent to {{email}}.',
            ],
          },
          {
            heading: '7. Governing law',
            paragraphs: [
              'These terms are governed by the laws of the Republic of Croatia. The competent courts in Croatia have jurisdiction, except where mandatory consumer rules provide otherwise.',
            ],
          },
          {
            heading: '8. Changes to terms',
            paragraphs: [
              'We reserve the right to amend these terms. The current version is always published on this page with the update date.',
            ],
          },
        ],
      },
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
      mediumRose: {
        name: 'Medium rose',
        description: 'A soft rose note with floral accents. A romantic, gentle fragrance for special moments.',
      },
    },
  },
} as const
