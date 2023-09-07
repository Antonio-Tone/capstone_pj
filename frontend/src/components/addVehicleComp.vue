<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal1"
    >
      add vehicle
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog bg-dark">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New Vehicle</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="name">Vehicle Name:</label>
            <input
              required
              id="name"
              placeholder="vehicle Name"
              type="text"
              v-model="model.vehicle.vehicleName"
            />
            <label for="Brand">BRAND:</label>
            <input
              required
              id="brand"
              placeholder="brand"
              type="text"
              v-model="model.vehicle.brand"
            />
            <label for="stock">QUANTITY:</label>
            <input
              required
              id="stock"
              placeholder="quantity"
              type="number"
              v-model="model.vehicle.inventory"
            />
            <label for="rating">RATING:</label>
            <input
              required
              id="rating"
              placeholder="rating"
              type="number"
              v-model="model.vehicle.rating"
            />
            <label for="speed">SPEED</label>
            <input
              required
              id="speed"
              placeholder="max speed"
              type="number"
              v-model="model.vehicle.speed"
            />
           
            <label for="Model">model:</label>
            <input
              required
              id="year"
              placeholder="year"
              type="text"
              v-model="model.vehicle.year"
            />
            <label for="imageUrl">vehicle Image:</label>
            <input
              required
              id="imageUrl"
              placeholder="Vehicle image"
              type="text"
              v-model="model.vehicle.imageURL"
            />
            <label for="category">category:</label>
            <input
              required
              id="category"
              placeholder="suv/lux/supercar"
              type="text"
              v-model="model.vehicle.category"
            />
            <label for="rate">rate:</label>
            <input
              required
              id="rate"
              placeholder="price/h"
              type="number"
              v-model="model.vehicle.rate"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-dark" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn bg-dark" @click="createVehicle">
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
  data() {
    return {
      model: {
        vehicle: {
          vehicleName: "",
          brand: "",
          inventory: "",
          rating: "",
          speed: "",
          year: "",
          imageURL: "",
          category: "",
          rate: "",
        },
      },
    };
  },
  methods: {
    createVehicle() {
      this.$store.dispatch("addVehicle", this.model.vehicle);
    },
  },
};
</script>

<style scoped>
.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  box-shadow: 4px 4px black;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
}
</style>