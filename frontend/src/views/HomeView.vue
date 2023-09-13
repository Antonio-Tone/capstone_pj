<template>
<div class="main">
  
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
  }
}
</script>
