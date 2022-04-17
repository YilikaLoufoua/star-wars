<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      vehicles: [],
    };
  },
  created() {
    this.loadVehicles();
  },
  methods: {
    loadVehicles: async function () {
      this.vehicles = await api.findAll('vehicles');
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'vehicle', params: { id: vehicle.id } }"
    v-for="vehicle of vehicles"
    :key="vehicle.id"
    >{{ vehicle.name }}</RouterLink
  >
</template>

<style lang="scss" scoped>
.list-item {
  background-color: #16a085;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
}
</style>
