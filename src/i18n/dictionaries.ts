export type Lang = "sq" | "en" | "it";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "sq", label: "SQ" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
];

type Dict = Record<string, string>;

export const dictionaries: Record<Lang, Dict> = {
  sq: {
    "nav.home": "Kreu",
    "nav.services": "Shërbimet",
    "nav.about": "Rreth Kujtim Cakrani",
    "nav.contact": "Kontakt",
    "cta.contact": "Na Kontaktoni",
    "cta.services": "Shërbimet Tona",

    "hero.eyebrow": "Studio Ligjore Cakrani",
    "hero.title": "Përsosmëri në Përfaqësimin Ligjor",
    "hero.subtitle":
      "Studio Ligjore Cakrani përfaqëson klientë në çështje të rëndësishme në mbarë Shqipërinë, me ekspertizë të dëshmuar pranë SPAK dhe Gjykatës Evropiane për të Drejtat e Njeriut në Strasburg.",
    "hero.trust": "Çështje në mbarë Shqipërinë · Ekspertizë SPAK · GJEDNJ Strasburg",

    "services.title": "Fushat e Ekspertizës",
    "services.subtitle": "Përfaqësim i specializuar në çdo degë të së drejtës.",
    "services.civil.title": "E Drejta Civile",
    "services.civil.desc":
      "Mosmarrëveshje pronësie, kontrata, trashëgimi, familja dhe përfaqësim në gjykata civile.",
    "services.penal.title": "E Drejta Penale",
    "services.penal.desc":
      "Mbrojtje penale në të gjitha shkallët, çështje të krimit ekonomik dhe të organizuar.",
    "services.admin.title": "E Drejta Administrative",
    "services.admin.desc":
      "Konflikte me institucionet shtetërore, ankime administrative dhe çështje në Gjykatën Administrative.",
    "services.corp.title": "E Drejta Tregtare",
    "services.corp.desc":
      "Konsulencë për shoqëritë, kontrata tregtare, M&A, qeverisje korporative dhe pajtim.",

    "echr.title": "Gjykata Evropiane për të Drejtat e Njeriut — Strasburg",
    "echr.desc":
      "Përfaqësojmë klientë para Gjykatës Evropiane për të Drejtat e Njeriut në Strasburg, me ekspertizë të thelluar në çështje të të drejtave themelore dhe shterimit të mjeteve të brendshme ligjore.",
    "spak.title": "SPAK — Struktura e Posaçme Antikorrupsion",
    "spak.desc":
      "Trajtojmë çështje të rëndësishme dhe të ndjeshme pranë SPAK-ut, me një histori të suksesshme në mbrojtjen e klientëve në hetime për korrupsion dhe krim të organizuar.",

    "why.title": "Pse Të Na Zgjidhni",
    "why.track": "Histori Suksesi",
    "why.track.desc": "Vite eksperiencë dhe çështje të fituara në të gjitha shkallët e gjyqësorit.",
    "why.reach": "Shtrirje Kombëtare",
    "why.reach.desc": "Zyra në Tiranë, Vlorë dhe Fier — përfaqësim në mbarë Shqipërinë.",
    "why.intl": "Praktikë Ndërkombëtare",
    "why.intl.desc": "Përvojë në GJEDNJ Strasburg dhe çështje me dimension ndërkombëtar.",
    "why.discretion": "Konfidencialitet",
    "why.discretion.desc": "Diskrecion absolut dhe komunikim i drejtpërdrejtë me avokatin tuaj.",

    "testimonials.title": "Çfarë Thonë Klientët",

    "about.title": "Kujtim Cakrani",
    "about.role": "Avokat & Themelues",
    "about.bio":
      "Kujtim Cakrani është themelues dhe drejtues i Studios Ligjore Cakrani. Me një karrierë të dedikuar mbrojtjes së drejtësisë dhe të drejtave të klientëve të tij, ai ka përfaqësuar çështje të një rëndësie të veçantë në Shqipëri dhe pranë Gjykatës Evropiane për të Drejtat e Njeriut në Strasburg.",
    "about.firm.title": "Studio",
    "about.firm.desc":
      "Studio Ligjore Cakrani është sinonim i përkushtimit, integritetit dhe rezultateve. Kombinojmë përvojën e gjerë gjyqësore me një qasje strategjike për çdo klient.",

    "contact.title": "Na Kontaktoni",
    "contact.subtitle": "Jemi në dispozicionin tuaj për konsultë konfidenciale.",
    "contact.name": "Emri",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.subject": "Subjekti",
    "contact.message": "Mesazhi",
    "contact.send": "Dërgo Mesazhin",
    "contact.success": "Faleminderit! Do t'ju kontaktojmë së shpejti.",
    "contact.offices": "Zyrat Tona",
    "office.vlore": "Vlorë",
    "office.vlore.addr": "Rruga Sali Hali Kokonodi, Vlorë",
    "office.tirane": "Tiranë",
    "office.tirane.addr": "Kompleksi Kika 2, Tiranë",
    "office.fier": "Fier",
    "office.fier.addr": "Pranë Gjykatës së Shkallës së Parë, Fier",

    "footer.tag": "Përsosmëri në përfaqësimin ligjor në mbarë Shqipërinë.",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Kujtim Cakrani",
    "nav.contact": "Contact",
    "cta.contact": "Contact Us",
    "cta.services": "Our Services",

    "hero.eyebrow": "Studio Ligjore Cakrani",
    "hero.title": "Excellence in Legal Representation",
    "hero.subtitle":
      "Studio Ligjore Cakrani represents clients in important cases all over Albania, with significant expertise at SPAK and before the European Court of Human Rights in Strasbourg.",
    "hero.trust": "Cases across Albania · SPAK expertise · ECHR Strasbourg",

    "services.title": "Areas of Practice",
    "services.subtitle": "Specialised representation across every branch of the law.",
    "services.civil.title": "Civil Law",
    "services.civil.desc":
      "Property disputes, contracts, inheritance, family matters and civil court representation.",
    "services.penal.title": "Penal Law",
    "services.penal.desc":
      "Criminal defence at every instance, including economic and organised crime cases.",
    "services.admin.title": "Administrative Law",
    "services.admin.desc":
      "Disputes with state institutions, administrative appeals and Administrative Court litigation.",
    "services.corp.title": "Corporate Law",
    "services.corp.desc":
      "Counsel for companies, commercial contracts, M&A, corporate governance and compliance.",

    "echr.title": "European Court of Human Rights — Strasbourg",
    "echr.desc":
      "We represent clients before the European Court of Human Rights in Strasbourg, with deep expertise in fundamental rights and the exhaustion of domestic remedies.",
    "spak.title": "SPAK — Special Anti-Corruption Structure",
    "spak.desc":
      "We handle important and sensitive matters at SPAK, with a strong record defending clients in corruption and organised crime investigations.",

    "why.title": "Why Choose Us",
    "why.track": "Proven Track Record",
    "why.track.desc": "Years of experience and cases won across every level of the judiciary.",
    "why.reach": "Nationwide Reach",
    "why.reach.desc": "Offices in Tirana, Vlorë and Fier — representation across Albania.",
    "why.intl": "International Practice",
    "why.intl.desc": "Experience before the ECHR in Strasbourg and on cross-border matters.",
    "why.discretion": "Confidentiality",
    "why.discretion.desc": "Absolute discretion and direct communication with your lawyer.",

    "testimonials.title": "What Clients Say",

    "about.title": "Kujtim Cakrani",
    "about.role": "Attorney & Founder",
    "about.bio":
      "Kujtim Cakrani is the founder and managing partner of Studio Ligjore Cakrani. Devoted to the defence of justice and the rights of his clients, he has represented matters of major importance throughout Albania and before the European Court of Human Rights in Strasbourg.",
    "about.firm.title": "The Firm",
    "about.firm.desc":
      "Studio Ligjore Cakrani is synonymous with commitment, integrity and results. We combine extensive courtroom experience with a strategic approach for every client.",

    "contact.title": "Contact Us",
    "contact.subtitle": "We are at your disposal for a confidential consultation.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Thank you! We will be in touch shortly.",
    "contact.offices": "Our Offices",
    "office.vlore": "Vlorë",
    "office.vlore.addr": "Rruga Sali Hali Kokonodi, Vlorë",
    "office.tirane": "Tirana",
    "office.tirane.addr": "Kompleksi Kika 2, Tirana",
    "office.fier": "Fier",
    "office.fier.addr": "Near the Court of First Instance, Fier",

    "footer.tag": "Excellence in legal representation across Albania.",
    "footer.rights": "All rights reserved.",
  },
  it: {
    "nav.home": "Home",
    "nav.services": "Servizi",
    "nav.about": "Chi è Kujtim Cakrani",
    "nav.contact": "Contatti",
    "cta.contact": "Contattaci",
    "cta.services": "I Nostri Servizi",

    "hero.eyebrow": "Studio Ligjore Cakrani",
    "hero.title": "Eccellenza nella Rappresentanza Legale",
    "hero.subtitle":
      "Lo Studio Legale Cakrani rappresenta clienti in cause di rilievo in tutta l'Albania, con una significativa esperienza presso SPAK e dinanzi alla Corte Europea dei Diritti dell'Uomo di Strasburgo.",
    "hero.trust": "Cause in tutta l'Albania · Esperienza SPAK · CEDU Strasburgo",

    "services.title": "Aree di Competenza",
    "services.subtitle": "Rappresentanza specializzata in ogni ramo del diritto.",
    "services.civil.title": "Diritto Civile",
    "services.civil.desc":
      "Controversie immobiliari, contratti, successioni, diritto di famiglia e rappresentanza civile.",
    "services.penal.title": "Diritto Penale",
    "services.penal.desc":
      "Difesa penale in ogni grado di giudizio, reati economici e criminalità organizzata.",
    "services.admin.title": "Diritto Amministrativo",
    "services.admin.desc":
      "Controversie con la pubblica amministrazione, ricorsi e contenzioso al Tribunale Amministrativo.",
    "services.corp.title": "Diritto Societario",
    "services.corp.desc":
      "Consulenza alle imprese, contratti commerciali, M&A, governance e compliance.",

    "echr.title": "Corte Europea dei Diritti dell'Uomo — Strasburgo",
    "echr.desc":
      "Rappresentiamo i clienti dinanzi alla Corte Europea dei Diritti dell'Uomo di Strasburgo, con profonda esperienza nei diritti fondamentali e nell'esaurimento dei rimedi interni.",
    "spak.title": "SPAK — Struttura Speciale Anticorruzione",
    "spak.desc":
      "Trattiamo cause importanti e delicate presso SPAK, con un solido curriculum nella difesa di clienti in indagini per corruzione e criminalità organizzata.",

    "why.title": "Perché Sceglierci",
    "why.track": "Risultati Comprovati",
    "why.track.desc": "Anni di esperienza e cause vinte in ogni grado di giudizio.",
    "why.reach": "Copertura Nazionale",
    "why.reach.desc": "Uffici a Tirana, Valona e Fier — rappresentanza in tutta l'Albania.",
    "why.intl": "Pratica Internazionale",
    "why.intl.desc": "Esperienza presso la CEDU di Strasburgo e in cause transfrontaliere.",
    "why.discretion": "Riservatezza",
    "why.discretion.desc": "Discrezione assoluta e comunicazione diretta con il vostro avvocato.",

    "testimonials.title": "Cosa Dicono i Clienti",

    "about.title": "Kujtim Cakrani",
    "about.role": "Avvocato e Fondatore",
    "about.bio":
      "Kujtim Cakrani è fondatore e managing partner dello Studio Legale Cakrani. Dedito alla difesa della giustizia e dei diritti dei propri clienti, ha rappresentato cause di grande rilievo in tutta l'Albania e dinanzi alla Corte Europea dei Diritti dell'Uomo di Strasburgo.",
    "about.firm.title": "Lo Studio",
    "about.firm.desc":
      "Lo Studio Legale Cakrani è sinonimo di impegno, integrità e risultati. Uniamo una vasta esperienza giudiziaria a un approccio strategico per ogni cliente.",

    "contact.title": "Contattaci",
    "contact.subtitle": "Siamo a vostra disposizione per una consulenza riservata.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.phone": "Telefono",
    "contact.subject": "Oggetto",
    "contact.message": "Messaggio",
    "contact.send": "Invia Messaggio",
    "contact.success": "Grazie! Vi contatteremo a breve.",
    "contact.offices": "I Nostri Uffici",
    "office.vlore": "Valona",
    "office.vlore.addr": "Rruga Sali Hali Kokonodi, Valona",
    "office.tirane": "Tirana",
    "office.tirane.addr": "Kompleksi Kika 2, Tirana",
    "office.fier": "Fier",
    "office.fier.addr": "Vicino al Tribunale di Primo Grado, Fier",

    "footer.tag": "Eccellenza nella rappresentanza legale in tutta l'Albania.",
    "footer.rights": "Tutti i diritti riservati.",
  },
};