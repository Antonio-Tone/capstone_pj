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
<<<<<<< HEAD
            <td>             
            </td>
            <td>
              <updateUser :user="user" /><button
=======
            <td>
              <updateUser :user="user" @userUpdated="refreshUsers" />
              <button
>>>>>>> f03033efdfc94bcca52cc1ee10929fb2de1d06f7
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
<<<<<<< HEAD
import addUser from"../components/addUserComp.vue";
export default {
     components:{
Spinner,
addUser
=======
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
>>>>>>> f03033efdfc94bcca52cc1ee10929fb2de1d06f7
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
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
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
