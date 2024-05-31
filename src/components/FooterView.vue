<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')
</script>

<template>
  <v-footer>
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="text-center"
      :color="isDarkTheme ? '#121212' : '#FAFAFA'"
    >
      <v-card-text>
        <v-btn to="/" class="mx-4" variant="text" :class="isDarkTheme ? 'white--text' : ''"
          >Catalog</v-btn
        >
        <v-btn class="mx-4" variant="text" :class="isDarkTheme ? 'white--text' : ''"
          >Designers</v-btn
        >
        <v-btn class="mx-4" variant="text" :class="isDarkTheme ? 'white--text' : ''">Blog</v-btn>
        <v-btn to="/about" class="mx-4" variant="text" :class="isDarkTheme ? 'white--text' : ''"
          >About us</v-btn
        >
        <v-btn to="/contact" class="mx-4" variant="text" :class="isDarkTheme ? 'white--text' : ''"
          >Contact</v-btn
        >
      </v-card-text>
      <v-card-text :class="isDarkTheme ? 'white--text' : ''">
        @ {{ new Date().getFullYear() }} -
        <strong> All Rights Reserved</strong>
      </v-card-text>

      <v-card-item>
        <v-card-subtitle class="text-center"> Socialize with Us </v-card-subtitle>
        <v-row justify="center" align="center" class="mb-2">
          <v-col cols="auto">
            <v-btn icon href="https://www.facebook.com" target="_blank">
              <v-icon size="24px">mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon href="https://www.twitter.com" target="_blank">
              <v-icon size="24px">mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon href="https://www.instagram.com" target="_blank">
              <v-icon size="24px">mdi-instagram</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon href="https://www.linkedin.com" target="_blank">
              <v-icon size="24px">mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-footer {
  padding: 8px 0 !important;
}
</style>
