<template>
  <div class="main">
    <img
      src="https://i.postimg.cc/VkYnkbLS/Rolls-Royce-Cullinan-Open-Door-1600x900.jpg"
      class="d-block home"
      alt="..."
    />
    <div class="text">
      <h4 class="animated animate__fadeInDown head" style="animation-delay: 3s;">
        Welcome to Tony's Lux Rental's
      </h4>
      <p class="animated animate__fadeIn lead" style="animation-delay: 4s;">
        Where you drive in style!
      </p>
      <button
        class="animated animate__fadeInUp btn z-1"
        style="animation-delay: 3s;"
        @click="navigateToShowroom"
      >
        Showroom
      </button>
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
  computed: {
    user() {
      const user = this.$store.state.user
      return user
    }
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/login')
    }
  },
  methods: {
    navigateToShowroom() {
      this.$router.push({ path: '/Vehicles' })
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
}

.home {
  position: absolute !important;
  width: 100% !important;
  height: 620px !important;
  z-index: 0 !important;
}

.text {
  font-family: 'Poltawski Nowy', serif;
  position: relative;
  padding-top: 25rem;
}

.head {
  font-size: 45px;
  color: white;
}

.lead {
  font-size: 30px;
  color: white;
}

.btn {
  padding: 5px;
  background: rgb(2, 66, 126);
  color: white;
}

.btn:hover {
  transform: scale(1.05); 
  color: rgb(228, 212, 134);
}

/* Media Query for screens up to 250px width */
@media (max-width: 250px) {
  .text {
    padding-top: 10rem;
  }

  .head {
    font-size: 30px;
  }

  .lead {
    font-size: 20px; 
  }
  .text {
  position: relative;
  padding-top: 10rem !important;
}
}
</style>
