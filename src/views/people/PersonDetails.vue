<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      person: {},
    };
  },
  created() {
    this.getPersonById();
  },
  methods: {
    async getPersonById() {
      this.person = await api.findById('people', this.$route.params.id); 
    },
  },
};
</script>

<template>
  <div class="person">
    Id: {{ $route.params.id }}
    <hr />
    Name: {{ person.name }}
  </div>
</template>

<style lang="scss" scoped>
.person {
  background-color: #fff;
  div {
    color: #666;
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
}
</style>
