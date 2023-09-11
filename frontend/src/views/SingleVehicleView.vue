<template>
  <div class="div">
    <div class="row" v-for="car in vehicle" :key="car.vehicleID">
      <div class="col-6 show">
        <div class="single-vehicle">
          <h1>{{ car.vehicleName }}</h1>
          <img class="image mb-3" :src="car.imageURL" alt="" />
          <h3>TONY'S LUX RENTALS</h3>
          <h4>DRIVE IN STYLE</h4>
        </div>
      </div>
      <div class="col-6">
        <h1>{{ car.rate }}/HOUR</h1>
        <ul class="list">
          <il>{{ car.speed }}</il>
          <il>{{ car.year }}</il>
          <il>{{ car.category }}</il>
        </ul>
        <button class="btn btn-warning" @click="addToWishlist(car)">
          Add to Wishlist
        </button>
        <button class="btn btn-success m-2" @click="booking(car)">
          Book Now
        </button>
        <p v-if="isInWishlist(car)">Already in Wishlist</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    vehicle() {
      return this.$store.state.vehicle;
    },
  },
  data() {
    return {
      data: null,
      wishlist: [],
       car: null,
    };
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem("Data"));
    this.loadWishlist();
    this.$store.dispatch("fetchVehicle", this.id);
  },
  methods: {
    addToWishlist(car) {
      console.log(this.wishlist);
      if (this.data && car) {
        const newCar = { userID: this.data.userID, ...car };
        if (!this.isInWishlist(car)) {
          this.wishlist.push(newCar);
          localStorage.setItem(
            `Wishlist-${this.data.userID}`,
            JSON.stringify(this.wishlist)
          );
        } else {
          console.error(
            "Item already in wishlist or user ID exists in wishlist."
          );
        }
      } else {
        console.error("Data or car is missing.");
      }
    },
    isInWishlist(car) {
      return this.wishlist.some((item) => item.vehicleID === car.vehicleID);
    },

    loadWishlist() {
      if (this.data) {
        this.wishlist =
          JSON.parse(localStorage.getItem(`Wishlist-${this.data.userID}`)) ||
          [];
      }
    },
    booking() {
      this.car= car;
      this.$router.push("/booking");
    },
  },
};
</script>

<style scoped>
.show {
  width: 50%;
  height: 100%;
}
.image {
  width: 90%;
  height: 350px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
