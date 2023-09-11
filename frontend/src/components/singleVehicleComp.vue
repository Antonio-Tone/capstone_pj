<template>
    <div>
        <!-- {{ car}} -->
    </div>
</template>

<script>
    export default {
        computed:{
            car(){
                return this.$store.state.viewedVehicle
            }
        },
        components:{
        }
    }
</script>

<style scoped>

</style>