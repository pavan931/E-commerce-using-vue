<script setup>
// import { ref } from 'vue'
import { useRouter } from 'vue-router'

const chairs = [
  { id: 1, class: 'pa-0', image: '/c1.jpg', title: 'Lounge Chair', price: '$ 145.00', quantity: 1 },
  { id: 2, class: 'pa-0', image: '/c2.jpg', title: 'Repos', price: '$ 145.00', quantity: 1 },
  { id: 3, class: 'pa-0', image: '/c3.png', title: 'Loby Chair', price: '$ 145.00', quantity: 1 },
  {
    id: 4,
    class: 'pa-0',
    image: '/c4.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 5,
    class: 'pa-0',
    image: '/c5.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 6,
    class: 'pa-0',
    image: '/c6.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 7,
    class: 'pa-0',
    image: '/c7.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 8,
    class: 'pa-0',
    image: '/c8.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 9,
    class: 'pa-0',
    image: '/c9.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 10,
    class: 'pa-0',
    image: '/c10.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 11,
    class: 'pa-0',
    image: '/c11.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 12,
    class: 'pa-0',
    image: '/c12.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 13,
    class: 'pa-0',
    image: '/c13.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 14,
    class: 'pa-0',
    image: '/c14.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 15,
    class: 'pa-0',
    image: '/c15.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  },
  {
    id: 16,
    class: 'pa-0',
    image: '/c16.png',
    title: 'Modern Lounge',
    price: '$ 145.00',
    quantity: 1
  }
]

const router = useRouter()

const addToCart = (chair) => {
  let cartItems = localStorage.getItem('cartItems')
  cartItems = cartItems ? JSON.parse(cartItems) : []
  cartItems.push(chair)
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
  router.push({ name: 'Cart' })
}
</script>

Copy code
<template>
  <v-row>
    <v-col cols="12" sm="3" v-for="(chair, i) in chairs" :key="i">
      <v-card
        height="300"
        align="center"
        flat
        outlined
        tile
        @click="addToCart(chair)"
        class="clickable-card"
      >
        <v-img :src="chair.image" width="200" height="200" contain></v-img>
        <v-card-text class="mt-n1">
          <strong>{{ chair.title }}</strong>
        </v-card-text>
        <v-card-text class="mt-n4">
          <strong>{{ chair.price }}</strong>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-divider></v-divider>
</template>

<style>
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.clickable-card:hover {
  transform: scale(1.05);
}
</style>
