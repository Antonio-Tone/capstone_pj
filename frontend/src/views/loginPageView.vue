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
import Swal from 'sweetalert2'
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
                await Swal.fire({
                        icon: "success",
                        title: "Logged in Successfully",
                        text: `You are now logged in! Welcome, ${res.cresult.userName}.`
                    })
                this.$router.push("/Vehicles")
            } else{
                await Swal.fire({
                        icon: "error",
                        title:"Login failed",
                        text: errMsg
                    })
            }
                
        }
    }
}
</script>
<style>
    
</style>