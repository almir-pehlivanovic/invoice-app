import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Invoices from '../views/Invoices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: "Invoice App",
    }
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: Invoices,
    meta:{
      title: "Invoices",
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
