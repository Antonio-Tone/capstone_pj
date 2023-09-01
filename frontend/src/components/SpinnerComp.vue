<template>
<div class="main">
    <div class="spinner-border text-primary mx-auto my-auto d-flex justify-content-center animated animate__fadeIn" style="transition: 2s ease-in-out;"  role="status">
  <img class="spinner" src="https://i.postimg.cc/q7r3KKSy/icons8-ferrari-50.png" alt="">
</div>
<div class="">
  <p>FUELING UP THE CARS</p>
</div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner-border{
  margin-top: 0rem;
  padding: 0rem;
  position: relative;
  height: 10rem;
  width: 10rem;
  border:none;
  /* border: 1px solid red !important; */
   transition: 2s ease-in-out;
  
  /* box-shadow: rgba(510,430,0,1) 5px 5px 10px 10px; */
}
.spinner{
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius:100px ;
   
  
}
img{
  width: 90px !important;
  height: 90px !important;
}
p{
  font-size: 30px !important;
}
</style>