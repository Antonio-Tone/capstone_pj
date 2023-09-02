<template>
    <div>
        <form @submit.prevent="loginCredentials">
            <input type="text" v-model="login.emailAdd">
            <input type="password" v-model="login.userPass">
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
            await this.$store.dispatch('login', this.login)
        }
    }
}
</script>
<style>
    
</style>