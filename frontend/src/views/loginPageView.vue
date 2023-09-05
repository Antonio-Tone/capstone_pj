<template>
    <div>
        <form @submit.prevent="loginCredentials">
            <input type="text" required v-model="login.emailAdd">
            <input type="password" required v-model="login.userPass">
            <button type="submit">login</button>
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
        async loginCredentials() {
            const res = await this.$store.dispatch('login', this.login)
            console.log(res)
            if(res.msg === "Logged in!"){
                this.$router.push("/Vehicles")
            } else{
                alert("Not logged in! Please try again")
            }
        }
    }
}
</script>
<style>
    
</style>