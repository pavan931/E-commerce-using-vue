import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Declared category data
const categories = {
  sleepingbeds: [
    {
      id: 1,
      image: '/c1.jpg',
      title: 'Sleeping Bed 1',
      price: '$145.00',
      quantity: 1
    },
    {
      id: 2,
      image: '/c1.jpg',
      title: 'Sleeping Bed 2',
      price: '$145.00',
      quantity: 1
    }
  ],
  loungechairs: [
    {
      id: 1,
      image: '/path/to/loungechair1.jpg',
      title: 'Lounge Chair 1',
      price: '$145.00',
      quantity: 1
    },
    {
      id: 2,
      image: '/c1.jpg',
      title: 'Lounge Chair 2',
      price: '$145.00',
      quantity: 1
    }
  ],
  chairs: [
    {
      id: 1,
      class: 'pa-0',
      image: '/c1.jpg',
      title: 'Lounge Chair',
      price: '$ 145.00',
      quantity: 1
    },
    { id: 2, class: 'pa-0', image: '/c2.jpg', title: 'Repos', price: '$ 145.00', quantity: 1 },
    { id: 3, class: 'pa-0', image: '/c3.png', title: 'Loby Chair', price: '$ 145.00', quantity: 1 },
    {
      id: 4,
      class: 'pa-0',
      image: '/c4.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 5,
      class: 'pa-0',
      image: '/c5.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 6,
      class: 'pa-0',
      image: '/c6.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 7,
      class: 'pa-0',
      image: '/c7.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 8,
      class: 'pa-0',
      image: '/c8.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 9,
      class: 'pa-0',
      image: '/c9.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 10,
      class: 'pa-0',
      image: '/c10.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 11,
      class: 'pa-0',
      image: '/c11.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 12,
      class: 'pa-0',
      image: '/c12.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 13,
      class: 'pa-0',
      image: '/c13.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 14,
      class: 'pa-0',
      image: '/c14.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 15,
      class: 'pa-0',
      image: '/c15.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    },
    {
      id: 16,
      class: 'pa-0',
      image: '/c16.png',
      title: 'Modern Lounge',
      price: '$ 145.00',
      quantity: 1
    }
  ],
  officechairs: [
    {
      id: 1,
      image: '/c1.jpg',
      title: 'Office Chair 1',
      price: '$145.00',
      quantity: 1
    },
    {
      id: 2,
      image: '/c1.jpg',
      title: 'Office Chair 2',
      price: '$145.00',
      quantity: 1
    }
  ],
  tablesnightstands: [
    {
      id: 1,
      image: '/c1.jpg',
      title: 'Table Nightstand 1',
      price: '$145.00',
      quantity: 1
    },
    {
      id: 2,
      image: '/c1.jpg',
      title: 'Table Nightstand 2',
      price: '$145.00',
      quantity: 1
    }
  ],
  kitchenfurniture: [
    {
      id: 1,
      image: '/c1.jpg',
      title: 'Kitchen Furniture 1',
      price: '$145.00',
      quantity: 1
    },
    {
      id: 2,
      image: '/c1.jpg',
      title: 'Kitchen Furniture 2',
      price: '$145.00',
      quantity: 1
    }
  ]
}

const routes = [
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
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/category/:categoryTitle',
    name: 'Category',
    component: () => import('../components/CategoryView.vue'),
    props: (route) => {
      const categoryTitle = route.params.categoryTitle.toLowerCase()
      return { items: categories[categoryTitle] || [] }
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/CartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
