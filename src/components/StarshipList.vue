<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      starships : [],
    };
  },
  created() {
    this.loadStarships ();
  },
  methods: {
    loadStarships : async function () {
      this.starships  = await api.findAll('starships ');
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'starship', params: { id: starship.id } }"
    v-for="starship of starships "
    :key="starship.id"
    >{{ starship.name }}</RouterLink
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
