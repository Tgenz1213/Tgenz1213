import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
