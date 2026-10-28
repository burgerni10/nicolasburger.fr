export const languages = ['fr', 'en'] as const
export type Lang = (typeof languages)[number]
export type Localized = Record<Lang, string>

export const routes = {
  home: { fr: '/', en: '/en/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' }
} satisfies Record<string, Localized>

export const ui = {
  description: {
    fr: 'Nicolas Burger, ingénieur R&D chez Optimistik et docteur en sûreté des systèmes. Je développe des outils numériques pour l’industrie, j’enseigne le numérique responsable et j’ai co-fondé Portraits 2 Passages.',
    en: 'Nicolas Burger, R&D engineer at Optimistik with a PhD in systems safety. I build digital tools for industry, teach responsible digital technology and co-founded Portraits 2 Passages.'
  },
  navAbout: { fr: 'À propos', en: 'About' },
  navProjects: { fr: 'Projets', en: 'Projects' },
  navExperience: { fr: 'Parcours', en: 'Experience' },
  switchLabel: { fr: 'Read in English', en: 'Lire en français' },
  switchShort: { fr: 'EN', en: 'FR' },
  toDark: { fr: 'Passer en mode sombre', en: 'Switch to dark mode' },
  toLight: { fr: 'Passer en mode clair', en: 'Switch to light mode' },
  expertise: { fr: 'Domaines', en: 'Focus areas' },
  work: { fr: 'Expériences', en: 'Work' },
  teaching: { fr: 'Enseignement', en: 'Teaching' },
  engagement: { fr: 'Engagement', en: 'Involvement' },
  education: { fr: 'Formation', en: 'Education' },
  skills: { fr: 'Compétences techniques', en: 'Technical skills' },
  themes: { fr: 'Thèmes enseignés', en: 'Topics taught' },
  languages: { fr: 'Langues', en: 'Languages' },
  contactTitle: { fr: 'On en parle ?', en: 'Let’s talk' },
  contactText: {
    fr: 'Un projet, un cours, une conférence ou une aventure à imaginer ensemble : écrivez-moi.',
    en: 'A project, a course, a talk or an adventure to dream up together: drop me a line.'
  },
  formName: { fr: 'Nom', en: 'Name' },
  formEmail: { fr: 'E-mail', en: 'Email' },
  formMessage: { fr: 'Message', en: 'Message' },
  formSend: { fr: 'Envoyer', en: 'Send' },
  formSending: { fr: 'Envoi…', en: 'Sending…' },
  formSuccess: {
    fr: 'Merci, votre message est bien parti. Je vous réponds au plus vite.',
    en: 'Thanks, your message is on its way. I’ll get back to you soon.'
  },
  // Followed by a LinkedIn link
  formError: {
    fr: 'L’envoi a échoué. Réessayez dans un instant, ou écrivez-moi sur',
    en: 'Sending failed. Please try again in a moment, or message me on'
  },
  formSubject: { fr: 'Nouveau message depuis nicolasburger.fr', en: 'New message from nicolasburger.fr' },
  formNotice: {
    fr: 'Vos nom, e-mail et message servent uniquement à vous répondre.',
    en: 'Your name, email and message are only used to reply to you.'
  },
  legal: { fr: 'Mentions légales', en: 'Legal notice' },
  photoAlt: { fr: 'Portrait de Nicolas Burger', en: 'Portrait of Nicolas Burger' },
  notFound: { fr: 'Cette page est introuvable.', en: 'This page could not be found.' },
  backHome: { fr: 'Retour à l’accueil', en: 'Back to home' }
} satisfies Record<string, Localized>
