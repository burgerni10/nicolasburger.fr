import type { Localized } from '../i18n'

// Content mirrors the CV (Portraits 2 Passages edition, 2026).

export const contact = {
  email: 'nicolas.burger@portraits2passages.com',
  linkedin: 'https://www.linkedin.com/in/nicolas-burger/',
  // Web3Forms access key (public by design). While empty, the site shows the email address instead of the form.
  formKey: '5f080e38-2c38-40d1-90ed-c02cae4e2d38'
}

export const tagline: Localized = {
  fr: 'Ingénieur R&D, docteur en sûreté des systèmes · Formateur en numérique responsable',
  en: 'R&D engineer, PhD in systems safety · Trainer in responsible digital technology'
}

export const lead: Localized = {
  fr: 'Je développe des outils numériques pour améliorer les performances industrielles et j’enseigne comment les sociétés humaines peuvent se développer en restant compatibles avec les limites planétaires.',
  en: 'I build digital tools to improve industrial performance, and I teach how human societies can develop while staying within planetary boundaries.'
}

const same = (s: string): Localized => ({ fr: s, en: s })

// Long texts (paragraphs, project texts, points, skills) may contain inline HTML.
export const about: Localized[] = [
  {
    fr: 'Je suis ingénieur R&D à <a href="https://www.optimistik.com/fr">Optimistik</a>, responsable produit d’<a href="https://oibus.optimistik.com">OIBus</a>, produit open-source de collecte de données afin d’améliorer la performance industrielle (énergie, pertes de matières, qualité, etc.). J’enseigne depuis 2016, en salle et en MOOC, sur les dépendances des systèmes industriels, le Système Terre et les effets rebonds.',
    en: 'I am an R&D engineer at <a href="https://www.optimistik.com/en">Optimistik</a> and product manager of <a href="https://oibus.optimistik.com">OIBus</a>, an open-source data collection product that helps improve industrial performance (energy, material loss, quality, etc.). I have been teaching since 2016, in class and through MOOCs, on the dependencies of industrial systems, the Earth system and rebound effects.'
  },
  {
    fr: 'Je m’intéresse au rôle des ingénieurs dans la société, à la façon dont nous interagissons, en tant qu’humains, avec la technologie et avec les autres, et à la démocratie participative comme vecteur de décisions dans les choix sociétaux et technologiques. Je crois aussi que l’innovation peut être stimulée par la diversité culturelle, linguistique et scientifique : c’est l’idée derrière <a href="https://portraits2passages.com">Portraits 2 Passages</a>, que j’ai cofondé pour explorer des territoires et vivre d’authentiques aventures humaines.',
    en: 'I care about the role engineers play in society, about how we, as humans, interact with technology and with each other, and about participatory democracy as a way to make societal and technological choices. I also believe innovation can be boosted by cultural, linguistic and scientific diversity: that is the idea behind <a href="https://portraits2passages.com">Portraits 2 Passages</a>, which I co-founded to explore territories and live real human adventures.'
  }
]

export const expertise: { kicker: Localized; title: Localized; text: Localized }[] = [
  {
    kicker: { fr: 'Industrie et limites planétaires', en: 'Industry & planetary boundaries' },
    title: { fr: 'L’industrie vue par ses données', en: 'Industry through its data' },
    text: {
      fr: 'Données d’énergie, de pertes de matière, de rejets et de qualité pour améliorer la performance industrielle ; enseignement des frontières planétaires, de l’ACV et des effets rebonds.',
      en: 'Energy, material loss, emissions and quality data to improve industrial performance; teaching planetary boundaries, LCA and rebound effects.'
    }
  },
  {
    kicker: { fr: 'Ingénierie pédagogique', en: 'Learning design' },
    title: { fr: 'Des formations actives, en salle et en ligne', en: 'Active learning, in class and online' },
    text: {
      fr: 'Conception complète de cours en ateliers (objectifs, réactivation de la mémoire, travaux en groupes, QCM) ; enseignement en MOOC ; dix ans d’enseignement dans le supérieur.',
      en: 'End-to-end design of workshop-based courses (objectives, retrieval practice, group work, quizzes); MOOC teaching; ten years of teaching in higher education.'
    }
  },
  {
    kicker: { fr: 'Gestion de projet', en: 'Product & coordination' },
    title: { fr: 'Piloter un produit et ses parties prenantes', en: 'Steering a product and its stakeholders' },
    text: {
      fr: 'Product owner depuis 2016 : feuilles de route, priorisation, coordination entre développement, opérations et clients industriels ; co-organisation de la Convention sur les connaissances (IESF).',
      en: 'Product owner since 2016: roadmaps, prioritisation, coordination between development, operations and industrial customers; co-organiser of the Citizen Assembly on scientific knowledges (IESF).'
    }
  },
  {
    kicker: { fr: 'Analyse de risques', en: 'Risk analysis' },
    title: { fr: 'Dépendances et disponibilité des systèmes', en: 'System dependencies and availability' },
    text: {
      fr: 'Thèse sur les compromis entre sécurité et disponibilité ; cartographie des dépendances amont et aval d’un système, tri par criticité.',
      en: 'PhD on the trade-offs between security and availability; mapping a system’s upstream and downstream dependencies, ranked by criticality.'
    }
  }
]

export interface Project {
  name: Localized
  meta: Localized
  text: Localized
  url?: string
}

export const projects: Project[] = [
  {
    name: same('OIBus'),
    meta: { fr: 'Optimistik · depuis 2020', en: 'Optimistik · since 2020' },
    text: {
      fr: 'Le produit open-source qui collecte les données des sites industriels (automates, <em lang="en">historians</em>, capteurs) pour la plateforme OIAnalytics. J’en suis le responsable produit : feuille de route, priorisation, lien avec les équipes clients.',
      en: 'The open-source product that collects data from industrial sites (PLCs, historians, sensors) for the OIAnalytics platform. I am its product manager: roadmap, prioritisation and the link with customer teams.'
    },
    url: 'https://oibus.optimistik.com'
  },
  {
    name: same('Portraits 2 Passages'),
    meta: { fr: 'Co-fondateur · depuis 2018', en: 'Co-founder · since 2018' },
    text: {
      fr: 'Lou, Diane et moi nous sommes rencontrés à l’UTT. Ensemble, nous organisons des voyages de proximité, en stop et sans argent : depuis 2021, des participants partent à la découverte de territoires méconnus (Mayenne, Indre, canton de Lucerne…) et de leurs habitants, et nous publions leurs récits en vidéo. Nous proposons aussi des formations au numérique responsable : frontières planétaires, économie du Donut, techno-diversité, Green IT, conception responsable.',
      en: 'Lou, Diane and I met at UTT. Together, we organise local trips by hitchhiking and without money: since 2021, participants have set off to discover lesser-known places (Mayenne, Indre, the canton of Lucerne…) and the people who live there, and we publish their stories on video. We also offer training in responsible digital technology: planetary boundaries, Doughnut economics, techno-diversity, Green IT, responsible design.'
    },
    url: 'https://portraits2passages.com'
  },
  {
    name: { fr: 'Convention sur les connaissances', en: 'Citizen Assembly on scientific knowledges' },
    meta: { fr: 'IESF · 2025 – 2026', en: 'IESF · 2025 – 2026' },
    text: {
      fr: 'Sur le modèle des conventions citoyennes, 50 docteurs et doctorants réunis pendant plusieurs mois pour formuler des recommandations sur la production, la médiation et la réception des connaissances scientifiques. Sous le Haut patronage du Président de la République.',
      en: 'Modelled on citizens’ assemblies, 50 PhDs and doctoral candidates met over several months to make recommendations on how scientific knowledge is produced, shared and received. Under the High Patronage of the President of the French Republic.'
    },
    url: 'https://conventions.iesf.fr/convention-connaissances/home'
  },
  {
    name: { fr: 'Numérique responsable', en: 'Responsible digital technology' },
    meta: { fr: 'Enseignement · depuis 2022', en: 'Teaching · since 2022' },
    text: {
      fr: 'Le cours « Conception de technologies numériques responsables » à Paris 1 Panthéon-Sorbonne et des enseignements au CNAM, en salle et en MOOC : frontières planétaires, théorie du Donut, ACV, effets rebonds, communs.',
      en: 'The “Designing responsible digital technologies” course at Paris 1 Panthéon-Sorbonne and classes at CNAM, in person and as MOOCs: planetary boundaries, Doughnut economics, LCA, rebound effects, the commons.'
    }
  }
]

export interface Entry {
  period: Localized
  title: Localized
  org: Localized
  points?: Localized[]
}

export const work: Entry[] = [
  {
    period: { fr: 'Depuis août 2020 · Chambéry', en: 'Since Aug 2020 · Chambéry' },
    title: { fr: 'Ingénieur R&D, responsable produit OIBus', en: 'R&D engineer, OIBus product manager' },
    org: {
      fr: 'Optimistik, éditeur de la plateforme de données industrielles OIAnalytics',
      en: 'Optimistik, publisher of the OIAnalytics industrial data platform'
    },
    points: [
      {
        fr: 'Responsable produit d’OIBus, produit open-source qui collecte les données des sites industriels (automates, <em lang="en">historians</em>, capteurs) : feuille de route, priorisation, lien avec les équipes clients.',
        en: 'Product manager for OIBus, the open-source product collecting data from industrial sites (PLCs, historians, sensors): roadmap, prioritisation, link with customer teams.'
      },
      {
        fr: 'Mise à niveau de l’outil de contextualisation et d’analyse des données au service de la performance industrielle : énergie, pertes de matière, rejets atmosphériques, qualité.',
        en: 'Upgraded the data contextualisation and analysis tool used to improve industrial performance: energy, material loss, stack emissions, quality.'
      }
    ]
  },
  {
    period: { fr: 'Sept. 2016 – juin 2020 · Troyes', en: 'Sep 2016 – Jun 2020 · Troyes' },
    title: { fr: 'Ingénieur R&D, product owner', en: 'R&D engineer, product owner' },
    org: same('Vigilock'),
    points: [
      {
        fr: 'Responsable de l’infrastructure IoT pour des applications industrielles.',
        en: 'Owned the IoT infrastructure for industrial applications.'
      },
      {
        fr: 'Construction du modèle économique et des feuilles de route de plusieurs projets.',
        en: 'Built the business model and roadmaps for several projects.'
      }
    ]
  },
  {
    period: { fr: 'Janv. 2014 – sept. 2016 · Troyes', en: 'Jan 2014 – Sep 2016 · Troyes' },
    title: { fr: 'Ingénieur IoT indépendant', en: 'Freelance IoT engineer' },
    org: same('Freelance'),
    points: [
      {
        fr: 'Conception de communications sans fil sécurisées et de solutions de supervision d’objets connectés (locales, à distance, SaaS).',
        en: 'Designed secure wireless communications and monitoring solutions for connected devices (local, remote, SaaS).'
      }
    ]
  }
]

export const teaching: Entry[] = [
  {
    period: { fr: 'Depuis 2022 · Paris', en: 'Since 2022 · Paris' },
    title: {
      fr: 'Cours « Conception de technologies numériques responsables »',
      en: 'Course: “Designing responsible digital technologies”'
    },
    org: {
      fr: 'Université Paris 1 Panthéon-Sorbonne · Master 2 · 42 h éq. TD par an',
      en: 'Université Paris 1 Panthéon-Sorbonne · Master’s · 42 h per year'
    },
    points: [
      {
        fr: 'Fiabilité des sources scientifiques, frontières planétaires, théorie du Donut, communs, impacts du numérique dans l’industrie, ACV, dépendances, effets rebonds.',
        en: 'Reliability of scientific sources, planetary boundaries, Doughnut economics, the commons, digital impacts in industry, LCA, dependencies, rebound effects.'
      },
      {
        fr: 'Pédagogie active : réactivation de la mémoire, ateliers en groupes (dessiner son Donut, définir un commun numérique, évaluer un service), QCM, réflexion écrite en fin de séance.',
        en: 'Active learning: retrieval practice, group workshops (draw your Doughnut, define a digital commons, assess a service), quizzes, written reflection at the end of each session.'
      }
    ]
  },
  {
    period: { fr: 'Depuis 2022', en: 'Since 2022' },
    title: {
      fr: 'Numérique responsable, en présentiel et en MOOC',
      en: 'Responsible digital technology, in person and as MOOCs'
    },
    org: {
      fr: 'Conservatoire national des arts et métiers (CNAM) · cursus ingénieur · 40 h éq. TD par an',
      en: 'Conservatoire national des arts et métiers (CNAM) · engineering degree · 40 h per year'
    }
  },
  {
    period: { fr: '2016 – 2025 · Troyes', en: '2016 – 2025 · Troyes' },
    title: { fr: 'Cryptographie', en: 'Cryptography' },
    org: {
      fr: 'Université de technologie de Troyes (UTT) · Master 2 et cursus ingénieur · 24 h éq. TD par an',
      en: 'Université de technologie de Troyes (UTT) · Master’s and engineering degree · 24 h per year'
    },
    points: [
      {
        fr: 'Cryptographie symétrique et asymétrique, fonctions de hachage, signatures.',
        en: 'Symmetric and asymmetric cryptography, hash functions, signatures.'
      }
    ]
  }
]

export const engagement: Entry[] = [
  {
    period: { fr: 'Depuis 2018 · SARL depuis 2024', en: 'Since 2018 · company since 2024' },
    title: { fr: 'Co-fondateur de Portraits 2 Passages', en: 'Co-founder of Portraits 2 Passages' },
    org: {
      fr: 'Courses d’autostop culturelles et solidaires ; formations sur le numérique responsable',
      en: 'Cultural, solidarity-driven hitchhiking races; training in responsible digital technology'
    }
  },
  {
    period: { fr: 'Févr. 2025 – févr. 2026', en: 'Feb 2025 – Feb 2026' },
    title: {
      fr: 'Co-organisateur de la Convention sur les connaissances',
      en: 'Co-organiser of the Citizen Assembly on scientific knowledges'
    },
    org: {
      fr: 'Ingénieurs et Scientifiques de France (IESF)',
      en: 'Ingénieurs et Scientifiques de France (IESF)'
    },
    points: [
      {
        fr: 'Organisation et pilotage, de la sélection des participants à la remise du rapport ; conception du programme.',
        en: 'Organisation and management, from selecting participants to delivering the report; programme design.'
      },
      {
        fr: 'Stratégie de financement et relations avec les partenaires et les décideurs politiques.',
        en: 'Funding strategy and relations with partners and policymakers.'
      },
      {
        fr: 'Animation des sessions en présentiel et en webinaire : ateliers, délibérations, restitutions.',
        en: 'Facilitated in-person and online sessions: workshops, deliberations, debriefs.'
      }
    ]
  },
  {
    period: { fr: 'Sept. 2024 – sept. 2026', en: 'Sep 2024 – Sep 2026' },
    title: { fr: 'Président du Comité Docteurs', en: 'Chair of the PhD Committee' },
    org: same('Ingénieurs et Scientifiques de France (IESF)')
  },
  {
    period: { fr: 'Juin 2022 – juin 2025', en: 'Jun 2022 – Jun 2025' },
    title: { fr: 'Président d’UTT Alumni', en: 'President of UTT Alumni' },
    org: {
      fr: 'Association des diplômés de l’Université de technologie de Troyes',
      en: 'Alumni association of the Université de technologie de Troyes'
    }
  }
]

export const education: Entry[] = [
  {
    period: same('2017 – 2020'),
    title: {
      fr: 'Doctorat en optimisation et sûreté des systèmes',
      en: 'PhD in systems optimisation and safety'
    },
    org: {
      fr: 'UTT · Compromis entre sécurité et disponibilité des systèmes embarqués communicants',
      en: 'UTT · Security vs. availability trade-offs in communicating embedded systems'
    }
  },
  {
    period: same('2014 – 2015'),
    title: { fr: 'Master Sécurité des systèmes d’information', en: 'MSc in Information Systems Security' },
    org: same('UTT')
  },
  {
    period: same('2010 – 2015'),
    title: {
      fr: 'Diplôme d’ingénieur Systèmes, réseaux et télécommunications',
      en: 'Engineering degree in Systems, Networks and Telecommunications'
    },
    org: {
      fr: 'UTT · Prix Ellipse 2015, pour l’excellence académique et l’engagement associatif',
      en: 'UTT · 2015 Ellipse Prize for academic excellence and student involvement'
    }
  }
]

export const skills: Localized[] = [
  { fr: 'Données industrielles', en: 'Industrial data' },
  { fr: 'Automates et <em lang="en">historians</em>', en: 'PLCs & historians' },
  same('IoT'),
  { fr: 'Cybersécurité', en: 'Cybersecurity' },
  { fr: 'Bases de données', en: 'Databases' },
  { fr: 'Développement logiciel', en: 'Software development' }
]

export const themes: Localized[] = [
  { fr: 'Frontières planétaires', en: 'Planetary boundaries' },
  { fr: 'Théorie du Donut', en: 'Doughnut economics' },
  { fr: 'Effets rebonds', en: 'Rebound effects' },
  { fr: 'ACV', en: 'LCA' },
  { fr: 'Dépendances', en: 'Dependencies' },
  { fr: 'Numérique dans l’industrie', en: 'Digital in industry' },
  same('Green IT'),
  { fr: 'Communs', en: 'Commons' },
  { fr: 'Cryptographie', en: 'Cryptography' }
]

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'langue maternelle', en: 'native' } },
  { name: { fr: 'Anglais', en: 'English' }, level: same('C2') },
  { name: { fr: 'Allemand', en: 'German' }, level: same('A2') }
]
