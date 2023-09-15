<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <p class="name">TONY'S LUX RENTAL'S</p>
        <button class="navbar-toggler btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon btn-warning"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div v-if="user" class="offcanvas-header profile">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img :src="user.userImage" alt="pic" loading="lazy">
            </h5>
            <p class="text-white mx-auto justify-content-center">{{user.userName}}  {{user.lastName}}</p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav my-auto align-items-center mt-5 pe-3">
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link to="/" >Home</router-link>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="user">
                  <router-link to="/Vehicles" class="navButtons"
                    >vehicles</router-link
                  >
                  </div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="user">
                  <router-link to="/wishlist" class="navButtons"
                  >Wishlist</router-link
                >
                </div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link to="/about" class="navButtons"
                >About</router-link
              >
              </li> 
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <router-link to="/contact" class="navButtons"
            >Contact</router-link
          >
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                   <div v-if="user">
            <router-link to="/profile" class="navButtons"
            >my Profile</router-link
          >
              </div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="!user">
                  <router-link to="/login" class="navButtons"
                    >login</router-link
                  ></div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="!user">
                  <router-link to="/Register" class="navButtons"
                  >register</router-link
                >
                </div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="user">
                  <button type="button" class="btn bg-dark text-white" @click="exit">
                  Logout
                </button>
                </div>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <div v-if="user && user.userRole === 'admin'">
                  <router-link to="/admin" class="navButtons"
                    >Admin</router-link
                  >
                  </div>
              </li>
             </ul>
             
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
nav{
background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
  color: white;
  height: 5rem;
}
.nav-item{
margin-bottom: 3rem;
}

img{
  height:3.5rem ;
width:3rem;
border-radius:50px;
margin-right: 10px;
}

.offcanvas-body{
background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
padding: 0 !important;
}
.profile{
background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
width: 100% !important;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media  (max-width: 350px){
.name{
  display: none;
}

}
.btn{
  background-color: rgb(68,85,100) !important;
}
  


</style>


<script>
// import { mapState } from 'vuex';
export default {

  computed:{
      user() {
    return this.$store.state.user;
  },
      exit(){
        this.$store.dispatch("Confirm");
       
      }
  
  }
}
</script>