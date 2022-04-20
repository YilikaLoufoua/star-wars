<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      starship: {},
    };
  },
  created() {
    this.loading = true;
    this.getStarshipDetails();
  },
  methods: {
    async getStarshipDetails() {
      this.starship = await api.findById('starships', this.$route.params.id); ;
      this.starship.films = await api.fetchList(this.starship.films);
      this.starship.pilots = await api.fetchList(this.starship.pilots);
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
  <div v-if="!loading" class="starship">
    <p class="h1 pl-4 pt-4"> {{ toTitleCase(starship.name) }} </p>
    <hr color="white">
    <div class="info">
      <p> Model: {{ toTitleCase(starship.model) }} </p>
      <p> Class: {{ toTitleCase(starship.starship_class) }} </p>
      <p> Manufacturer: {{ starship.manufacturer }} </p>
      <p> Cost: {{ starship.cost_in_credits }} Galactic Credits</p>
      <p> Hyperdrive Rating: {{ starship.hyperdrive_rating }} </p>
      <p> Maximum Number of Megalights This Starship Can Travel In A Standard Hour: {{ starship.MGLT }} </p>
      <p> Length: {{ starship.length }} </p>
      <p> Maximum Speed In The Atmosphere: {{ starship.max_atmosphering_speed }} km/hr </p>
      <p> Crews: {{ starship.crew }} </p>
      <p v-if="starship.passengers > 0"> Passengers: {{ starship.passengers }} </p>
      <p> Cargo Capacity: {{ starship.cargo_capacity }} kg </p>
      <p> Maximum Length of Time Without Resupplying: {{ starship.consumables }} </p>
      <p class="h4 py-2" v-if="this.starship.pilots.length > 0"> Pilots </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: pilot.url.replace(/[^0-9]/g,'') } }"
        v-for="pilot of this.starship.pilots"
        :key="pilot.id"
        >{{ pilot.name }}</RouterLink>
      <p class="h4 pt-3 pb-2"> Films </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.starship.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.starship {
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