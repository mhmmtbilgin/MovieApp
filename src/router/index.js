import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import SearchComponent from '../views/search/Search.vue';
import DetailComponent from '../views/detail/Detail.vue';
import SignupComponent from '../views/signup/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }, {
    path: '/search',
    name: 'Search',
    component: SearchComponent
  }, {
    path: '/detail',
    name: 'Detail',
    component: DetailComponent
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;