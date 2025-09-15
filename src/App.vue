<template>
  <div class="container mx-auto">
    <HelloWorld />
    <!-- <OrderForm @orderAdded="reloadOrders" />
    <OrdersList ref="ordersList" /> -->
  </div>
</template>

<script>
// import OrdersList from './components/OrdersList.vue';
// import OrderForm from './components/OrderForm.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: { HelloWorld },
  methods: {
    reloadOrders() {
      this.$refs.ordersList.fetchOrders();
    }
  }
};
</script>
