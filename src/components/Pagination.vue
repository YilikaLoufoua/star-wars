<script>
export default {
  props: {
      hasNextPage: Boolean,
      hasPreviousPage: Boolean
  },
  emits: ['loadPreviousPage', 'loadNextPage']
}
</script>

<template>

<nav>
  <ul class="pagination justify-content-end">
    <li :class="this.hasPreviousPage ? 'page-item ':'page-item disabled'" @click="$emit('loadPreviousPage')">
      <a class="page-link" href="#">Previous</a>
    </li>
    <li :class="this.hasNextPage ? 'page-item':'page-item disabled'" @click="$emit('loadNextPage')">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</template>

<style lang="scss" scoped>
nav {
    margin-top: 30px;
}
</style>
