<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      person: {},
    };
  },
  created() {
    this.getPersonDetails();
  },
  methods: {
    async getPersonDetails() {
      this.loading = true;
      this.person = await api.findById('people', this.$route.params.id);
      this.person.homeworld = await fetch(this.person.homeworld).then((response) => response.json());
      this.person.films = await api.fetchList(this.person.films);
      this.person.starships = await api.fetchList(this.person.starships);
      this.person.vehicles = await api.fetchList(this.person.vehicles);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="person">
    <div class="heading">
    {{ person.name }}
    </div>
    <div> Birth Year: {{ person.birth_year}} </div> 
    <div> Gender: {{ person.gender }} </div> 
    <div v-if="this.person.height > 0"> Height: {{ person.height }} cm </div> 
    <div v-else> Height: Unknown </div> 
    <div v-if="this.person.mass > 0"> Mass: {{ person.mass }} kg </div> 
    <div v-else> Mass: Unknown </div> 
    <div> Eye Color: {{ person.eye_color}} </div> 
    <div>mSkin Color: {{ person.skin_color}} </div> 
    <div> Films:
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.person.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div> 
    <div> Home World:
      <RouterLink
        class="link-item"
        :to="{ name: 'planet', params: { id: this.person.homeworld.url.replace(/[^0-9]/g,'') } }"
        >{{ this.person.homeworld.name }}</RouterLink>
    </div> 
    <div v-if="this.person.starships.length > 0"> Star Ships:
      <RouterLink
        class="link-item"
        :to="{ name: 'starship', params: { id: starship.url.replace(/[^0-9]/g,'') } }"
        v-for="starship of this.person.starships"
        :key="starship.id"
        >{{ starship.name }}</RouterLink>
    </div> 
    <div v-if="this.person.vehicles.length > 0"> Vehicles:
      <RouterLink
        class="link-item"
        :to="{ name: 'vehicle', params: { id: vehicle.url.replace(/[^0-9]/g,'') } }"
        v-for="vehicle of this.person.vehicles"
        :key="vehicle.id"
        >{{ vehicle.name }}</RouterLink>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.person {
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
