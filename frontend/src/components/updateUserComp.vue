<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label>userID:</label>
            <input type="text" placeholder="ID" v-model="updateUser.userID" />
            <label>first name:</label>
            <input
              type="text"
              placeholder="first name"
              v-model="updateUser.userName"
            />
            <label>last name:</label>
            <input
              type="text"
              placeholder="last name"
              v-model="updateUser.lastName"
            />
            <label>gender:</label>
            <input
              type="number"
              placeholder="gender"
              v-model="updateUser.gender"
            />
            <label>age:</label>
            <input
              type="text"
              placeholder="age"
              v-model="updateUser.age"
            />
            <label>email address:</label>
            <input
              type="text"
              placeholder="email address"
              v-model="updateUser.emailAdd"
            />
            <label>password:</label>
            <input
              type="password"
              placeholder="password"
              v-model="updateUser.userPass"
            />
            <label>Role:</label>
            <input
              type="text"
              placeholder="user role"
              v-model="updateUser.userRole"
            />
            <!-- <label>user profile:</label>
            <input
              type="text"
              placeholder="profile image"
              v-model="editingUser.userProfile"
            /> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="update(user.userID)"
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
  props: ["user"],
  data() {
    return {
      updateUser: {
        ...this.user,
      },
      updateUserID: null,
      model: {
        user: {
          firstName: "",
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
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openModal(id) {
      console.log("reached");
      this.updateUserID = id;
      this.updateUser = {
        ...this.$store.state.users.find((user) => user.userID === id),
      };
    },
    update(id) {
      this.$store
        .dispatch("updateUser", {
          userID: id,
          data: { ...this.updateUser },
        })
        .then(() => {
          console.log("User updated!");
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