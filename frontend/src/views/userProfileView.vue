<template>
  <div>
    
      {{user.userName}}
      {{user.lastName}}
    
  </div>
</template>

<script>
export default {    
   props: ['userID'],
  computed: {
    user() {
      return this.$store.state.user;
    },
   },
};
</script>
