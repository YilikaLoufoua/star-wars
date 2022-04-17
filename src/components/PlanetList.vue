<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      planets: [],
    };
  },
  created() {
    this.loadPlanets();
  },
  methods: {
    loadPlanets: async function () {
      this.planets = await api.findAll('planets');
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'planet', params: { id: planet.id } }"
    v-for="planet of planets"
    :key="planet.id"
    >{{ planet.name }}</RouterLink
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
