import { getPolicyRoutes } from './utils/helpers'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prime-insights',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: '3MUIsQIT4voOuVVAmeozCNt3o2mReg60quKwvOgRUnk' },
    ],
    link: [
      {rel: 'icon', href: '/favicon.svg'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Montserrat:wght@400;500;600;700&display=swap'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@blokwise/dynamic',
    ['@nuxtjs/robots', {
    UserAgent: '*',
      Allow: '/',
      Sitemap: "https://primeinsights.com/sitemap.xml"
    }],
      ['@nuxtjs/sitemap',
      {
        generateOnBuild: true,
        hostname: 'https://primeinsights.com/',
        gzip: true,
        defaults: {
          lastmod: "2023-01-05T14:36:53+00:00",
        },
        routes() {
          return ['/', ...getPolicyRoutes()]
        }
      }
      ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },

  publicRuntimeConfig: {
    CONTACT_API: process.env.CONTACT_API,
    JOIN_TEAM_API: process.env.JOIN_TEAM_API,
    BASE_URL: process.env.HOME_BASE_URL
  },

  generate: {
    fallback: true,
    routes() {
      return getPolicyRoutes()
    }
  }
}
