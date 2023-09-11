<template>
  <div class="row">
    <div class="col-6 show">
      <div class="single-vehicle">
        <h1>{{ vehicle.vehicleName }}</h1>
        <img class="image mb-3" :src="vehicle.imageURL" alt="" />
        <h3>TONY'S LUX RENTALS</h3>
          <h4>DRIVE IN STYLE</h4>
          <p>©COPYRIGHTS RESERVED BY ANTONIO TONE</p>
      </div>
    </div>
    <div class="col-6">
      <h1 class="mb-5"> CHECKOUT</h1>
      <form @submit.prevent="book">
        <div class="d-flex justify-content-center mx-auto">
          <span><p class="m-3">DATE:</p></span>
        <input type="date" v-model="booking.orderDate" required />
        </div>
        <br/>
        <div class="d-flex justify-content-center mx-auto">
          <input type="time" class="m-3" v-model="booking.fromTime" required id="from" />
        <span><p class="mt-3 ">TO</p></span>
        <input type="time" class="m-3" v-model="booking.toTime" required id="to" />
        </div>
        <button type="submit" class="btn btn-primary position-bottom-fixed">PAY</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carId"], 

  computed: {
    vehicle() {
      return this.$store.state.viewedVehicle; 
    },
  },
  data() {
    return {
      booking: {
        userID: "",
        vehicleID: "",
        orderDate: "",
        toTime: "",
        fromTime: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchVehicle", this.carId);
  },
  methods: {
    book() {
      const from = document.querySelector("#from");
      const to = document.querySelector("#to");
      const fromVal = from.value;
      const toVal = to.value;

      const fromTimes = fromVal.split(":");
      const toTimes = toVal.split(":");
      const fromMin = parseInt(fromTimes[0] * 60 + parseInt(fromTimes[1]));
      const toMin = parseInt(toTimes[0] * 60 + parseInt(toTimes[1]));
      const timeDiff = fromMin - toMin;
      const finalVal = Math.ceil(timeDiff / 60 * -1)
      console.log(finalVal)
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
</style>
