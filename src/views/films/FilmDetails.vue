<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      film: {},
    };
  },
  created() {
    this.getFilmById();
  },
  methods: {
    async getFilmById() {
      this.film = await api.findById('films', this.$route.params.id); 
    },
  },
};
</script>

<template>
  <div class="film">
    Id: {{ $route.params.id }}
    <hr />
    Description: {{ film.opening_crawl }}
  </div>
</template>

<style lang="scss" scoped>
.film {
  background-color: #fff;
  div {
    color: #666;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}
</style>
