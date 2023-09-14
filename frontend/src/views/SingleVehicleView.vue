<template>
  <div class="div">
    <div class="row" v-for="car in vehicle" :key="car.vehicleID">
      <div class="col-6 show my-auto align-item-center mt-3">
        <div class="single-vehicle">
          <h1>{{ car.vehicleName }}</h1>
          <img class="image mb-3" :src="car.imageURL" alt="" />
          <h3>TONY'S LUX RENTALS</h3>
          <h4>DRIVE IN STYLE</h4>
          <!-- <p class="mt-3">©COPYRIGHTS RESERVED BY ANTONIO TONE</p> -->
        </div>
      </div>
      <div class="col-6 mt-3">
        <h1>{{ car.rate }}/HOUR</h1>
        <ul class="list">
          <il> <img src="https://i.postimg.cc/TP03cGFh/icons8-speed-48.png" alt=""> {{ car.speed }} KM/H TOP SPEED!
          </il>
          <il> <img src="https://i.postimg.cc/cLXJR0VC/icons8-calendar-48.png" alt="">  {{ car.year }}  YEAR MODEL</il>
          <il><img src="https://i.postimg.cc/Bb4BHPm6/icons8-automatic-transmission-64.png" alt=""> AUTOMATIC TRANSMISSION</il>
          <il><img src="https://i.postimg.cc/50sPMPKn/icons8-star-48.png" class="star" alt="">:   {{ car.rating }} STAR RATING</il>
        </ul>
          <div class="buttons">
            <button class="btn btn-warning wish" @click="addToWishlist(car)">
          Add to Wishlist
        </button>
        <button class="btn btn-success book" @click="book(car)">
          Book Now
        </button>
        <p v-if="isInWishlist(car)">Already in Wishlist</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
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
    };
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem("Data"));
    this.loadWishlist();
    this.$store.dispatch("fetchVehicle", this.id);
  },
  methods: {
    book(car) {
      this.$router.push({
        path: '/bookings',
        query: { carId: car.vehicleID }
      });
    },
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
             Swal.fire({
            icon: "success",
            title: "added to list!",
            text: `Vehicle has been added to your wishlist`,
          });
        } else {
           Swal.fire({
            icon: "info",
            title: "already in wishlist",
            text: `Vehicle is already in wishlist`,
          });
          
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
  },
};
</script>

<style scoped>
.row{
  width: 100%;
}
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
  align-items: start;
  margin-top: 40px;
  margin-left:10rem ;
}
strong{
  font-size: 20px;
}
.star{
  margin-bottom: 15px;
}
il{
  margin: 10px;
}
.buttons{
  display: flex;
  justify-content: center;
  margin-top:50px ;
}
.wish{
margin-left: 10px;
}
.book{
  margin-left: 10px;
}

</style>
