export default {
  // Target: https://go.nuxtjs.dev/config-target

  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'María Morales @maremarismaria Wiki',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Set of articles and thoughts about Linguistics, Literature, and Engineering.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'María Morales @maremarismaria Wiki' },
      { name: 'og:description', content: 'Set of articles and thoughts about Linguistics, Literature, and Engineering.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://google-fonts.nuxtjs.org
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Cutive+Mono': {
          },
          'Kalam': {
          },
          'VT323': {
          },
        },
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
