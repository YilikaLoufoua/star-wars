<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      vehicle: {}
    };
  },
  created() {
    this.getVehicleDetails();
  },
  methods: {
    async getVehicleDetails() {
      this.loading = true;
      this.vehicle = await api.findById('vehicles', this.$route.params.id);
      this.vehicle.films = await api.fetchList(this.vehicle.films);
      this.vehicle.pilots = await api.fetchList(this.vehicle.pilots);
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
  <div v-if="!loading" class="vehicle">
    <p class="h1 pl-4 pt-4"> {{ toTitleCase(vehicle.name) }} </p>
    <hr color="white">
    <div class="info">
      <p> Class: {{ toTitleCase(vehicle.vehicle_class) }} </p>
      <p> Manufacturer: {{ vehicle.manufacturer }} </p>
      <p> Cost: {{ vehicle.cost_in_credits }} Galactic Credits</p>
      <p> Length: {{ vehicle.length }} m </p>
      <p> Maximum Speed In The Atmosphere: {{ vehicle.max_atmosphering_speed }} km/hr </p>
      <p> Crews: {{ vehicle.crew }} </p>
      <p v-if="vehicle.passengers > 0"> Passengers: {{ vehicle.passengers }} </p>
      <p> Cargo Capacity: {{ vehicle.cargo_capacity }} kg </p>
      <p> Maximum Length of Time Without Resupplying: {{ vehicle.consumables }} </p>
      <p class="h4 pt-3 pb-2" v-if="this.vehicle.pilots.length > 0"> Pilots </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: pilot.url.replace(/[^0-9]/g,'') } }"
        v-for="pilot of this.vehicle.pilots"
        :key="pilot.id"
        >{{ pilot.name }}</RouterLink>
      <p class="h4 pt-3 pb-2"> Films </p>
      <RouterLink
        class="link-item"
        :to="{ name: 'film', params: { id: film.url.replace(/[^0-9]/g,'') } }"
        v-for="film of this.vehicle.films"
        :key="film.id"
        >{{ film.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vehicle {
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
