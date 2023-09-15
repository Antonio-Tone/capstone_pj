<template>
    <div class="login mx-auto d-flex justify-content-center">
      <form @submit.prevent="loginCredentials">
        <div class="email">
          <label for="email" class="text-white lead">Email Address</label><br>
          <input type="text" class="email1 enter" required v-model="login.emailAdd">
        </div>
  
        <div class="pass">
          <label for="" class="text-white lead">Password</label><br>
          <input type="password" class="pass1 enter" required v-model="login.userPass">
        </div>
  
        <div class="d-flex justify-content-center m-2">
            <div class="log">
          <button type="submit" class="style">Login</button>
        </div>
        <div class="reg">
          <button type="submit" class="style" @click="signUp">Register</button>
        </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        login: {
          emailAdd: '',
          userPass: ''
        }
      }
    },
  
    methods: {
      signUp() {
        this.$router.push("/register")
      },
      async loginCredentials() {
        const res = await this.$store.dispatch('login', this.login)
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    padding-top: 2.4rem;
    width: 40% !important;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .lead{
    color:rgb(228,212,134) !important;
  }
  .enter{
  background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);
  border-color:white ;
  border-radius: 30px;
  color:rgb(228,212,134);
  text-align: center;

}
.style{
  background: rgb(34, 34, 34);
 color: white;
 box-shadow: 0 0 0 0 transparent;
 -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  border-radius: 10px;
  margin: 5px;
}
.style:hover{
  padding: 5px 8px 5px 8px;
  background: rgb(228,212,134);
  box-shadow: 0 0 30px 5px rgb(228,212,134);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  color:rgb(34,34,34);
}
  .pass {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  /* Media Query for screens up to 250px width */
  @media (max-width: 250px) {
    .login {
      width: 100%; 
      padding: 1rem; 
    }
    

    .email1,
    .pass1,
    .log button,
    .reg button {
      font-size: 16px;
      padding: 5px 10px;
    }
  }
  </style>
  