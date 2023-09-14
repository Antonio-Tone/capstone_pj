<template>
  <div class="row">
    <div class="col-6 show">
      <div class="single-vehicle">
        <h1>{{ vehicle.vehicleName }}</h1>
        <img class="image mb-3" :src="vehicle.imageURL" alt="" />
        <h3>TONY'S LUX RENTALS</h3>
          <h4>DRIVE IN STYLE</h4>
          <!-- <p>©COPYRIGHTS RESERVED BY ANTONIO TONE</p> -->
      </div>
    </div>
    <div class="col-6">
      <h1 class="mb-5"> CHECKOUT</h1>
      <form @submit.prevent="placeOrder">
        <div class="d-flex justify-content-center mx-auto">
          <span><p class="m-3">DATE:</p></span>
        <input type="date" v-model="booking.orderDate" id="date" required />
        </div>
        <br/>
        <div class="d-flex justify-content-center mx-auto">
          <input type="time" class="m-3" v-model="booking.Total_Booked_Hours" required id="from" />
        <span><p class="mt-3 ">TO</p></span>
        <input type="time" class="m-3" required id="to" />
        </div>  
        <button type="submit" class="btn btn-primary position-bottom-fixed" >PAY</button>
        <button type="reset">clear</button>
      </form> 
      <div class="">
        <label for="">CARD HOLDER NAME:</label>
        <input type="text" placeholder="NAME" required>
      </div>    
      <div class="">
        <label for="">CARD NUMBER:</label>
        <input type="number" placeholder="Card Number" required>
      </div>    
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
    user(){
      return this.$store.state.user;
    }
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
  const finalVal = Math.ceil(timeDiff / 60 * -1);
  this.booking.Total_Booked_Hours = finalVal;
  this.booking.orderDate = booked;

},

    placeOrder(){
      this.book();
      this.booking.userID= this.$store.state.user.userID;
      this.booking.vehicleID = this.carId;
      this.$store.dispatch("addOrder", this.booking);
       Swal.fire({
         icon: "success",
         title: "Booking has been placed successfully",
         text: `Our team will get in contact with you soon, ${this.$store.state.user.userName}.`,
          });
        router.push("/Vehicles")

    }
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
