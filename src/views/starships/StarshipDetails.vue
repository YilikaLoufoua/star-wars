<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      starship: {},
    };
  },
  created() {
    this.getPersonById();
  },
  methods: {
    async getPersonById() {
      this.starship = await api.findById('starships', this.$route.params.id); 
    },
  },
};
</script>

<template>
  <div class="starship">
    Id: {{ $route.params.id }}
    <hr />
    Name: {{ starship.name }}
  </div>
</template>

<style lang="scss" scoped>
.starship {
  background-color: #fff;
  div {
    color: #666;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}
</style>
