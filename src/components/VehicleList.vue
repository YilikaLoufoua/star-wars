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
      vehicles: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function () {
      this.loading = true;
      this.response = await api.findAll('vehicles');
      this.vehicles = this.response.results;
      this.nextPage = this.response.next;
      this.previousPage = this.response.previous;
      this.hasNextPage = this.nextPage ? true : false;
      this.hasPreviousPage = this.previousPage ? true : false;
      this.loading = false;
    },
    loadPage: async function (page) {
      if (page) {
        this.response = await api.fetchPage(page);
        this.vehicles = this.response.results;
        this.nextPage = this.response.next;
        this.previousPage = this.response.previous;
        this.hasNextPage = this.nextPage ? true : false;
        this.hasPreviousPage = this.previousPage ? true : false;
      }
    },
    toTitleCase(str) {
      return str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
  }
};
</script>

<template>
  <div class="loading" v-if="loading">Loading...</div>
  <div v-if="!loading">
  <RouterLink
    class="list-item"
    :to="{ name: 'vehicle', params: { id: vehicle.id } }"
    v-for="vehicle of vehicles"
    :key="vehicle.id"
    >{{ toTitleCase(vehicle.name) }}</RouterLink>
  <Pagination
    :hasNextPage=this.hasNextPage 
    :hasPreviousPage=this.hasPreviousPage
    @loadNextPage="loadPage(this.nextPage)"
    @loadPreviousPage="loadPage(this.previousPage)"></Pagination>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  font-size: large;
  background-color: black;
  color: #FFE300;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
}
.loading {
  color: #FFE300;
}
</style>
