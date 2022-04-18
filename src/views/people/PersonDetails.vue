<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      loading: false,
      person: {},
    };
  },
  created() {
    this.loading = true;
    this.getPersonDetails();
  },
  methods: {
    async getPersonDetails() {
      this.person = await api.findById('people', this.$route.params.id);
      this.person.homeworld = await fetch(this.person.homeworld).then((response) => response.json());
      this.person.films = await api.fetchList(this.person.films);
      this.person.starships = await api.fetchList(this.person.starships);
      this.person.vehicles = await api.fetchList(this.person.vehicles);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="!loading" class="person">
    <div class="heading">
    {{ person.name }}
    </div>
    <div>
      Birth Year: {{ person.birth_year}}
    </div> 
    <div>
      Gender: {{ person.gender}}
    </div> 
    <div>
      Height: {{ person.height}} cm
    </div> 
    <div>
      Mass: {{ person.mass }} Kg
    </div> 
    <div>
      Eye Color: {{ person.eye_color}}
    </div> 
    <div>
      Skin Color: {{ person.skin_color}}
    </div> 
    <div>
      Films:
      <li v-for="film in person.films">
        {{ film.title }}
      </li>
    </div> 
    <div>
      Home World:
      <li>
        {{ person.homeworld.name }}
      </li>
    </div> 
    <div>
      Star Ships:
      <li v-for="starship in person.starships">
        {{ starship.name }}
      </li>
    </div> 
    <div>
      Vehicles:
      <li v-for="vehicle in person.vehicles">
        {{ vehicle.name }}
      </li>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.person {
  background-color: #fff;
  div {
    font-size: 1rem;
    line-height: 2rem;
    padding: 10px 30px;
  }
  .heading {
    font-size: 2rem;
  }
}
</style>
