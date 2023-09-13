<template>
<div>
  <NavBarComp/>
 <router-view/>
 </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44, 62, 80);
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
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

<script>
  import NavBarComp from './components/nabarComp.vue';
export default {
   components: {
    NavBarComp
  },
  computed: {
    user(){
      const user = this.$store.state.user
      console.log(user)
      return user
    }
  },
  
};
</script>
