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
    <div class="heading">
    {{ film.title }}
    </div>
    <div>
      Description: {{ film.opening_crawl }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.film {
  background-color: #fff;
  div {
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px;
  }
  .heading {
    font-size: 2rem;
  }
}
</style>
