import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('../views/CursosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
