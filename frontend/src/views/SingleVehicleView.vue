<template>
    <div class="single-vehicle" v-for="car in vehicle" :key="car.vehicleID">
        <h1>{{ car.vehicleName }}</h1>
        <button class="btn btn-success" @click="addToWishlist(car)">Add to Wishlist</button>
        <p v-if="isInWishlist(car)">Already in Wishlist</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        vehicle() {
            return this.$store.state.vehicle;
        }
    },
    mounted() {
        this.$store.dispatch("fetchVehicle", this.id);
    },
    methods: {
        addToWishlist(car) {
            const data = JSON.parse(localStorage.getItem("Data"))
            const array = JSON.parse(localStorage.getItem("Wishlist")) || [];
            const newItemId = car.vehicleID;
            console.log(newItemId)
            let newCar = {userID: data.userID, ...car}
            if (!this.isInWishlist(newCar)) {
                array.push(newCar);
                localStorage.setItem("Wishlist", JSON.stringify(array));
                
            } else {
                
            }
        },
        isInWishlist(car) {
            const array = JSON.parse(localStorage.getItem("Wishlist")) || [];
            return array.some(item => item.vehicleID === car.vehicleID);
        }
    }
}
</script>

<style>
    
</style>
