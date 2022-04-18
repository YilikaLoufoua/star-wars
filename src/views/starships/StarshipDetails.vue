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
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="starship">
    <div class="heading">
    {{ starship.name }}
    </div>
    <div>
      Model: {{ starship.model }}
    </div>
    <div>
      Class: {{ starship.starship_class }}
    </div>
    <div>
      Manufacturer: {{ starship.manufacturer }}
    </div>
    <div>
      Cost (In Galactic Credits): {{ starship.cost_in_credits }}
    </div>
    <div>
      Hyperdrive Rating: {{ starship.hyperdrive_rating }}
    </div>
    <div>
      Maximum Number of Megalights This Starship Can Travel In A Standard Hour: {{ starship.MGLT }}
    </div>
    <div>
      Length: {{ starship.length }} m
    </div>
    <div>
      Maximum Speed In The Atmosphere: {{ starship.max_atmosphering_speed }} km/hr
    </div>
    <div>
      Crews: {{ starship.crew }}
    </div>
    <div v-if="starship.passengers > 0">
      Passengers: {{ starship.passengers }} 
    </div>
    <div>
      Cargo Capacity: {{ starship.cargo_capacity }} kg
    </div>
    <div>
      Maximum Length of Time Without Resupplying: {{ starship.consumables }} 
    </div>
    <div v-if="this.starship.pilots.length > 0">
      Pilots:
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: pilot.url.replace(/[^0-9]/g,'') } }"
        v-for="pilot of this.starship.pilots"
        :key="pilot.id"
        >{{ pilot.name }}</RouterLink>
    </div>
    <div>
      Films:
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