<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<template>
  <div class="logo">SWIKI</div>
  <Navigation class="navigation"></Navigation>
  <div class="main-view">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  margin-bottom: 10px;
}
.main-view {
  background-color: #212529;
  padding: 10px;
}
.logo {
  width: 225px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  align-content: center;
  font-size: calc(3vw + 3vh);
  color: #FFE300;
  background-color: black;
  margin: 20px 0;
}
</style>