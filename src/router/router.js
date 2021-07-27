import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import ShowAll from '@/views/ShowAll.vue';
import ShowCar from '@/views/ShowCar.vue';
import Update from '@/views/Update.vue';
import Delete from '@/views/Delete.vue';

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
    },
    {
      name: 'ShowAll',
      path: '/show-all',
      component: ShowAll
    },
    {
      name: 'ShowCar',
      path: '/show-car/',
      component: ShowCar
    },
    {
      name: 'Update',
      path: '/update/',
      component: Update
    },
    {
      name: 'Delete',
      path: '/delete/',
      component: Delete
    }
  ]
})

export default router;