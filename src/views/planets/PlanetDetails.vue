<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      planet: {},
    };
  },
  created() {
    this.loading = true;
    this.getPlanetDetails();
  },
  methods: {
    async getPlanetDetails() {
      this.planet = await api.findById('planets', this.$route.params.id);
      this.planet.residents = await api.fetchList(this.planet.residents);
      this.planet.films = await api.fetchList(this.planet.films);
      this.loading = false;
    },
    toTitleCase(str) {
      return str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
  }
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="planet">
    <p class="h2 pl-4 pt-4"> {{ planet.name }} </p>
    <hr color="white">
    <div class="info">
      <p> Popolation of Sentient Beings: {{ planet.population}} </p> 
      <p v-if="planet.diameter > 0"> Diameter: {{ planet.diameter}} km </p> 
      <p v-else> Diameter: less than 1 km </p> 
      <p> Rotation Period: {{ planet.rotation_period}} hours</p> 
      <p> Orbital Period: {{ planet.orbital_period }} days </p> 
      <p> Gravity: {{ planet.gravity}} </p> 
      <p> Climate: {{ toTitleCase(planet.climate)}} </p> 
      <p> Terrain: {{ toTitleCase(planet.terrain)}} </p> 
      <p> Percentage of surface covered by water: {{ planet.surface_water }} % </p> 
      <p class="h4 py-2" v-if="this.planet.residents.length"> Residents </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: resident.url.replace(/[^0-9]/g,'') } }"
        v-for="resident of this.planet.residents"
        :key="resident.id"
        >{{ resident.name }}</RouterLink>
      <p class="h4 pt-3 pb-2" v-if="this.planet.films.length > 0"> Films </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.planet.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.planet {
  background-color: #212529;
  color: #FFE300;
  .info {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
}
.link-item {
  color: #FFE300;
  padding: 5px 10px;
  margin-left: 20px;
  display: list-item;
}
.loading {
  color: #FFE300;
}
</style>