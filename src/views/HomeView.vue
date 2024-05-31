<script setup>
import FooterView from '../components/FooterView.vue'
import NavBar from '../components/NavBar.vue'
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

const categories = ref([
  { img: '9.png', title: 'SLEEPING BEDS' },
  { img: '2.png', title: 'LOUNGE CHAIRS' },
  { img: '1.png', title: 'CHAIRS' },
  { img: '4.png', title: 'OFFICE CHAIRS' },
  { img: '8.jpg', title: 'TABLES NIGHTSTANDS' },
  { img: '6.png', title: 'KITCHEN FURNITURE' }
])

const getCategoryRoute = (categoryTitle) => {
  return `/category/${categoryTitle.toLowerCase().replace(/\s/g, '')}`
}

const items = [
  { src: './src/assets/pic1 (1).jpg' },
  { src: './src/assets/pic1 (2).jpg' },
  { src: './src/assets/pic1 (3).jpg' },
  { src: './src/assets/pic1 (4).jpg' },
  { src: './src/assets/pic1 (5).jpg' }
]

const theme = useTheme()
const isDarkTheme = computed(() => theme.global.name.value === 'dark')
</script>

<template>
  <v-app>
    <NavBar />
    <v-carousel hide-delimiters cycle interval="2000" show-arrows height="500px">
      <template v-slot:prev>
        <v-btn icon class="transparent-arrow">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next>
        <v-btn icon class="transparent-arrow">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <v-card
        :color="isDarkTheme ? '#121212' : '#F7F7F7'"
        height="180px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-item-group mandatory class="mt-n1">
              <v-container>
                <v-row justify="center" class="space">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="4"
                    md="2"
                    v-for="(category, i) in categories"
                    :key="i"
                  >
                    <router-link :to="getCategoryRoute(category.title)">
                      <v-card
                        :color="isDarkTheme ? '#121212' : active ? '#D5F0DB' : 'white'"
                        :class="active ? 'borderme' : 'borderout'"
                        class="d-flex align-center rounded-lg mx-2"
                        height="170"
                        flat
                      >
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-list-item three-line class="text-center">
                              <v-list-item-content>
                                <div align="center" justify="center">
                                  <v-img
                                    :src="category.img"
                                    max-height="80"
                                    max-width="80"
                                    contain
                                  ></v-img>
                                </div>
                                <v-list-item-subtitle
                                  :class="
                                    isDarkTheme
                                      ? 'white--text'
                                      : active
                                        ? 'green--text'
                                        : 'black--text'
                                  "
                                  class="caption mt-4"
                                  >{{ category.title }}</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card>
                    </router-link>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <FooterView />
  </v-app>
</template>

<style scoped>
.v-container {
  width: 100%;
  padding: 16px 0 !important;
  margin-right: auto;
  margin-left: auto;
}

.v-card.borderme {
  border: 2px solid black !important;
}

.v-card.borderout {
  border: 1px solid #d5f0db !important;
}

.v-carousel-item {
  height: 400px; /* Adjust the height as needed */
}

.transparent-arrow {
  background-color: transparent !important;
  color: white !important;
}
</style>
