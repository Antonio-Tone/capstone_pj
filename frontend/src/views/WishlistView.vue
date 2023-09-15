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
                <td>R{{ item.rate }}</td>
                <td class="my-auto">
                    <button @click="deleteCar(item.vehicleID)" class="btn btn-danger" >Delete</button>
                    <button class="btn btn-success m-2" @click="direct(item.vehicleID)" >View</button>
                </td>
            </tr>
        </tbody>``
       </table>
         </div>
</template>
<script>
import router from "../router";
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
        
                    localStorage.setItem(`Wishlist-${this.data.userID}`, JSON.stringify(this.wishlist));localStorage.setItem(`Wishlist-${this.data.userID}`, JSON.stringify(this.wishlist));
                }
          
        } else {
          console.log("Action canceled");
          window.location.reload()

        }
      });
            
        },
        direct(vehicleID){
            router.push(`/vehicle/${vehicleID}`)
        }
    }
}
</script>
<style scoped>
    .image {
        height: 180px;
        border-radius: 20px;
        /* position: center !important; */
    }
    .main{
        min-height: 78.9vh;
    }
    table {
        margin-top: 15px;
        width: 100%;
        min-height: 50vh !important;
    }
    tr,td{
        border: 1px solid black;
    }
</style>