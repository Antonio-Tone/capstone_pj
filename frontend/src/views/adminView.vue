<template>
  <div>
    <button @click="navigateToUsers">users</button>
    <h1>vehicles</h1>
    <createVehicle />
    <div class="table-responsive">
<<<<<<< HEAD
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
              
              
              
              <td>
                <img
                  :src="car.imageURL"
                  :alt="car.hoveredURL"
                  class="img-fluid image"
                  loading="lazy"
                />
              </td>
              <td>

                <button @click="deleteVehicle(car.vehicleID)" class="btn">
                  delete
                </button>
              
              </td>
            </tr>
            <tr v-else>
            <Spinner />
          </tr>
          </tbody>
        </table>
=======
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
            <td>{{ car.vehicleID }}</td>
            <td>{{ car.vehicleName }}</td>
            <td>{{ car.brand }}</td>
            <td>{{ car.inventory }}</td>
            <td>{{ car.rating }}</td>
            <td>{{ car.year }}</td>

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
              <updateCar/>
            </td>
          </tr>
        </tbody>
      </table>
>>>>>>> f03033efdfc94bcca52cc1ee10929fb2de1d06f7
    </div>
  </div>
</template>
<script>
import Spinner from "../components/SpinnerComp.vue";
import createVehicle from "../components/addVehicleComp.vue";
<<<<<<< HEAD
import createUser from "../components/addUserComp.vue";
import updateCar from "../components/updateVehiclecomp.vue";
import updateUser from "../components/updateUserComp.vue";
export default { 
  components:{
Spinner,
createVehicle,
createUser,
updateCar,
updateUser,
=======
import updateCar from "../components/updateVehiclecomp.vue";

export default {
  components: {
    Spinner,
    createVehicle,
    updateCar,
>>>>>>> f03033efdfc94bcca52cc1ee10929fb2de1d06f7
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    },
<<<<<<< HEAD
     vehicles() {
      return this.$store.state.vehicles || [];
    },
    vehicle() {
      return this.$store.state.vehicle || [];
    },
    user() {
      return this.$store.state.user || [];
=======
    vehicles() {
      return this.$store.state.vehicles;
>>>>>>> f03033efdfc94bcca52cc1ee10929fb2de1d06f7
    },
  },
  methods: {
    navigateToUsers() {
      this.$router.push({ path: "/Users" });
    },
    viewUser(userID) {
      const chosenUser = this.users.find((user) => user.userID === userID);
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
    deleteVehicle(vehicleID) {
      if (confirm("Are you sure you want to remove this vehicle?")) {
        this.$store.dispatch("deleteVehicle", vehicleID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
  },
  deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    }

},

  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchVehicles");
  },
};
</script>
<style>
th,
td,
.btn {
  color: white;
}
.image {
  height: 80px;
  border-radius: 20px;
  position: center !important;
}
</style>
