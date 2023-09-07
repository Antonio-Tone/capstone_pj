<template>
    <div>
      <button @click="navigateToCars">Vehicles</button>
        <h1>Users</h1>
<createUser/>
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
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
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
        
    </div>
    </div>
</template>
<script>
import Spinner from "../components/SpinnerComp.vue";
import createUser from "../components/addUserComp.vue";
import updateUser from "../components/editUserComp.vue"
export default {
     components:{
Spinner,
createUser,
updateUser,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
},
methods: {
   navigateToCars() {
      
      this.$router.push({ path: '/Admin' })},

    viewUser(userID) {
      const chosenUser = this.users.find(
        (user) => user.userID === userID
      );
      this.$store.commit("setUser", chosenUser);
      this.$router.push({ name: "User", params: { userID: userID } });
}
},
  mounted() {
    this.$store.dispatch("fetchUsers");
    
  },


}
</script>
<style >
    th,td,.btn{
  color: white;
}
</style>