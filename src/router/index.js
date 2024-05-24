import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/category/sleepingbeds',
      name: 'sleepingbeds',
      component: () => import('../categories/SleepingBeds.vue')
    },
    {
      path: '/category/loungechairs',
      name: 'loungechairs',
      component: () => import('../categories/LoungeChairs.vue')
    },
    {
      path: '/category/chairs',
      name: 'chairs',
      component: () => import('../categories/SimpleChairs.vue')
    },
    {
      path: '/category/officechairs',
      name: 'officechairs',
      component: () => import('../categories/OfficeChairs.vue')
    },
    {
      path: '/category/tablesnightstands',
      name: 'tablesnightstands',
      component: () => import('../categories/TablesNightStands.vue')
    },
    {
      path: '/category/kitchenfurniture',
      name: 'kitchenfurniture',
      component: () => import('../categories/KitchenFurniture.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/CartPage.vue')
    }
  ]
})

export default router
