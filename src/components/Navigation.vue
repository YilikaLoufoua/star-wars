<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink
      :to="{ name: 'people' }"
      :class="{ 'router-link-exact-active': $route.path.includes('people') }">
      People
    </RouterLink>
    <RouterLink
      :to="{ name: 'films' }"
      :class="{ 'router-link-exact-active': $route.path.includes('films') }">
      Films
    </RouterLink>
    <RouterLink
      :to="{ name: 'starships' }"
      :class="{ 'router-link-exact-active': $route.path.includes('starships') }">
      Starships
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  a {
    background-color: #fff; // inactive route-lin is white
    text-decoration: none;
    padding: 5px 10px;
    color: #333;
    font-weight: bold;
  }
}
</style>
