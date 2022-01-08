import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Tokenomics from '../pages/Tokenomics.vue'

const routes = [
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tokenomics',
    name: 'Tokenomics',
    component: Tokenomics
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
