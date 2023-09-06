<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openModal(vehicle.vehicleID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + vehicle.prodID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + vehicle.prodID"
      tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + vehicle.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog bg-dark">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edit Vehicle
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-dark">
            <label>Vehicle name:</label>
            <input
              placeholder="name"
              type="text"
              v-model="updateVehicle.vehicleName"
            />
            <label>brand:</label>
            <input
              placeholder="BRAND"
              type="TEXT"
              v-model="updateVehicle.brand"
            />
            <label>quantity:</label>
            <input
              placeholder="quantity"
              type="number"
              v-model="updateVehicle.inventory"
            />
            <label>rating:</label>
            <input
              placeholder="rating"
              type="number"
              v-model="updateVehicle.rating"
            />
            <label>model:</label>
            <input
              placeholder="year"
              type="text"
              v-model="updateVehicle.year"
            />
            <label>Vehicle image:</label>
            <input
              placeholder="image"
              type="text"
              v-model="updateVehicle.imageURL"
            />
            <label>category:</label>
            <input
              placeholder="category"
              type="text"
              v-model="updateVehicle.category" 
            />
            <label>rate:</label>
            <input
              placeholder="price/h"
              type="text"
              v-model="updateVehicle.rate"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateCar(vehicle.vehicleID)"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vehicle"],
  data() {
    return {
      updateVehicle: {
        ...this.vehicle,
      },
      updateVehicleID: null,
      model: {
        vehicle: {
          vehicleName: "",
          brand: "",
          inventory: "",
          rating: "",
          year: "",
          imageURL: "",
          category: "",
          rate: "",
        },
      },
    };
  },
  computed: {
    currentVehicle() {
      return this.$store.state.vehicle;
    },
  },
  methods: {
    openModal(vehicleID) {
      this.updateVehicleID = vehicleID;
      this.updateVehicle = {
        ...this.$store.state.vehicles.find(
          (vehicle) => vehicle.vehicleID === vehicleID
        ),
      };
    },
    updateCar(vehicleID) {
      this.$store
        .dispatch("updateVehicle", {
          vehicleID: vehicleID,
          ...this.updateVehicle,
        })
        .then(() => {
          console.log("Vehicle record updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
    },
  },
};
</script>

<style scoped>
.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  color: black;
  box-shadow: 4px 4px black;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
}
</style>
