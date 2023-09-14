<template>
  <div class="row">
    <div class="col-6 d-flex my-auto align-item-center justify-content-center">
      <img class="pic" :src="user.userImage" alt="" />
    </div>
    <div class="col-6 my-auto align-item-center">
      <h1 class="mx-auto d-flex justify-content-center mt-5">MY PROFILE</h1>
      <div class="user">
        <ul class="">
          <il
            ><label for="">NAME:</label> {{ user.userName }}
            {{ user.lastName }}</il
          >
          <il><label for="">GENDER:</label> {{ user.gender }}</il>
          <il><label for="">AGE:</label>{{ user.age }}</il>
          <il><label for="">EMAIL:</label>{{ user.emailAdd }}</il>
        </ul>
        <updateUser :user="user" @userUpdated="refreshUsers" />
        <button class="btn btn-danger" @click="deleteUser(user.userID)">delete account</button>
      </div>
    </div>
  </div>
</template>

<script>
import updateUser from "../components/editUserComp.vue";
export default {
  props: ["userID"],
  components: {
    updateUser,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    refreshUser() {
      this.$store
        .dispatch("fetchUser")
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
    this.$store.dispatch("fetchUser");
    if (localStorage.getItem("cresult")) {
      const cresult = JSON.parse(localStorage.getItem("cresult"));
      this.$store.commit("setUserData", cresult);
    }
  },
};
</script>
<style scoped>
.row {
  width: 100%;
  min-height: 77vh !important;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start !important;
}
il {
  margin: 20px;
}
.pic {
  height: 250px;
  width: 260px;
}
</style>
