import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
