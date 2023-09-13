<template>
  <div class="row">
    <div class="col-6 d-flex my-auto align-item-center justify-content-center">
      <img src="https://i.postimg.cc/q7r3KKSy/icons8-ferrari-50.png" alt="">
    </div>
    <div class="col-6 my-auto align-item-center">
      <h1 class="mx-auto d-flex justify-content-center mt-5">MY PROFILE</h1>
<div class="user">
  <ul class="">
    <il><label for="">NAME:</label> {{ user.userName }}  {{ user.lastName }}</il>
    <il><label for="">GENDER:</label>  {{user.gender}}</il>
    <il><label for="">AGE:</label>{{user.age}}</il>
    <il><label for="">EMAIL:</label>{{user.emailAdd}}</il>
  </ul>
</div>
    </div>
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
<style scoped>
.row{
  width: 100%;
  min-height: 77vh !important;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start !important;
}
il{
  margin: 20px;
}
</style>
