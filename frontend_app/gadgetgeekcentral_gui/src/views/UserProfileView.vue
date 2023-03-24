<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col userp">
            <img :src="user.userProfile" :alt="user.firstname + ' ' + user.lastname"  class="img-fluid mb-5" >
            <div class="logout">
              <logout/>
            </div>
            <div class="update">
              <router-link to="/updateUser">
                <button type="button" class="btn btn-warning">Edit your profile</button>
              </router-link>
            </div>
            <div class="deleteuser" >
              <router-link :to="{name: 'deleteuser', params: {id:user.userID}}">
        <button type="button" class="btn btn-danger">
          Delete Profile
        </button>  
        </router-link>
            </div>       
        </div>
        <div class="col"> 
          <h3 class="fw-bold">Your ID</h3> 
          <p class="user-info">{{ user.userID }}</p> 
          <hr class="border border-success border-2 opacity-50">
        <h3 class="fw-bold">Name</h3>
        <p class="user-info">{{ user.firstname + ' ' + user.lastname }}</p>
       <hr class="border border-success border-2 opacity-50">
        <h3 class="fw-bold">Gender</h3>
        <p>{{ user.gender }}</p>
        <hr class="border border-success border-2 opacity-50">
        <h3 class="fw-bold">Email Address</h3>
        <p class="user-info">{{ user.emailAdd }}</p>
        <hr class="border border-success border-2 opacity-50">
        <h3 class=" fw-bold">User Role</h3>
        <p class="user-info">{{ user.userRole }}</p>
        <hr class="border border-success border-2 opacity-50">
        <h3 class="fw-bold" >Contact number</h3>
        <p>{{ user.cellphoneNumber }}</p>
        <hr class="border border-success border-2 opacity-50">
        <h3 class=" fw-bold">Join Date</h3>
        <p class="user-info">{{ joiningDate[0] }}</p>
        <hr class="border border-success border-2 opacity-50">
       
    </div>
    </div>
</div>
</template>

<script>
import Logout from '@/components/logout.vue';

export default{
    setup() {
        const userLoggedIn = JSON.parse(localStorage.getItem("user"));
        let user = userLoggedIn == null || userLoggedIn == undefined ? null : userLoggedIn;
        const { joinDate } = user;
        let joiningDate = joinDate.split("T");
        return {
            user,
            joiningDate
        };
    },
    components: { Logout }
}
</script>
<style scoped>
.userp{
  display: grid;
}
 .col{ 
    text-align: start;
  }
  .container-fluid{
    padding-bottom: 1rem;
}
.btn{
    margin-top: 0.5rem;
    border-radius: 0;
    transition: all 0.25s ease 0s;
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}
  
  
</style>