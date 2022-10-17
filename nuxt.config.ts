// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  modules: ["@nuxt/content"],
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "assets/scss/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: "@import 'assets/scss/_variables.scss';" },
      },
    },
  },
  alias: {
    "~": "/<rootDir>/",
    "assets/": "/<rootDir>/assets/",
  },
});
