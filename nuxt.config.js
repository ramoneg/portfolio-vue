const config = require('./.contentful.json');

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  tailwindcss: {
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {}
  },

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://google-fonts.nuxtjs.org/setup
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // sitemap configuration
  sitemap: {
    hostname: 'https://ramonegger.ch',
    gzip: true,
    exclude: [
      //
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      'Montserrat': [200, 300, 400, 700, 800, 900],
      'Source+Sans+Pro': [900]
    }
  },
};
