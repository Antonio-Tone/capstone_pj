<template>
  <div>
    <form
      @submit.prevent="registering"
      class="d-flex justify-content-center mx-auto register"
    > 
      <div class="name">
        <label for="name" class="lead">Name</label><br>
        <input type="text" class="enter" required v-model="register.userName" />
      </div>
      <div class="">
        <label for="last Name" class="lead">Last Name</label><br>
        <input type="text" class="enter" required v-model="register.lastName" />
      </div>
      <div class="">
        <label for="gender" class="lead">Gender</label><br>
        <input type="text" class="enter" required v-model="register.gender" />
      </div>
      <div class="">
        <label for="age" class="lead">Age</label><br>
        <input type="number" class="enter" required v-model="register.age" />
      </div>
      <div class="">
        <label for="email" class="lead">Email</label><br>
        <input type="email" class="enter" required v-model="register.emailAdd" />
      </div>
      <div class="">
        <label for="password" class="lead">Password</label><br>
        <input type="password" class="enter" required v-model="register.userPass" />
      </div>
      <div class="">
        <button type="submit" class="style">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        userName: "",
        lastName: "",
        gender: "",
        age: "",
        emailAdd: "",
        userPass: "",
      },
    };
  },

  methods: {
    async registering() {
      console.log(this.register);
      await this.$store.dispatch("registerUser", this.register);
    },
  },
};
</script>

<style scoped>
.register {
  padding-top: 2.4rem;
  width: 40% !important;
  min-height: 79vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.lead {
  color: rgb(228, 212, 134) !important;
}

.enter {
  background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);
  border-color: white;
  border-radius: 30px;
  color: rgb(228, 212, 134);
  text-align: center;
}

.style {
  background: rgb(34, 34, 34);
  color: white;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  border-radius: 10px;
  margin: 5px;
}

.style:hover {
  padding: 5px 8px 5px 8px;
  background: rgb(228, 212, 134);
  box-shadow: 0 0 30px 5px rgb(228, 212, 134);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  color: rgb(34, 34, 34);
}

label {
  color: white;
}

/* Media Query for screens up to 250px width */
@media (max-width: 250px) {
  .register {
    width: 100%; 
    padding: 1rem; 
  }
  
  .enter {
    font-size: 16px;
    padding: 5px 10px;
  }
}
</style>
