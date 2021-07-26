import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    }
  ]
})

export default router;