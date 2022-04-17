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
    <RouterLink
      :to="{ name: 'species' }"
      :class="{ 'router-link-exact-active': $route.path.includes('species') }">
      Species
    </RouterLink>
    <RouterLink
      :to="{ name: 'vehicles' }"
      :class="{ 'router-link-exact-active': $route.path.includes('vehicles') }">
      Vehicles
    </RouterLink>
    <RouterLink
      :to="{ name: 'planets' }"
      :class="{ 'router-link-exact-active': $route.path.includes('planets') }">
      Planets
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
