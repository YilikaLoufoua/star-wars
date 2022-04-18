<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      vehicle: {},
    };
  },
  created() {
    this.loading = true;
    this.getVehicleDetails();
  },
  methods: {
    async getVehicleDetails() {
      this.vehicle = await api.findById('vehicles', this.$route.params.id);
      this.vehicle.films = await api.fetchList(this.vehicle.films);
      this.vehicle.pilots = await api.fetchList(this.vehicle.pilots);
      console.log(this.vehicle);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="vehicle">
    <div class="heading">
    {{ vehicle.name }}
    </div>
    <div>
      Class: {{ vehicle.vehicle_class }}
    </div>
    <div>
      Manufacturer: {{ vehicle.manufacturer }}
    </div>
    <div>
      Cost (In Galactic Credits): {{ vehicle.cost_in_credits }}
    </div>
    <div>
      Length: {{ vehicle.length }} m
    </div>
    <div>
      Maximum Speed In The Atmosphere: {{ vehicle.max_atmosphering_speed }} km/hr
    </div>
    <div>
      Crews: {{ vehicle.crew }}
    </div>
    <div v-if="vehicle.passengers > 0">
      Passengers: {{ vehicle.passengers }} 
    </div>
    <div>
      Cargo Capacity: {{ vehicle.cargo_capacity }} kg
    </div>
    <div>
      Maximum Length of Time Without Resupplying: {{ vehicle.consumables }} 
    </div>
    <div v-if="this.vehicle.pilots.length > 0">
      Pilots:
      <RouterLink
        class="link-item"
        :to="{ name: 'person', params: { id: pilot.url.replace(/[^0-9]/g,'') } }"
        v-for="pilot of this.vehicle.pilots"
        :key="pilot.id"
        >{{ pilot.name }}</RouterLink>
    </div>
    <div>
      Films:
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