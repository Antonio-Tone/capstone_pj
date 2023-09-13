<template>
    <div class="">
        <div class="log">
        <form @submit.prevent="loginCredentials">
            <h1>Login</h1>
            <div class="email mb-3">
            <input type="text" required v-model="login.emailAdd">
            </div>
            <div class="psswrd mb-3">
                <input type="password" required v-model="login.userPass">
            </div>
            <div class="btn">
                <button type="submit">login</button>
            </div>
        </form>
        
    </div>
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
        async loginCredentials() {
            const res = await this.$store.dispatch('login', this.login)
                     
        }
    }
}
</script>
<style>
    .log{
background-color:rgb(13,202,240);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    }

</style>