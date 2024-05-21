<template>
  <v-app-bar app dark flat class="mt-1" height="100">
    <!-- Dropdown Menu with mdi-menu button -->

    <v-btn icon>
      <v-icon left class="mr-2" icon="mdi-menu"></v-icon>
    </v-btn>

    <v-toolbar-title>CATALOGUE</v-toolbar-title>
    <div
      style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <router-link to="/" style="text-decoration: none">
        <v-btn text>
          <h4 class="title-font">Natures Nest</h4>
        </v-btn>
      </router-link>
    </div>
    <v-spacer></v-spacer>

    <v-btn icon @click="changeTheme">
      <v-icon :icon="darkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
    </v-btn>

    <v-col cols="3">
      <v-text-field
        density="compact"
        variant="outlined"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        class="mr-2"
      ></v-text-field>
    </v-col>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const notis = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' }
]

const darkTheme = ref(false)
const theme = useTheme()

function changeTheme() {
  darkTheme.value = !darkTheme.value
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>

<style scoped>
.title-font {
  font-family: 'Bastarda', sans-serif;
  font-size: 30px;
}
</style>
