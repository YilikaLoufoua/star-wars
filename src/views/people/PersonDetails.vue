<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      person: {}
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
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="person">
    <p class="h1 pl-4 pt-4"> {{ person.name }} </p>
    <hr color="white">
    <div class="info">
      <p> Birth Year: {{ person.birth_year}} </p> 
      <p> Gender: {{ capitalizeFirstLetter(person.gender) }} </p> 
      <p> Height: {{ capitalizeFirstLetter(person.height) }} cm </p> 
      <p> Mass: {{ capitalizeFirstLetter(person.mass) }} kg </p> 
      <p> Eye Color: {{ capitalizeFirstLetter(person.eye_color)}} </p> 
      <p> Skin Color: {{ capitalizeFirstLetter(person.skin_color)}} </p> 
      <p class="h4 py-2"> Homeworld </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'planet', params: { id: this.person.homeworld.url.replace(/[^0-9]/g,'') } }"
        >{{ this.person.homeworld.name }}</RouterLink>
      <p class="h4 pt-3 pb-2" v-if="this.person.starships.length > 0"> Star Ships </p> 
      <RouterLink
        class="link-item"
        :to="{ name: 'starship', params: { id: starship.url.replace(/[^0-9]/g,'') } }"
        v-for="starship of this.person.starships"
        :key="starship.id"
        >{{ starship.name }}</RouterLink>
      <p class="h4 pt-3 pb-2" v-if="this.person.vehicles.length > 0"> Vehicles </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'vehicle', params: { id: vehicle.url.replace(/[^0-9]/g,'') } }"
        v-for="vehicle of this.person.vehicles"
        :key="vehicle.id"
        >{{ vehicle.name }}</RouterLink>
      <p class="h4 pt-3 pb-2"> Films </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.person.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person {
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

