import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home - Walver",
      transition: 'fade'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: "About - Walver",
      transition: 'fade'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectView.vue'),
    meta: {
      title: "Projects - Walver",
      transition: 'fade'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: "Contact - Walver",
      transition: 'fade'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;