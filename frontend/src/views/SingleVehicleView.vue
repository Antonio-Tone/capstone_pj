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
    data() {
        return {
            data: null, // Initialize data as null
            wishlist: [], // Initialize wishlist as an empty array
        };
    },
    mounted() {
        this.data = JSON.parse(localStorage.getItem("Data"));
        this.loadWishlist();
        this.$store.dispatch("fetchVehicle", this.id);
    },
    methods: {
        addToWishlist(car) {
            console.log(this.wishlist)
            if (this.data && car) {
                const newCar = { userID: this.data.userID, ...car };
                if (!this.isInWishlist(car)) {
                    this.wishlist.push(newCar);
                    localStorage.setItem(`Wishlist-${this.data.userID}`, JSON.stringify(this.wishlist));
                } else {
                    console.error("Item already in wishlist or user ID exists in wishlist.");
                }
            } else {
                console.error("Data or car is missing.");
            }
        },
        isInWishlist(car) {
            return this.wishlist.some(item => item.vehicleID === car.vehicleID);
        },
        // isUserIDIn() {
        //     return this.wishlist.some(item => item.userID === this.data.userID);
        // },
        loadWishlist() {
            if (this.data) {
                this.wishlist = JSON.parse(localStorage.getItem(`Wishlist-${this.data.userID}`)) || [];
            }
        },
    },
};
</script>

<style>
    
</style>
