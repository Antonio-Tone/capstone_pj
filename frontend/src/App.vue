<template>
<div>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
 </div>
</template>



<style>
#app {
  font-family: 'Poltawski Nowy', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);}


</style>

<script>
  import NavBarComp from './components/nabarComp.vue';
  import FooterComp from './components/FooterComp.vue';
export default {
   components: {
    NavBarComp,
    FooterComp
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
