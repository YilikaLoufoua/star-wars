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
    { path: '/star-wars-wiki/', name: 'home', component: Home },
    {
      path: '/star-wars-wiki/people',
      name: 'people',
      component: People,
    },
    {
      path: '/star-wars-wiki/people/:id',
      name: 'person',
      component: PersonDetails,
    },
    {
      path: '/star-wars-wiki/films',
      name: 'films',
      component: Films,
    },
    {
      path: '/star-wars-wiki/films/:id',
      name: 'film',
      component: FilmDetails,
    },
    {
      path: '/star-wars-wiki/starships',
      name: 'starships',
      component: Starships,
    },
    {
      path: '/star-wars-wiki/starships/:id',
      name: 'starship',
      component: StarshipDetails,
    },
    {
      path: '/star-wars-wiki/species',
      name: 'species',
      component: Species,
    },
    {
      path: '/star-wars-wiki/species/:id',
      name: 'specie',
      component: SpeciesDetails,
    },
    {
      path: '/star-wars-wiki/vehicles',
      name: 'vehicles',
      component: Vehicles,
    },
    {
      path: '/star-wars-wiki/vehicles/:id',
      name: 'vehicle',
      component: VehicleDetails,
    },
    {
      path: '/star-wars-wiki/planets',
      name: 'planets',
      component: Planets,
    },
    {
      path: '/star-wars-wiki/planets/:id',
      name: 'planet',
      component: PlanetDetails,
    },
  ]
});

export default router;
