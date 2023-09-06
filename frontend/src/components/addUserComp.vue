<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal3"
    >
      add user
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel1">New User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="firstName">First Name:</label>
            <input
              required
              id="firstName"
              type="text"
              placeholder="first name"
              v-model="model.user.userName"
            />
            <label for="lastName">Last Name:</label>
            <input
              required
              id="lastName"
              type="text"
              placeholder="last name"
              v-model="model.user.lastName"
            />
            <label for="gender">GENDER:</label>
            <input
              required
              id="gender"
              type="number"
              placeholder="gender"
              v-model="model.user.gender"
            />
            <label for="age">AGE:</label>
            <input
              required
              id="age"
              type="text"
              placeholder="age"
              v-model="model.user.age"
            />
            <label for="email">EMAIL ADDRESS:</label>
            <input
              required
              id="email"
              type="text"
              placeholder="role"
              v-model="model.user.emailAdd"
            />
            <label for="password">PASSWORD</label>
            <input
              required
              id="password"
              type="password"
              placeholder="PASSWORD"
              v-model="model.user.userPass"
            />
            <label for="role">userRole:</label>
            <input
              required
              id="role"
              type="text"
              placeholder="userRole"
              v-model="model.user.userRole"
            />
            <!-- <label for="profilePic">Profile Image:</label>
            <input
              required
              id="profilePic"
              type="text"
              placeholder="profile image"
              v-model="model.user.userProfile"
            /> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn" @click="createUser">
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
      addingUserID: null,
      model: {
        user: {
          userName: "",
          lastName: "",
          gender: "",
          age: "",
          emailAdd: "",
          userPass: "",
          userRole: "",
          
        },
      },
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("registerUser", this.model.user);
      console.log(this.model.user);
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