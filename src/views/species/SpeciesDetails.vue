<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      species: {},
    };
  },
  created() {
    this.loading = true;
    this.getSpeciesDetails();
  },
  methods: {
    async getSpeciesDetails() {
      this.species = await api.findById('species', this.$route.params.id); ;
      this.species.homeworld = await fetch(this.species.homeworld).then((response) => response.json());
      this.species.films = await api.fetchList(this.species.films);
      this.species.people = await api.fetchList(this.species.people);
      this.loading = false;
    },
    toTitleCase(str) {
      return str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="species">
    <p class="h1 pl-4 pt-4"> {{ species.name }} </p>
    <hr color="white">
    <div class="info">
      <p> Classification: {{ toTitleCase(species.classification)}} </p> 
      <p> Designation: {{ toTitleCase(species.designation)}} </p> 
      <p> Average Lifespan: {{ species.average_lifespan}} years </p> 
      <p> Language: {{ species.language}} </p> 
      <p> Average Height: {{ species.average_height}} cm </p> 
      <p> Eye Colors: {{ toTitleCase(species.eye_colors)}} </p> 
      <p> Hair Colors: {{ toTitleCase(species.hair_colors)}} </p> 
      <p> Skin Colors: {{ toTitleCase(species.skin_colors)}} </p> 
      <p class="h4 py-2"> Homeworld </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'planet', params: { id: this.species.homeworld.url.replace(/[^0-9]/g,'') } }"
        >{{ this.species.homeworld.name }}</RouterLink>
      <p class="h4 py-2"> Characters </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: person.url.replace(/[^0-9]/g,'') } }"
        v-for="person of this.species.people"
        :key="person.id"
        >{{ person.name }}</RouterLink>
      <p class="h4 py-2"> Films </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.species.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.species {
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

