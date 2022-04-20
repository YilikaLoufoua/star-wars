<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      film: {},
    };
  },
  created() {
    this.loading = true;
    this.getFilmDetails();
  },
  methods: {
    async getFilmDetails() {
      this.film = await api.findById('films', this.$route.params.id); 
      this.film.characters = await api.fetchList(this.film.characters);
      this.film.planets = await api.fetchList(this.film.planets);
      this.film.specieslist = await api.fetchList(this.film.species);
      this.film.starships = await api.fetchList(this.film.starships);
      this.film.vehicles = await api.fetchList(this.film.vehicles);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="film">
    <p class="h4 pl-4 pt-4"> Star Wars: Episode {{ film.episode_id }} </p>
    <p class="h1 pl-4"> {{ film.title }} </p>
    <div class="info">
      <p> Release Date: {{ film.release_date }} </p>
      <p> Director: {{ film.director }} </p>
      <p> Producer(s): {{ film.producer }} </p>
      <p class="h4 pt-2"> Opening Crawl </p>
      <hr color="white">
      <p> {{ film.opening_crawl }} </p>
      <p class="h4 py-2"> Characters </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: character.url.replace(/[^0-9]/g,'') } }"
        v-for="character of this.film.characters"
        :key="character.id"
        >{{ character.name }}</RouterLink>
      <p class="h4 py-2"> Planets </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'planet', params: { id: planet.url.replace(/[^0-9]/g,'') } }"
        v-for="planet of this.film.planets"
        :key="planet.id"
        >{{ planet.name }}</RouterLink>
      <p class="h4 py-2"> Star Ships </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'starship', params: { id: starship.url.replace(/[^0-9]/g,'') } }"
        v-for="starship of this.film.starships"
        :key="starship.id"
        >{{ starship.name }}</RouterLink>
      <p class="h4 py-2"> Species </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'specie', params: { id: species.url.replace(/[^0-9]/g,'') } }"
        v-for="species of this.film.specieslist"
        :key="species.id"
        >{{ species.name }}</RouterLink>
      <p class="h4 py-2"> Vehicles </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'vehicle', params: { id: vehicle.url.replace(/[^0-9]/g,'') } }"
        v-for="vehicle of this.film.vehicles"
        :key="vehicle.id"
        >{{ vehicle.name }}</RouterLink>
    </div>  
  </div>
</template>

<style lang="scss" scoped>
.film {
  background-color: #212529;
  color: #FFE300;
  .info {
    font-size: 1rem;
    padding: 1rem 1.5rem;
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
