<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      specieslist: [],
    };
  },
  created() {
    this.loadSpecies();
  },
  methods: {
    loadSpecies: async function () {
      this.specieslist = await api.findAll('species');
      console.log(this.species);
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'specie', params: { id: species.id } }"
    v-for="species of specieslist"
    :key="species.id"
    >{{ species.name }}</RouterLink
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
