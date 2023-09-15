<template>
  <div class="row">
    <div class="col-6 show my-auto align-item-center mt-5">
      <div class="single-vehicle">
        <h1>{{ vehicle.vehicleName }}</h1>
        <img class="image mb-3" :src="vehicle.imageURL" alt="" />
        <h3>TONY'S LUX RENTALS</h3>
        <h4>DRIVE IN STYLE</h4>
        <p class="copy">©COPYRIGHTS RESERVED BY ANTONIO TONE</p>
      </div>
    </div>
    <div class="col-6 mt-5">
      <h1 class="mb-5">CHECKOUT</h1>
      <form class="form" @submit.prevent="placeOrder">
        <div class="d-flex justify-content-center mx-auto day">
          <span><p class="m-3">DATE:</p></span>
          <input type="date" v-model="booking.orderDate" id="date" required />
        </div>
        <br />
        <div class="d-flex justify-content-center mx-auto time">
          <label class="clock">TIME:</label>
          <input
            type="time"
            class="m-3"
            v-model="booking.Total_Booked_Hours"
            required
            id="from"
          />
          <span><p class="mt-3">TO</p></span>
          <input type="time" class="m-3" required id="to" />
        </div>
        <div class="d-flex justify-content-center">
          <div class="card">
            <label class="hold">CARD HOLDER:</label>
            <input class="info" type="text" placeholder="NAME" required />
          </div>
          <div class="card">
            <label class="num">CARD NUMBER:</label>
            <input class="info" type="number" placeholder="Card Number" required />
          </div>
        </div>
        <button type="submit" class="btn btn-primary position-bottom-fixed">
          PAY
        </button>
        <button class="btn btn-warning m-2" type="reset">clear</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import router from "../router";
export default {
  props: ["carId"],

  computed: {
    vehicle() {
      return this.$store.state.viewedVehicle;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      booking: {
        userID: "",
        vehicleID: "",
        orderDate: "",
        Total_Booked_Hours: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchVehicle", this.carId);
    this.$store.dispatch("fetchVehicle", this.carId);
  },
  methods: {
    book() {
      const from = document.querySelector("#from");
      const to = document.querySelector("#to");
      const date = document.querySelector("#date");
      const fromVal = from.value;
      const toVal = to.value;
      const booked = date.value;
      const fromTimes = fromVal.split(":");
      const toTimes = toVal.split(":");
      const fromMin = parseInt(fromTimes[0]) * 60 + parseInt(fromTimes[1]);
      const toMin = parseInt(toTimes[0]) * 60 + parseInt(toTimes[1]);
      const timeDiff = fromMin - toMin;
      const finalVal = Math.ceil((timeDiff / 60) * -1);
      this.booking.Total_Booked_Hours = finalVal;
      this.booking.orderDate = booked;
    },

    placeOrder() {
      this.book();
      this.booking.userID = this.$store.state.user.userID;
      this.booking.vehicleID = this.carId;
      this.$store.dispatch("addOrder", this.booking);
      Swal.fire({
        icon: "success",
        title: "Booking has been placed successfully",
        text: `Our team will get in contact with you soon, ${this.$store.state.user.userName}.`,
      });
      router.push("/Vehicles");
    },
  },
};
</script>
<style scoped>
.row {
  width: 100%;
  background: rgb(34, 34, 34);
  min-height: 81.5vh;
}
.show {
  width: 50%;
  height: 100%;
}
.image {
  width: 90%;
  height: 350px;
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);}

.copy {
  font-size: 15px;
  color: grey;
}
.day {
  margin-right: 100px !important;
}
.time {
  margin-right: 20px;
}
.clock {
  margin-top: 5px;
}
.info{
  border: none;
}
.hold,.num{
  color: white;
}

</style>
