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
            </tr>
        </tbody>
       </table>
         </div>
</template>
<script>
export default {
    computed: {
        wishlist() {
            const data = JSON.parse(localStorage.getItem("Data"))
            const array = JSON.parse(localStorage.getItem("Wishlist")) || [];
            let fileteredArray = array.filter((wishlist) => wishlist.userID === data.userID)
            console.log(fileteredArray);
            return fileteredArray;
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