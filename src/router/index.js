import { createRouter, createWebHistory } from 'vue-router';
import OrdersList from '../components/OrdersList.vue';
import OrderForm from '../components/OrderForm.vue';
import OrderDetail from '../components/OrderDetail.vue'; // you will create this

const routes = [
  { path: '/', name: 'orders', component: OrdersList },
  { path: '/add', name: 'add-order', component: OrderForm },
  { path: '/orders/:id', name: 'order-detail', component: OrderDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
