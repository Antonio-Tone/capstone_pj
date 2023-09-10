<template>
    <div class="row">
        <div class="col-6">
        <div class="single-vehicle" v-for="car in vehicle" :key="car.vehicleID">
        <h1>{{ car.vehicleName }}</h1>
    </div>
    </div>
    <div class="col-6">
        <form @submit.prevent="book(booking)">
            <input type="date" v-model="booking.orderDate" required>
            <input type="time" v-model="booking.fromTime" required>
            <input type="time" v-model="booking.toTime" required>
            <button type="submit" class="btn btn-primary">PAY</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            booking: {
                userID: "",
                vehicleID: "",
                orderDate: "",
                toTime: "",
                fromTime: ""
            }
        }
    },
    computed: {
        vehicle() {
            return this.$store.state.vehicle;
        }
    },
    mounted() {
        this.$store.dispatch('fetchVehicle');
    },
    methods: {
        book(){
            const data = JSON.parse(localStorage.getItem("Data"));
            this.booking.userID  = data.userID
            this.booking.vehicleID =  this.$store.state.vehicle.vehicleID;
            console.log(this.booking)
            
            // this.$store.dispatch('bookVehicle', this.booking);
        }
    }
}
</script>