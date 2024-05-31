// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Components

const app = createApp(App)
// import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  // icons: {
  //   defaultSet: 'mdi',
  //   aliases,
  //   sets: {
  //     mdi
  //   },
  //   theme: {
  //     defaultTheme: 'dark'
  //   }
  // }
  defaults: {
    theme: {
      defaultTheme: 'dark'
    }
  }
})

app.use(vuetify)

app.use(router)

app.mount('#app')
