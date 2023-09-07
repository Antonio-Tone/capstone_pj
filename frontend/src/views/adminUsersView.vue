<template>
  <div>
    <button @click="navigateToCars">Vehicles</button>
    <h1>Users</h1>
    <createUser @userCreated="refreshUsers" />
    <div class="table-responsive">
      <addUser/>
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
            <td>{{ user.userName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <updateUser :user="user" @userUpdated="refreshUsers" />
              <button
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
    </div>
  </div>
</template>
<script>
import Spinner from "../components/SpinnerComp.vue";
import createUser from "../components/addUserComp.vue";
import updateUser from "../components/editUserComp.vue";
export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    Spinner,
    createUser,
    updateUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.refreshUsers();
  },
  methods: {
    navigateToCars() {
      this.$router.push({ path: "/Admin" });
    },
    refreshUsers() {
      this.$store
        .dispatch("fetchUsers")
        .then(() => console.log("Reached successfully"));
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    viewUser(userID) {
      const chosenUser = this.users.find((user) => user.userID === userID);
      this.$store.commit("setUser", chosenUser);
      this.$router.push({ name: "User", params: { userID: userID } });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
<style>
th,
td,
.btn {
  color: white;
}
</style>
