<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img
            src="https://i.postimg.cc/NMcMDYy1/Typography-Initial-Letter-Brand-Logo.png"
            alt="Logo"
            class="navImage"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="navButtons">Home</router-link>
            <div v-if="user">
              <router-link to="/Vehicles" class="navButtons"
                >vehicles</router-link
              >
            </div>
            <router-link to="/about" class="navButtons">About</router-link>

            <router-link to="/contact" class="navButtons">Contact</router-link>
            <router-link to="/wishlist" class="navButtons"
              >My Wishlist</router-link
            >
            <div v-if="user && user.userRole === 'user'">
              <router-link to="/profile" class="navButtons"
                >My Profile</router-link
              >
            </div>
            <div v-if="!user">
              <router-link to="/login" class="navButtons">login</router-link>
            </div>
            <div v-if="!user">
              <router-link to="/Register" class="navButtons"
                >register</router-link
              >
            </div>
            <div v-if="user">
              <button
                type="button"
                class="btn bg-dark text-white"
                @click="exit"
              >
                Logout
              </button>
            </div>
            <div v-if="user && user.userRole === 'admin'">
              <router-link to="/admin" class="navButtons">Admin</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
nav {
  background-color: #1b1717 !important;
  margin-bottom: 20px;
}
.navImage {
  height: 60px;
  width: 60px;
}
.navbar-nav {
  margin-left: auto;
}
.navButtons {
  margin-right: 20px;
  color: #eeebdd;
}

a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  border-bottom: 2px solid #ce1212;
}
</style>

<script>
// import { mapState } from 'vuex';
export default {
  computed: {
    user() {
      const user = this.$store.state.user;
      return user;
    },
    exit() {
      this.$store.dispatch("Confirm");
    },
  },
};
</script>
