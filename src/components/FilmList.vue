<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      films: [],
    };
  },
  created() {
    this.loadFilms();
  },
  methods: {
    loadFilms: async function () {
      this.films = await api.findAll('films');
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'film', params: { id: film.id } }"
    v-for="film of films"
    :key="film.id"
    >{{ film.title }}</RouterLink
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
