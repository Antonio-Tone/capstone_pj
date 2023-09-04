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
      <div class="modal-dialog">
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
            <label for="productname">Vehicle Name:</label>
            <input
              required
              id="vehicleName"
              placeholder="vehicle Name"
              type="text"
              v-model="model.car.vehicleName"
            />
            <label for="Brand">BRAND:</label>
            <input
              required
              id="brand"
              placeholder="brand"
              type="number"
              v-model="model.car.brand"
            />
            <label for="STOCK">QUANTITY:</label>
            <input
              required
              id="stock"
              placeholder="quantity"
              type="text"
              v-model="model.car.inventory"
            />
            <label for="rating">RATING:</label>
            <input
              required
              id="rating"
              placeholder="rating"
              type="number"
              v-model="model.car.rating"
            />
            <label for="speed">SPEED</label>
            <input
              required
              id="speed"
              placeholder="max speed"
              type="text"
              v-model="model.car.speed"
            />
           
            <label for="imageUrl">vehicle Image:</label>
            <input
              required
              id="imageUrl"
              placeholder="Vehicle image"
              type="text"
              v-model="model.car.vehicleURL"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn" @click="createProduct">
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
        product: {
          prodName: "",
          quantity: "",
          price: "",
          category: "",
          prodDesc: "",
          prodUrl: "",
        },
      },
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("createProduct", this.model.product);
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