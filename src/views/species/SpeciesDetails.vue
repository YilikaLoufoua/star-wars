<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      species: {},
    };
  },
  created() {
    this.getSpeciesById();
  },
  methods: {
    async getSpeciesById() {
      this.species = await api.findById('species', this.$route.params.id); 
    },
  },
};
</script>

<template>
  <div class="species">
    Id: {{ $route.params.id }}
    <hr />
    Name: {{ species.name }}
  </div>
</template>

<style lang="scss" scoped>
.species {
  background-color: #fff;
  div {
    color: #666;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}
</style>
