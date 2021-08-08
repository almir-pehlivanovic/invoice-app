import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Invoices from '../views/Invoices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: Invoices
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
