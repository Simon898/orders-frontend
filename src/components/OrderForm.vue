<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Add New Transport Order</h2>
    <form @submit.prevent="submitOrder" class="space-y-4">
      <input v-model="order.order_number" placeholder="Order Number" class="border p-2 block w-full">
      <input v-model="order.customer_name" placeholder="Customer Name" class="border p-2 block w-full">
      <input v-model="order.date" type="date" class="border p-2 block w-full">

      <h3 class="font-bold">Waypoints</h3>
      <div v-for="(wp, index) in order.waypoints" :key="index" class="mb-2">
        <input v-model="wp.location" placeholder="Location" class="border p-2 mr-2">
        <select v-model="wp.type" class="border p-2 mr-2">
          <option value="Pickup">Pickup</option>
          <option value="Delivery">Delivery</option>
        </select>
        <button type="button" @click="removeWaypoint(index)" class="bg-red-500 text-white px-2 py-1 rounded">X</button>
      </div>

      <button type="button" @click="addWaypoint" class="bg-green-500 text-white px-4 py-2 rounded">Add Waypoint</button>

      <div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'OrderForm',
  data() {
    return {
      order: {
        order_number: '',
        customer_name: '',
        date: '',
        waypoints: [
          { location: '', type: 'Pickup' }
        ]
      }
    };
  },
  methods: {
    addWaypoint() {
      this.order.waypoints.push({ location: '', type: 'Pickup' });
    },
    removeWaypoint(index) {
      this.order.waypoints.splice(index, 1);
    },
    async submitOrder() {
      try {
        await api.post('/', this.order);
        alert('Order added successfully!');
        // reset form
        this.order = {
          order_number: '',
          customer_name: '',
          date: '',
          waypoints: [{ location: '', type: 'Pickup' }]
        };
        this.$emit('orderAdded'); // let parent refresh list
      } catch (err) {
        console.error(err);
        alert('Error adding order');
      }
    }
  }
};
</script>
