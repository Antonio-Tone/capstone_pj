<template >
    <div>
      <button @click="navigateToUsers">users</button>
    <!-- <h1>Users</h1>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>surname</th>
            <th>age</th>
            <th>gender</th>
            <th>role</th>
            <th>email address</th>
            <th>Action</th>
          </tr>
          
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.userName}}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <img
                :src="user.userProfile"
                :alt="user.firstName"
                loading="lazy"
                class="img-fluid image"
              />
            </td>
            <td>
              <updateUser :user="user" /><button
                class="btn"
                @click="deleteUser(user.userID)"
              >
                delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
    </div> -->
          <h1>vehicles</h1>
    <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>VIN</th>
              <th>NAME</th>
              <th>BRAND</th>
              <th>INVENTORY</th>
              <th>RATING</th>
              <th>MODEL</th>
              <th>IMAGE</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="car in vehicles" :key="car.vehicleID">
            <tr v-if="car">
              <td>{{ car.vehicleID}}</td>
              <td>{{ car.vehicleName}}</td>
              <td>{{ car.brand }}</td>
              <td>{{ car.inventory}}</td>
              <td>{{ car.rating}}</td>
              <td>{{ car.year}}</td>
              <td>{{ car.imageURL}}</td>
              
              
              <td>
                <img
                  :src="car.imageURL"
                  :alt="car.hoveredURL"
                  class="img-fluid image"
                  loading="lazy"
                />
              </td>
              <td>
                <!-- <updateVehicle :vehicle="vehicle" /> -->
                <button @click="deleteVehicle(car.vehicleID)" class="btn">
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
    
</template>
<script>
import Spinner from "../components/SpinnerComp.vue";
export default { 
  components:{
Spinner
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
     vehicles() {
      return this.$store.state.vehicles;
    }
  },
  methods: {
     navigateToUsers() {
       this.$router.push({ path:"/Users" })},
    viewUser(userID) {
      const chosenUser = this.users.find(
        (user) => user.userID === userID
      );
      this.$store.commit("setUser", chosenUser);
      this.$router.push({ name: "User", params: { userID: userID } });
    },
    viewVehicle(vehicleID) {
      const chosenVehicle = this.vehicles.find(
        (vehicle) => vehicle.vehicleID === vehicleID
      );
      this.$store.commit("setSingleVehicle", chosenVehicle);
      this.$router.push({ name: "Vehicle", params: { vehicleID: vehicleID } });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchVehicles");
  },
}
</script>
<style>
th,td,.btn{
  color: white;
}
    
</style>