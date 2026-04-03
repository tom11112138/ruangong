import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CPU from '../views/CPU.vue'
import GPU from '../views/GPU.vue'
import Memory from '../views/Memory.vue'
import Storage from '../views/Storage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cpu',
    name: 'CPU',
    component: CPU
  },
  {
    path: '/gpu',
    name: 'GPU',
    component: GPU
  },
  {
    path: '/memory',
    name: 'Memory',
    component: Memory
  },
  {
    path: '/storage',
    name: 'Storage',
    component: Storage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
