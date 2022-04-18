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
    <div class="heading">
    Star Wars: Episode {{ film.episode_id }} <br>
    {{ film.title }}
    </div>
    <div>
      Opening Crawl: {{ film.opening_crawl }}
    </div>
    <div>
      Release Date: {{ film.release_date }}
    </div>
    <div>
      Director: {{ film.director }}
    </div>
    <div>
      Producer(s): {{ film.producer }}
    </div>
    <div>
      Characters:
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: character.url.replace(/[^0-9]/g,'') } }"
        v-for="character of this.film.characters"
        :key="character.id"
        >{{ character.name }}</RouterLink>
    </div>
    <div>
      Planets:
      <RouterLink
        class="link-item"
        :to="{ name: 'planet', params: { id: planet.url.replace(/[^0-9]/g,'') } }"
        v-for="planet of this.film.planets"
        :key="planet.id"
        >{{ planet.name }}</RouterLink>
    </div>
    <div>
      Star Ships:
      <RouterLink
        class="link-item"
        :to="{ name: 'starship', params: { id: starship.url.replace(/[^0-9]/g,'') } }"
        v-for="starship of this.film.starships"
        :key="starship.id"
        >{{ starship.name }}</RouterLink>
    </div> 
    <div>
      Species:
      <RouterLink
        class="link-item"
        :to="{ name: 'specie', params: { id: species.url.replace(/[^0-9]/g,'') } }"
        v-for="species of this.film.specieslist"
        :key="species.id"
        >{{ species.name }}</RouterLink>
    </div> 
    <div>
      Vehicles:
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
  background-color: #fff;
  div {
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px;
  }
  .heading {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}
.link-item {
  color: black;
  padding: 5px 10px;
  margin-left: 20px;
  display: list-item;
}
</style>
