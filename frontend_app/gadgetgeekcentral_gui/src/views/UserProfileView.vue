<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col userp">
            <img :src="user.userProfile" :alt="user.firstname + ' ' + user.lastname"  class="img-fluid mb-5" >
           <router-link to="/logout">
            <button type="button" class="btn btn-dark">Logout</button>
           </router-link>
           
            
            <button type="button" class="btn btn-danger">Delete account</button>
        </div>
        <div class="col">
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
        <p class="user-info">{{ splitDate[0] }}</p>
        <hr class="border border-success border-2 opacity-50">
       
    </div>
    </div>
</div>
</template>

<script>
export default{
    setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
    const {joinDate} = user;
    let splitDate = joinDate.split('T');
    return{
      user,
      splitDate
    }
    }
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
</style>