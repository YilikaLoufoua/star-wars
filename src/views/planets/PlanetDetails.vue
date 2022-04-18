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
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="planet">
    <div class="heading">
    {{ planet.name }}
    </div>
    <div>
      Popolation of Sentient Beings: {{ planet.population}}
    </div> 
    <div>
      Diameter: {{ planet.diameter}} km
    </div> 
    <div>
      Rotation Period: {{ planet.rotation_period}} hours
    </div> 
    <div>
      Orbital Period: {{ planet.orbital_period }} days
    </div> 
    <div>
      Gravity: {{ planet.gravity}}
    </div> 
    <div>
      Climate: {{ planet.climate}}
    </div> 
    <div>
      Terrain: {{ planet.terrain}}
    </div> 
    <div>
      Percentage of surface covered by water: {{ planet.surface_water }} %
    </div> 
    <div>
      Residents:
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: resident.url.replace(/[^0-9]/g,'') } }"
        v-for="resident of this.planet.residents"
        :key="resident.id"
        >{{ resident.name }}</RouterLink>
    </div> 
    <div v-if="this.planet.films.length > 0">
      Films:
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
  background-color: #fff;
  div {
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px;
  }
  .heading {
    font-size: 2rem;
  }
}
.link-item {
  color: black;
  padding: 5px 10px;
  margin-left: 20px;
  display: list-item;
}
</style>
