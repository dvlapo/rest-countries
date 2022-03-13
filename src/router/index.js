import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../src/views/Home.vue';
import CountryDetails from '../../src/views/CountryDetails.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home,
      },
      {
         path: '/details',
         name: 'countrydetails',
         component: CountryDetails,
      },
   ],
});

export default router;
