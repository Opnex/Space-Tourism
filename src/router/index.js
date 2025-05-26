import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';  // Ensure this path is correct
import DestinationView from '@/views/DestinationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView  // Dynamic import
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('@/views/CrewView.vue')  // Dynamic import
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('@/views/TechnologyView.vue')  // Dynamic import
    }
  ],
});

export default router;