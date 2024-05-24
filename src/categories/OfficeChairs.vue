<template>
  <v-row justify="center" class="space px-16">
    <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined>
        <div align="center" justify="center">
          <v-img max-height="300" max-width="300" contain :src="product.img"></v-img>
        </div>

        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">
          {{ product.subtitle }}
        </v-card-title>
        <v-card-title class="mt-n4">{{ product.price }}</v-card-title>

        <v-card-actions class="mx-2 mt-n4">
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="decrement">mdi-minus</v-icon>
          </v-btn>

          <strong class="mx-2">{{ bpm }}</strong>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" @click="increment">mdi-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="green">
            <v-icon dark>mdi-shopping</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const bpm = ref(1)
const products = ref([
  { img: 'c4.png', title: 'Cabbage', subtitle: '1kg', price: '$13' },
  { img: 'c5.png', title: "Perry's Ice Cream", subtitle: '1kg', price: '$23' },
  { img: 'c6.png', title: 'Potato', subtitle: '1kg', price: '$17' },
  { img: 'c7.png', title: 'Bundle Pack', subtitle: 'Potato, Papaya, Oil, Cabbage', price: '$40' },
  { img: 'c8.png', title: 'Oreo Biscuit', subtitle: '270GM', price: '$20' },
  { img: 'c9.png', title: 'Papaya', subtitle: '1kg', price: '$10' }
])

const decrement = () => {
  return bpm.value--
}

const increment = () => {
  return bpm.value++
}
</script>

<style></style>
