<template>
  <div>
    <form
      @submit.prevent="registering"
      class="d-flex justify-content-center mx-auto register"
    > 
      <div class="name">
        <label for="name">Name</label><br>
        <input type="text" required v-model="register.userName" />
      </div>
      <div class="">
        <label for="last Name">Last Name</label><br>
        <input type="text" required v-model="register.lastName" />
      </div>
      <div class="">
        <label for="gender">Gender</label><br>
        <input type="text" required v-model="register.gender" />
      </div>
      <div class="">
        <label for="age">Age</label><br>
        <input type="number" required v-model="register.age" />
      </div>
      <div class="">
      <label for="email">Email</label><br>
        <input type="email" required v-model="register.emailAdd" />
      </div>
      <div class="">
        <label for="password">password</label><br>
        <input type="password" required v-model="register.userPass" />
      </div>
      <div class="">
        <button type="submit">register</button>
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
<style>
.register{
  padding-top: 2.4rem;
        width: 40% !important;
        height: 60vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid red;
}

label{
  color: white;
}
</style>
