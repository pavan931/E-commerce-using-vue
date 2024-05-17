// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components

const app = createApp(App)
// import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)

app.use(router)

app.mount('#app')
