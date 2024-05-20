<script setup>
import FooterView from '@/components/FooterView.vue'
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()

let chair = true
let other = false
let slider2 = 50
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
  {
    src: './src/assets/pic1 (1).jpg'
  },
  {
    src: './src/assets/pic1 (2).jpg'
  },
  {
    src: './src/assets/pic1 (3).jpg'
  },
  {
    src: './src/assets/pic1 (4).jpg'
  },
  {
    src: './src/assets/pic1 (5).jpg'
  }
]
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
        color="#F7F7F7"
        height="180px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
        dark
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
                        :color="active ? '#D5F0DB' : 'white'"
                        :class="active ? 'borderme' : 'borderout'"
                        class="d-flex align-center rounded-lg mx-2"
                        dark
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
                                  :class="active ? 'green--text' : 'black--text'"
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
      <!-- <v-toolbar color="transparent" dark class="mt-3">
        <v-checkbox v-model="chair" label="Chairs" class="check mt-4"></v-checkbox>
        <v-checkbox v-model="other" label="Othermass" class="check mt-4"></v-checkbox>
        <v-divider vertical></v-divider>
        <v-btn variant="text"
          >Leather Colors
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn variant="text"
          >Choose Design
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <span class="text-caption mx-2">Price till</span>
        <v-slider v-model="slider2" label="track-color" class="mt-5"></v-slider>
        <span class="text-caption mx-2">$9,700</span>
      </v-toolbar>
      <v-divider class="mt-2"></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title>LOUNGE CHAIRS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" color="grey">Sort by :</v-btn>
        <v-btn variant="text" color="">Name</v-btn>
        <v-btn variant="text" color="grey">Popularity</v-btn>
        <v-btn variant="text" color="grey">Price</v-btn>
      </v-toolbar> -->

      <!-- <v-toolbar color="transparent">
        <v-toolbar-title class="text-caption">Show more chairs</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="grey" left class="mr-4 mt-n1">mdi-arrow-left</v-icon>
        <span class="text-caption">1</span>
        <v-icon color="grey" left class="ml-4 mt-n1 mr-2">mdi-arrow-right</v-icon>
      </v-toolbar> -->
    </v-container>
    <FooterView />
  </v-app>
</template>

<style scoped>
.v-container {
  width: 100%;
  padding: 16px 0px !important;
  margin-right: auto;
  margin-left: auto;
}
.v-card.borderme {
  border: 2px solid black !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}

<style scoped > .v-carousel-item {
  height: 400px; /* Adjust the height as needed */
}

.transparent-arrow {
  background-color: transparent !important;
  color: white !important;
}
</style>
