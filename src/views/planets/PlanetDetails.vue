<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      planet: {},
    };
  },
  created() {
    this.getPlanetById();
  },
  methods: {
    async getPlanetById() {
      this.planet = await api.findById('planets', this.$route.params.id);
    },
  },
};
</script>

<template>
  <div class="planet">
    <div class="heading">
    {{ planet.name }}
    </div>
    <div>
      Birth Year: {{ planet.birth_year}}
    </div> 
    <div>
      Gender: {{ planet.gender}}
    </div> 
    <div>
      Height: {{ planet.height}} cm
    </div> 
    <div>
      Mass: {{ planet.mass }} Kg
    </div> 
    <div>
      Eye Color: {{ planet.eye_color}}
    </div> 
    <div>
      Skin Color: {{ planet.skin_color}}
    </div> 
    <div>
      Films: {{ planet.films}}
    </div> 
    <div>
      Home World: {{ planet.homeworld}}
    </div> 
    <div>
      Star Ships: {{ planet.starships}}
    </div> 
    <div>
      Planets: {{ planet.planets}}
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.planet {
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
