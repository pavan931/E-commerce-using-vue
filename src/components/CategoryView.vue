<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3" v-for="(item, i) in items" :key="i">
        <v-card
          height="300"
          align="center"
          flat
          outlined
          tile
          @click="addToCart(item)"
          class="clickable-card"
        >
          <v-img :src="item.image" width="200" height="200" contain></v-img>
          <v-card-text class="mt-n1">
            <strong>{{ item.title }}</strong>
          </v-card-text>
          <v-card-text class="mt-n4">
            <strong>{{ item.price }}</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

// Defined props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const router = useRouter()

// Function to add item to cart
const addToCart = (item) => {
  let cartItems = localStorage.getItem('cartItems')
  cartItems = cartItems ? JSON.parse(cartItems) : []
  cartItems.push(item)
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  router.push({ name: 'Cart' })
}
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.clickable-card:hover {
  transform: scale(1.05);
}
</style>
