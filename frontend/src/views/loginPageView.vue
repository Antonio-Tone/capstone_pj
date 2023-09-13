<template>
    <div class="login mx-auto d-flex justify-content-center">
        <form @submit.prevent="loginCredentials">
           <div class="email">
            <label for="emal" class="text-white">email Address</label><br>
             <input type="text" class="email1" required v-model="login.emailAdd">
           </div>

            <div class="pass">
                <label for="" class="text-white">Password</label><br>
                <input type="password" class="pass1" required v-model="login.userPass">
            </div>

            <div class="log">
                <button type="submit">login</button>
            </div>

            <div class="text">
                <p>Click the button to sign up</p>
            </div>

            <div class="reg">
                <button type="submit" @click="signUp()">register</button>
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
        signUp(){
            this.$router.push("/register")
        },
        async loginCredentials() {
            const res = await this.$store.dispatch('login', this.login)
                     
        }
    }
}
</script>
<style>
    .login{
        padding-top: 2.4rem;
        width: 40% !important;
        height: 60vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid red;
    }
    .pass {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
</style>