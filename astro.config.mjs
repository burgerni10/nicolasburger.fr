// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://nicolasburger.fr',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false }
  }
})
