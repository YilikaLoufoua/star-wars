import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

import Films from '@/views/films/Films.vue';
import FilmDetails from '@/views/films/FilmDetails.vue';

import People from '@/views/people/People.vue';
import PersonDetails from '@/views/people/PersonDetails.vue';

import Starships from '@/views/starships/Starships.vue';
import StarshipDetails from '@/views/starships/StarshipDetails.vue';

import NotFound from '@/views/common/NotFound.vue';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/people',
      name: 'people',
      component: People,
    },
    {
      path: '/people/:id',
      name: 'person',
      component: PersonDetails,
    },
    {
      path: '/films',
      name: 'films',
      component: Films,
    },
    {
      path: '/films/:id',
      name: 'film',
      component: FilmDetails,
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships,
    },
    {
      path: '/starships/:id',
      name: 'starship',
      component: StarshipDetails,
    },
    {
      path: '/:pathMatch(.*)', 
      component: NotFound,
    },
  ],
});

export default router;
