<template>
  <v-container>
    <h1>Shopping Cart</h1>
    <v-data-table :headers="headers" :items="cartItems" item-key="id" hide-default-footer>
      <template v-slot:[`item.image`]="{ item }">
        <v-img :src="item.image" width="100" height="100"></v-img>
      </template>
      <template v-slot:[`item.quantity`]="{ item, index }">
        <v-btn @click="decrementItem(index)" icon><v-icon>mdi-minus</v-icon></v-btn>
        <span>{{ item.quantity }}</span>
        <v-btn @click="incrementItem(index)" icon><v-icon>mdi-plus</v-icon></v-btn>
      </template>
      <template v-slot:[`item.totalPrice`]="{ item }">
        {{ getTotalItemPrice(item) }}
      </template>
    </v-data-table>
    <div>Total Price: ${{ getTotalPrice() }}</div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const cartItems = ref([])

// Retrieve cart items from local storage
const savedCartItems = localStorage.getItem('cartItems')
if (savedCartItems) {
  cartItems.value = JSON.parse(savedCartItems)
}

const incrementItem = (index) => {
  cartItems.value[index].quantity++
}

const decrementItem = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  }
}

const headers = [
  { text: 'Image', value: 'image' },
  { text: 'Title', value: 'title' },
  { text: 'Price', value: 'price' },
  { text: 'Quantity', value: 'quantity' },
  { text: 'Total Price', value: 'totalPrice' },
  { text: 'Actions', value: 'toggle' }
]

const getTotalPrice = () => {
  return cartItems.value
    .reduce((total, item) => {
      return total + parseFloat(getTotalItemPrice(item))
    }, 0)
    .toFixed(2)
}

const getTotalItemPrice = (item) => {
  return (item.quantity * parseFloat(item.price)).toFixed(2)
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
