import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

import Films from '@/views/films/Films.vue';
import FilmDetails from '@/views/films/FilmDetails.vue';

import People from '@/views/people/People.vue';
import PersonDetails from '@/views/people/PersonDetails.vue';

import Starships from '@/views/starships/Starships.vue';
import StarshipDetails from '@/views/starships/StarshipDetails.vue';

import Species from '@/views/species/Species.vue';
import SpeciesDetails from '@/views/species/SpeciesDetails.vue';

import Vehicles from '@/views/vehicles/Vehicles.vue';
import VehicleDetails from '@/views/vehicles/VehicleDetails.vue';

import Planets from '@/views/planets/Planets.vue';
import PlanetDetails from '@/views/planets/PlanetDetails.vue';

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
      path: '/species',
      name: 'species',
      component: Species,
    },
    {
      path: '/species/:id',
      name: 'specie',
      component: SpeciesDetails,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles,
    },
    {
      path: '/vehicles/:id',
      name: 'vehicle',
      component: VehicleDetails,
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets,
    },
    {
      path: '/planets/:id',
      name: 'planet',
      component: PlanetDetails,
    },
    {
      path: '/:pathMatch(.*)', 
      component: NotFound,
    },
  ],
});

export default router;
