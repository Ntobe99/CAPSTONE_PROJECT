<template>
  <div class="home">
    <div class="name" v-if="user !== null ">
   <h1>Welcome {{ user.firstname + ' '+ user.lastname}}</h1>
  </div>
  <div class="guest" v-else><h1>Welcome guest</h1></div>
 
    <video autoplay loop>
      <source src="https://images.samsung.com/is/content/samsung/assets/africa_en/2208/pcd/smartphones/PCD_Combo_KV_Main-KV_1440x640_pc_v1.mp4" type="video/mp4">
    </video>
    

 
</div>

</template>

<script>




export default {
  name: 'HomeView',
  components: {
   
  },
  setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
    return{
      user,
    }    
  }
}
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
}
.home{
  background-color: rgb(238, 239, 239);
  height: 100%;
  width: 100%;
}

</style>
