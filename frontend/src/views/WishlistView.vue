<template>
         <div class="">
            <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name:</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in wishlist" :key="item.vehicleID">
                <td><img class="image" :src="item.imageURL" alt=""></td>
                <td>{{ item.vehicleName }}</td>
                <td>{{ item.rate }}</td>
                <td class="d-flex gap-2">
                    <button @click="deleteCar(item.vehicleID)" class="btn btn-danger" >Delete</button>
                    <button class="btn btn-success">Book now</button>
                </td>
            </tr>
        </tbody>
       </table>
         </div>
</template>
<script>
export default {
    data() {
        return {
            data: '',
            wishlist: []
        }
    },
    mounted() {
        this.data = JSON.parse(localStorage.getItem("Data"))
        this.wishlist = JSON.parse(localStorage.getItem(`Wishlist-${this.data.userID}`)) || [];
    },
    computed: {
        wishlist() {
            let fileteredArray = this.wishlist.filter((wishlist) => wishlist.userID === this.data.userID)
            console.log(fileteredArray);
            return fileteredArray;
        }
    },
    methods: {
        deleteCar(vehicleID) {
            console.log(vehicleID)
            const indexToRemove = this.wishlist.findIndex(item => item.vehicleID === vehicleID)
            if (indexToRemove !== -1) {

                    this.wishlist.splice(indexToRemove, 1);
        
                    localStorage.setItem(`Wishlist-${this.data.userID}`, JSON.stringify(this.wishlist));
                }
        }
    }
}
</script>
<style scoped>
    .image {
        height: 80px;
        border-radius: 20px;
        position: center !important;
    }
</style>