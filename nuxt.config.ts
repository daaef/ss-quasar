// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Rakkas&family=Sarina&display=swap",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        // },
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    "nuxt-quasar-ui",
    "@pinia/nuxt",
    // "@sidebase/nuxt-auth"
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    // cssPath: "~/assets/css/input.css",
  },
  css: ["~/assets/styles/style.scss"],
  quasar: {
    config: {
      dark: false,
    },
    plugins: [
      'AppFullscreen',
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
    ],
    extras: {
      fontIcons: [
          'material-icons',
          'material-icons-round',
          'material-icons-outlined',
          'material-icons-sharp',
          'material-symbols-sharp',
          'material-symbols-outlined',
          'material-symbols-rounded',
          'fontawesome-v5',
      ]
    }
  }
})