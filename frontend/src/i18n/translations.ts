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
      homeLabel: 'Vela Candela — početna',
      skipToContent: 'Preskoči na sadržaj',
    },
    meta: {
      home: {
        title: 'Početna',
        description:
          'Vela Candela — ručno izrađene svijeće od prirodnog voska. Pregledajte kolekcije, galeriju i naručite putem e-maila.',
      },
      products: {
        title: 'Proizvodi',
        description:
          'Pregled ručno izrađenih svijeća i kreacija iz radionice Vela Candela. Cijene na upit — kontaktirajte nas za narudžbu.',
      },
      gallery: {
        title: 'Galerija',
        description: 'Fotografije ručno izrađenih svijeća i buketa iz radionice Vela Candela.',
      },
      about: {
        title: 'O nama',
        description:
          'Upoznajte Vela Candela — malu radionicu ručno izrađenih svijeća inspiriranu prirodom i mediteranskim ritmom.',
      },
      contact: {
        title: 'Kontakt',
        description:
          'Kontaktirajte Vela Candela za narudžbe, suradnje i upite. Odgovaramo putem e-maila u najkraćem roku.',
      },
      notFound: {
        title: 'Stranica nije pronađena',
        description: 'Tražena stranica ne postoji ili je uklonjena.',
      },
    },
    notFound: {
      title: 'Stranica nije pronađena',
      description: 'Nažalost, stranica koju tražite ne postoji. Provjerite adresu ili se vratite na početnu.',
      cta: 'Natrag na početnu',
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
      priceOnRequest: 'Cijena na upit',
      defaultDescription: 'Ručno izrađena kreacija iz radionice Vela Candela.',
      weight: 'Težina',
      grams: 'g',
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
      formNote:
        'Obrazac otvara vaš e-mail program s unesenim podacima. Poruku šaljete izravno na našu adresu.',
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
      addressPending: 'Adresa će biti objavljena uskoro.',
      gdprNotice:
        'Poštujemo vašu privatnost u skladu s Općom uredbom o zaštiti podataka (GDPR) i važećim propisima Republike Hrvatske. Ne prodajemo vaše osobne podatke trećim stranama.',
      rights: 'Sva prava pridržana.',
      credit: 'Web stranicu izradio',
    },
    cookieConsent: {
      title: 'Kolačići i vaša privatnost',
      intro:
        'Koristimo isključivo neophodne kolačiće i lokalnu pohranu za rad stranice i pamćenje jezičnih postavki, u skladu s GDPR-om. Klikom na „Prihvati” potvrđujete korištenje tih tehničkih podataka.',
      accept: 'Prihvati',
    },
    legal: {
      lastUpdated: 'Zadnje ažuriranje',
      pendingValue: 'Podaci uskoro dostupni',
      imprint: {
        title: 'Pravne informacije',
        summary: 'Podaci o subjektu, djelatnosti i nadležnom tijelu za zaštitu podataka.',
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
        summary: 'Kako obrađujemo osobne podatke u skladu s GDPR-om i hrvatskim propisima.',
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
              'Analitika ili marketinški alati — isključivo uz vašu privolu (čl. 6. st. 1. t. a) GDPR-a), ako ih u budućnosti uključimo.',
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
        summary: 'Koje kolačiće koristimo i kako njima upravljati.',
        blocks: [
          {
            heading: '1. Što su kolačići',
            paragraphs: [
              'Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vaš uređaj prilikom posjeta web stranici. Slične tehnologije uključuju localStorage i sessionStorage. Korištenje nebitnih kolačića uređuje Direktiva 2002/58/EZ (ePrivacy) i GDPR.',
            ],
          },
          {
            heading: '2. Kako koristimo kolačiće',
            paragraphs: ['Trenutno na stranici {{businessName}} koristimo isključivo neophodne tehničke podatke:'],
            bullets: [
              'Pamćenje jezičnih postavki (vela-locale u localStorage).',
              'Zapis vaše suglasnosti za kolačiće (vela-cookie-consent u localStorage).',
              'Tehnički logovi poslužitelja nužni za sigurnost i rad stranice.',
            ],
          },
          {
            heading: '3. Upravljanje privolama',
            paragraphs: [
              'Pri prvom posjetu prikazujemo obavijest o kolačićima. Ako u budućnosti uvedemo analitiku ili marketinške alate, tražit ćemo vašu izričitu privolu prije njihova aktiviranja.',
            ],
          },
          {
            heading: '4. Brisanje kolačića',
            paragraphs: [
              'Kolačiće možete obrisati ili blokirati u postavkama preglednika. Imajte na umu da onemogućavanje neophodnih kolačića može utjecati na funkcionalnost stranice (npr. pamćenje jezika).',
            ],
          },
        ],
      },
      terms: {
        title: 'Uvjeti korištenja',
        summary: 'Pravila korištenja web stranice, narudžbe i prava potrošača.',
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
              'Ako je cijena označena kao „na upit”, konačna cijena, dostupnost i uvjeti dostave potvrđuju se u komunikaciji s kupcem prije plaćanja. Sve cijene za potrošače u RH iskazuju se u eurima, uključujući PDV ako je primjenjivo.',
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
      homeLabel: 'Vela Candela — home',
      skipToContent: 'Skip to content',
    },
    meta: {
      home: {
        title: 'Home',
        description:
          'Vela Candela — handcrafted natural wax candles. Browse collections, gallery and order by email.',
      },
      products: {
        title: 'Products',
        description:
          'Handcrafted candles and creations from the Vela Candela workshop. Price on request — contact us to order.',
      },
      gallery: {
        title: 'Gallery',
        description: 'Photos of handcrafted candles and bouquets from the Vela Candela workshop.',
      },
      about: {
        title: 'About',
        description:
          'Meet Vela Candela — a small workshop of handcrafted candles inspired by nature and the Mediterranean rhythm.',
      },
      contact: {
        title: 'Contact',
        description:
          'Contact Vela Candela for orders, collaborations and inquiries. We reply by email as soon as possible.',
      },
      notFound: {
        title: 'Page not found',
        description: 'The requested page does not exist or has been removed.',
      },
    },
    notFound: {
      title: 'Page not found',
      description: 'Sorry, the page you are looking for does not exist. Check the address or return to the home page.',
      cta: 'Back to home',
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
      priceOnRequest: 'Price on request',
      defaultDescription: 'A handcrafted creation from the Vela Candela workshop.',
      weight: 'Weight',
      grams: 'g',
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
      formNote:
        'The form opens your email app with the entered details. You send the message directly to our address.',
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
      addressPending: 'Address will be published soon.',
      gdprNotice:
        'We respect your privacy in accordance with the General Data Protection Regulation (GDPR) and applicable laws of the Republic of Croatia. We do not sell your personal data to third parties.',
      rights: 'All rights reserved.',
      credit: 'Website developed by',
    },
    cookieConsent: {
      title: 'Cookies and your privacy',
      intro:
        'We use only essential cookies and local storage for site operation and language settings, in line with the GDPR. By clicking “Accept” you acknowledge use of these technical data.',
      accept: 'Accept',
    },
    legal: {
      lastUpdated: 'Last updated',
      pendingValue: 'Details available soon',
      imprint: {
        title: 'Legal notice',
        summary: 'Business details, activity and the competent data protection authority.',
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
        summary: 'How we process personal data under the GDPR and Croatian law.',
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
              'Analytics or marketing tools — only with your consent (Art. 6(1)(a) GDPR), if we enable them in the future.',
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
        summary: 'Which cookies we use and how to manage them.',
        blocks: [
          {
            heading: '1. What are cookies',
            paragraphs: [
              'Cookies are small text files stored on your device when you visit a website. Similar technologies include localStorage and sessionStorage. Use of non-essential cookies is governed by Directive 2002/58/EC (ePrivacy) and the GDPR.',
            ],
          },
          {
            heading: '2. How we use cookies',
            paragraphs: ['Currently on {{businessName}} we use only essential technical data:'],
            bullets: [
              'Remembering language settings (vela-locale in localStorage).',
              'Recording your cookie consent (vela-cookie-consent in localStorage).',
              'Server technical logs required for security and site operation.',
            ],
          },
          {
            heading: '3. Consent management',
            paragraphs: [
              'On your first visit we show a cookie notice. If we introduce analytics or marketing tools in the future, we will ask for your explicit consent before activating them.',
            ],
          },
          {
            heading: '4. Deleting cookies',
            paragraphs: [
              'You can delete or block cookies in your browser settings. Note that disabling essential cookies may affect site functionality (e.g. language memory).',
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of use',
        summary: 'Rules for using the website, placing orders and consumer rights.',
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
              'Where a price is marked as “on request”, final price, availability and delivery terms are confirmed in communication with the customer before payment. All consumer prices in Croatia are shown in euros, including VAT where applicable.',
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
  },
} as const
