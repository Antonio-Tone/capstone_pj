<template>
  <div class="prods">
  
    <div class="container">
      <h2 class="class-display2 fs-1 mb-5">showroom</h2>
      <div
        class="row justify-content-center gap-6"
        v-if="vehicles"
      >
        <div class="col-4" v-for="car in vehicles" :key="car.vehicleID">
          <div
            class="card"
            style="width: 18rem"
            @mouseover="hoveredVehicle = car"
            @mouseleave="hoveredVehicle = null"
          >
            <img
              :src="hoveredVehicle === car ? car.hoveredURL : car.imageURL"
              class="card-img-top"
              :alt="car.vehicleName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ car.vehicleName }} <br /></h5>
              <center>
                <button class="view" @click="viewVehicle(car.vehicleID)">
                  <span>View More</span>
                  <svg
                    class="arrow"
                    viewBox="0 0 448 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <Spinner/>
      </div>
    </div>
  </div>
</template>
<script>
  import Spinner from "../components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
    user(){
      const user = this.$store.state.user
      return user
    }
  },
  methods: {
    viewVehicle(vehicleID) {
      const chosenVehicle = this.vehicles.find(
        (vehicle) => vehicle.vehicleID === vehicleID
      );
      this.$store.commit("setSingleVehicle", chosenVehicle);
      this.$router.push({ name: "Vehicle", params: { id: vehicleID } });
    },
  },
  mounted() {
    this.$store.dispatch("fetchVehicles");
    if(!this.user){
      this.$router.push('/login')
    }
  },
  data() {
    return {
      hoveredVehicle: null,
    };
  },
};
</script>
