<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Transport Orders</h1>
    <div class="mb-4">
      <input v-model="filters.customer_name" placeholder="Filter by customer name" class="border p-2 mr-2">
      <input v-model="filters.date" type="date" class="border p-2 mr-2">
      <button @click="fetchOrders" class="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
    </div>
    <table class="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th class="border px-4 py-2">Order #</th>
          <th class="border px-4 py-2">Customer</th>
          <th class="border px-4 py-2">Date</th>
          <th class="border px-4 py-2">Waypoints</th>
          <th class="border px-4 py-2">Delivery type</th>
          <th class="border px-4 py-2">Order details</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
            
          <td class="border px-4 py-2">{{ order.order_number }}</td>
          <td class="border px-4 py-2">{{ order.customer_name }}</td>
          <td class="border px-4 py-2">{{ order.date }}</td>
          <td v-for="wp in order.waypoints" :key="wp.id">
           {{ wp.location }}
          </td>
          <td v-for="wp in order.waypoints" :key="wp.id">
           {{ wp.type }}
          </td>
          <td><router-link class="card" :to="`/orders/${order.id}`">{{ order.order_number }}</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'OrdersList',
  data() {
    return {
      orders: [],
      filters: {
        customer_name: '',
        date: ''
      }
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const params = {};
        if (this.filters.customer_name) params.customer_name = this.filters.customer_name;
        if (this.filters.date) params.date = this.filters.date;
        const response = await api.get('/', { params });
        this.orders = response.data;
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.fetchOrders();
  }
};
</script>
