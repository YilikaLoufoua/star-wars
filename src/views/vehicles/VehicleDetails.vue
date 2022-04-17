<script>
import api from '@/apis/api.js';

export default {
  data() {
    return {
      vehicle: {},
    };
  },
  created() {
    this.getVehicleById();
  },
  methods: {
    async getVehicleById() {
      this.vehicle = await api.findById('vehicles', this.$route.params.id);
    },
  },
};
</script>

<template>
  <div class="vehicle">
    <div class="heading">
    {{ vehicle.name }}
    </div>
    <div>
      Birth Year: {{ vehicle.birth_year}}
    </div> 
    <div>
      Gender: {{ vehicle.gender}}
    </div> 
    <div>
      Height: {{ vehicle.height}} cm
    </div> 
    <div>
      Mass: {{ vehicle.mass }} Kg
    </div> 
    <div>
      Eye Color: {{ vehicle.eye_color}}
    </div> 
    <div>
      Skin Color: {{ vehicle.skin_color}}
    </div> 
    <div>
      Films: {{ vehicle.films}}
    </div> 
    <div>
      Home World: {{ vehicle.homeworld}}
    </div> 
    <div>
      Star Ships: {{ vehicle.starships}}
    </div> 
    <div>
      Vehicles: {{ vehicle.vehicles}}
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.vehicle {
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
