<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Vehicles">Vehicles</router-link>
   <router-link to="/Login">Login</router-link>
    <router-link to="/Register">Register</router-link>
    <router-link to="/Admin">Admin</router-link>
    
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44, 62, 80);
background: rgb(33, 33, 33) !important;
  min-height: 100vh;
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
</style>
