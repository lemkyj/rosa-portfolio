export default {
  mode: "spa",
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Rosa Lee",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Rosa Lee",
        name: "Rosa Lee",
        content:
          process.env.npm_package_description ||
          "Rosa Lee - Designer Portfolio",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&display=swap",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: "~/components/LoadingBar.vue",
  loadingIndicator: {
    name: "pulse",
    color: "#fbe3e8",
    background: "white",
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
    "@aceforth/nuxt-optimized-images",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  styleResources: {
    scss: ["./assets/css/variables.scss"],
  },
  optimizedImages: {
    optimizeImages: true,
  },
};
