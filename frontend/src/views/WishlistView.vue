<template>
         <div class="main">
            <table class="table-responsive">
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
import Swal from "sweetalert2";
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
            Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to remove this vehicle from your wishlist.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, proceed!',
        cancelButtonText: 'No, cancel',
      }).then((result) => {
        if (result.isConfirmed) {
         const indexToRemove = this.wishlist.findIndex(item => item.vehicleID === vehicleID)
            if (indexToRemove !== -1) {

                    this.wishlist.splice(indexToRemove, 1);
        
                    localStorage.setItem(`Wishlist-${this.data.userID}`, JSON.stringify(this.wishlist));
                }
          
        } else {
          console.log("Action canceled");
          window.location.reload()

        }
      });
            
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
    .main{
        min-height: 100vh;
    }
</style>