<template>
    <div>
        <form @submit.prevent="registering" class="d-flex justify-content-center mx-auto">
            <input type="text" required v-model="register.userName"> <br>
            <input type="text" required v-model="register.lastName"><br>
            <input type="text" required v-model="register.gender"><br>
            <input type="number" required v-model="register.age"><br>
            <input type="email" required v-model="register.emailAdd"><br>
            <input type="password" required v-model="register.userPass">
            <button type="submit">register</button>
        </form>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            register: {
                userName:'',
                lastName:'',
                gender:'',
                age:'',
                emailAdd:'',
                userPass:''
                
        }}
    },

    methods: {
        async registering() {
            console.log(this.register)
            await this.$store.dispatch('registerUser', this.register)
            this.$router.push("/login")
                                                    //    this.model.register.userID
                                                    // setTimeout(()=>{
                                                    //     location.reload();500
                                                    // })
        },
    }
}

</script>
<style>
    
</style>