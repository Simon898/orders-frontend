<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>Welcome to Order system</h1>

  <!-- <div class="card"> -->
    <!-- <h1 class="text-xl font-bold mb-4">
     Welcome to Order simple app!
    </h1>
    <h3>List of orders</h3>
    <h3>Add new order</h3> -->
    <div class="container mx-auto p-4">
    <nav class="mb-4 space-x-4">
      <router-link class="card" to="/">All Orders</router-link>
      <router-link class="card" to="/add">Add Order</router-link>
    </nav>
    <router-view />
  </div>

  <!-- </div> -->
</template>