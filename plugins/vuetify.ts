// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { VCalendar } from "vuetify/labs/VCalendar"
import { aliases, mdi } from "vuetify/iconsets/mdi"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      themes: {
        light: {
          colors: {
            primary: "#6a1d9e",
            secondary: "#f9a825",
            accent: "#bdbdbd",
            background: "#ffffff",
            surface: "#ede1ea",
          },
        },
      },
    },
    components: {
      ...components,
      VCalendar,
    },
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  })
  app.vueApp.use(vuetify)
})
