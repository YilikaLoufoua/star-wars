<script>
import api from '@/apis/api.js';
import { toHandlers } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      people: [],
    };
  },
  created() {
    this.loadPeople();
  },
  methods: {
    loadPeople: async function () {
      this.people = await api.findAll('people');
    },
  },
};
</script>

<template>
  <RouterLink
    class="list-item"
    :to="{ name: 'person', params: { id: person.id } }"
    v-for="person of people"
    :key="person.id"
    >{{ person.name }}</RouterLink
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
