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
      this.species.films = await api.fetchList(this.species.films);
      this.species.people = await api.fetchList(this.species.people);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="species">
    <div class="heading">
    {{ species.name }}
    </div>
    <div>
      Classification: {{ species.classification}}
    </div> 
    <div>
      Designation: {{ species.designation}}
    </div> 
    <div>
      Average Height: {{ species.average_height}} cm
    </div> 
    <div>
      Average Lifespan: {{ species.average_lifespan}} years
    </div> 
    <div>
      Eye Colors: {{ species.eye_colors}} 
    </div> 
    <div>
      Average Lifespan: {{ species.average_lifespan}} years
    </div> 
    <div>
      Hair Colors: {{ species.hair_colors}} 
    </div> 
    <div>
      Homeworld: {{ species.homeworld}} 
    </div> 
    <div>
      Language: {{ species.language}} 
    </div> 
    <div>
      Skin Colors: {{ species.skin_colors}} 
    </div> 
    <div>
      People:
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: person.url.replace(/[^0-9]/g,'') } }"
        v-for="person of this.species.people"
        :key="person.id"
        >{{ person.name }}</RouterLink>
    </div>
    <div>
      Films:
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
  background-color: #fff;
  div {
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px 30px;
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

