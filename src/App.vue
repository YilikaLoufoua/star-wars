<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<template>
  <Navigation class="navigation"></Navigation>
  <div class="main-view">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 20px;
}
.main-view {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>