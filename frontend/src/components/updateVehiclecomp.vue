<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openModal(car.vehicleID)"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + updatedVehicleID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + updatedVehicleID"
      tabindex="-1"
      :aria-labelledby="'exampleModalLabel' + updatedVehicleID"
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
              v-model="updated.vehicleName"
            />
            <label>brand:</label>
            <input
              placeholder="BRAND"
              type="TEXT"
              v-model="updated.brand"
            />
            <label>quantity:</label>
            <input
              placeholder="quantity"
              type="number"
              v-model="updated.inventory"
            />
            <label>rating:</label>
            <input
              placeholder="rating"
              type="number"
              v-model="updated.rating"
            />
            <label>model:</label>
            <input
              placeholder="year"
              type="text"
              v-model="updated.year"
            />
            <label>Vehicle image:</label>
            <input
              placeholder="image"
              type="text"
              v-model="updated.imageURL"
            />
            <label>category:</label>
            <input
              placeholder="category"
              type="text"
              v-model="updated.category" 
            />
            <label>rate:</label>
            <input
              placeholder="price/h"
              type="text"
              v-model="updated.rate"
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
              @click="updateCar(car.vehicleID)"
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
  props: ["car"],
  data() {
    return {
      updated: {
        ...this.car,
      },
      updatedVehicleID: null,
      model: {
        car: {
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
      console.log(vehicleID, "id was found")
      this.updatedVehicleID = vehicleID;
      this.updated = {
        ...this.$store.state.vehicles.find(
          (car) => car.vehicleID === vehicleID
        ),
      };
    },
    updateCar() {
  const vehicleID = this.updatedVehicleID;
  this.$store
    .dispatch("updateVehicle", {
      vehicleID: vehicleID,
      ...this.updated,
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
