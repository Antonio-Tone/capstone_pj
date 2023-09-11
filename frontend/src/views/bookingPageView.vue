<template>
  <div class="row">
    <div class="col-6">
      <div class="single-vehicle" v-for="car in vehicle" :key="car.vehicleID">
        <h1>{{ car.vehicleName }}</h1>
      </div>
    </div>
    <div class="col-6">
      <form @submit.prevent="book(car.vehicleID)">
        <input type="date" v-model="booking.orderDate" required />
        <input type="time" v-model="booking.fromTime" required id="from" />
        <input type="time" v-model="booking.toTime" required id="to" />
        <button type="submit" class="btn btn-primary">PAY</button>
        <button @click="check">Press</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],

  computed: {
    vehicle() {
      return this.$store.state.vehicle;
    },
  },
  data() {
    return {
      booking: {
        userID: "",
        vehicleID: "", // You might want to set this based on the passed car prop
        orderDate: "",
        toTime: "",
        fromTime: "",
      },
    };
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
    },
  },
  // ...
};
</script>
