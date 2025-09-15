<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Order Details</h1>
    <div v-if="order">
      <p><strong>Order #:</strong> {{ order.order_number }}</p>
      <p><strong>Customer:</strong> {{ order.customer_name }}</p>
      <p><strong>Date:</strong> {{ order.date }}</p>

      <h3 class="font-bold mt-4">Waypoints</h3>
      <ul class="list-disc ml-6">
        <li v-for="wp in order.waypoints" :key="wp.id">
          {{ wp.type }} - {{ wp.location }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'OrderDetail',
  props: ['id'],
  data() {
    return { order: null };
  },
  async created() {
    const res = await api.get(`/${this.id}/`);
    this.order = res.data;
  }
};
</script>
