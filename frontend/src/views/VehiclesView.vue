<template>
  <div class="prods">
    <div class="container">
      <h2 class="class-display2 fs-1 mb-5 mt-3 d-flex mx-auto justify-content-center">SHOWROOM</h2>
      <div class="row justify-content-center gap-6" v-if="vehicles">
        <div class="options">
          <div class="d-flex head mb-5">
            <div class="category">
              <label for="categorySelect">Select Category:</label>
              <select id="categorySelect" v-model="Categories">
                <option value="All">All Categories</option>
                <option value="supercar">Supercars</option>
                <option value="SUV">Suv's</option>
                <option value="comfort">Luxury Comfort</option>
              </select>
            </div>
            <div class="search mx-auto">
              <label for="">Search:</label>
              <input type="text" v-model="search" placeholder="Search" />
            </div>
            <div class="sorting">
              <label for="">Sort By:</label>
              <div class="d-flex justify-content-center">
                <button @click="sortByPrice" class="sort">Sort by Price</button>
                <button @click="sortByName" class="sort">Sort by Name</button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="car in filteredVehicles"
          :key="car.vehicleID"
        >
          <div
            class="card mb-5"
            style="width: 100%;"
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
              <p>{{ car.category }}</p>
              <center>
                <button class="view" @click="viewVehicle(car.vehicleID)">
                  view more
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="row">
        <Spinner />
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
  data() {
    return {
      hoveredVehicle: null,
      search: "",
      select: "",
      Categories: "All",
    };
  },
  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    },
    user() {
      const user = this.$store.state.user;
      return user;
    },

    filteredVehicles() {
      return this.$store.state.vehicles?.filter((vehicle) => {
        let isMatch = true;
        if (
          !vehicle.vehicleName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.Categories !== "All" && this.Categories !== vehicle.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    viewVehicle(vehicleID) {
      const chosenVehicle = this.vehicles.find(
        (vehicle) => vehicle.vehicleID === vehicleID
      );
      this.$store.commit("setSingleVehicle", chosenVehicle);
      this.$router.push({ name: "Vehicle", params: { id: vehicleID } });
    },
    sortByPrice(state) {
      this.$store.state.vehicles.sort((a, b) => {
        return a.rate - b.rate;
      });
      if (!state.asc) {
        this.$store.state.vehicles.reverse();
      }
      state.asc = !state.asc;

      this.$store.commit("sortVehicles");
    },
    sortByName(state) {
      this.$store.state.vehicles.sort((a, b) => {
        if (a.vehicleName < b.vehicleName) {
          return -1;
        }
        if (a.vehicleName > b.vehicleName) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        this.$store.state.vehicles.reverse();
      }
      state.asc = !state.asc;

      this.$store.commit("sortByName");
    },
  },
  mounted() {
    this.$store.dispatch("fetchVehicles");
    if (!this.user) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
}

.card {
  border-radius: 16px;
}


.head {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.category,
.sorting,
.search {
  flex: 1;
  margin: 10px;
}

@media (max-width: 576px) {
  .col-12 {
    flex-basis: 100%;
    max-width: 100%;
  }
}

@media (min-width: 577px) { 
  .col-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media (min-width: 768px) { 
    .col-md-4 {
      flex-basis: 33.33%;
      max-width: 33.33%;
    }

    @media (min-width: 992px) { 
      .col-lg-3 {
        flex-basis: 25%;
        max-width: 25%;
      }
    }
  }
}
</style>
