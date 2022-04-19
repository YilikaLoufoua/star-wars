<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';
import Pagination from '@/components/Pagination.vue';

export default {
  components: { 
    Pagination 
  },
  data() {
    return {
      response: null,
      nextPage: null,
      previousPage: null,
      hasNextPage: false,
      hasPreviousPage: false,
      loading: false,
      starships : [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function () {
      this.loading = true;
      this.response = await api.findAll('starships');
      this.starships = this.response.results;
      this.nextPage = this.response.next;
      this.previousPage = this.response.previous;
      this.hasNextPage = this.nextPage ? true : false;
      this.hasPreviousPage = this.previousPage ? true : false;
      this.loading = false;
    },
    loadPage: async function (page) {
      if (page) {
        this.response = await api.fetchPage(page);
        this.starships = this.response.results;
        this.nextPage = this.response.next;
        this.previousPage = this.response.previous;
        this.hasNextPage = this.nextPage ? true : false;
        this.hasPreviousPage = this.previousPage ? true : false;
      }
    }
  }
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="starshipList">
  <RouterLink
    class="list-item"
    :to="{ name: 'starship', params: { id: starship.id } }"
    v-for="starship of starships "
    :key="starship.id"
    >{{ starship.name }}</RouterLink>
  <Pagination
    :hasNextPage=this.hasNextPage 
    :hasPreviousPage=this.hasPreviousPage
    @loadNextPage="loadPage(this.nextPage)"
    @loadPreviousPage="loadPage(this.previousPage)"></Pagination>
  </div>
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
