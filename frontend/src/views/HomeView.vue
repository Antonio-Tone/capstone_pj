<template>
<div class="main">
  <img src="https://i.postimg.cc/VkYnkbLS/Rolls-Royce-Cullinan-Open-Door-1600x900.jpg" class="d-block home" alt="...">
  <div class="text">
 <h4 class="animated animate__fadeInDown text-dark" style="animation-delay: 3s;"  >Welcome to Tony's Lux Rental's</h4>
 <p class="animated animate__fadeIn text-dark" style="animation-delay: 4s;" >Where you drive in style!</p>
<button class="animated animate__fadeInUp btn z-1" style="animation-delay: 3s;" @click="navigateToShowroom">Showroom</button>
 </div>
            
  
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed:{
    user(){
      const user = this.$store.state.user
      return user
    }
  },
  mounted(){
    if(!this.user){
      this.$router.push('/login')
    }
  },
  methods: {
     navigateToShowroom() {
      this.$router.push({ path: "/Vehicles" });
    },
  },
}
</script>
<style scoped>
.main{
    width: 100%;
    
}

.home{
 position: absolute !important;
 width: 100% !important;
 height: 600px !important;
}

.text{ 
  position: relative;
  padding-top: 30rem;
}

</style>