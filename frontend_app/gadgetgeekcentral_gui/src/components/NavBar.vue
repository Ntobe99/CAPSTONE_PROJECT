<template>
    <div class="navcomp">
      <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/Bv0VQRHD/Screenshot_2023-03-15_101849-removebg-preview.png" alt="Logo" width="70" height="50" class="d-inline-block align-text-top">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <div class="">
          
        </div>
        <li class="nav-item">
         <RouterLink to="/">HOME</RouterLink>
        </li> 
        <li class="nav-item">
         <RouterLink to="/about">ABOUT US</RouterLink>
        </li> 
        <li class="nav-item">
         <router-link to="/products">OUR GADGETS</router-link> 
        </li>
        <li  v-if="user !== null && user.userRole == 'Admin'" class="nav-item" >
            <RouterLink to="/Admin">ADMIN</RouterLink>
        </li>
        <li class="nav-item">
          <router-link to="/contact">CONTACT US</router-link>
        </li>
        <li class="nav-item ">
   <RouterLink to="/register">REGISTER</RouterLink>
  </li>
  <li class="nav-item ">
    <RouterLink to="/login">LOGIN</RouterLink>
  </li>
  <li v-if="user !== null" class="nav-item ">
    <RouterLink to="/user"><img class="rounded " :src="user.userProfile" style="height: 1rem;background-color: aquamarine;"></RouterLink>
    <p class=" user-details d-block d-lg-none fw-bold fs-5">{{ user.firstname + ' ' + user.lastname }}</p>
  </li>
  <li class="nav-item ">
    <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
  </li>
      </ul>

      
    </div>
  </div>
</nav>


    </div>
</template>

<script>

export default{
  setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = userLoggedIn == null || userLoggedIn == undefined ? null: userLoggedIn;
    return{
      user
    }
  }
}
</script>

<style  scoped>
.navbar{
  background-color: rgb(2, 9, 41) !important;
  padding:15px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
}
.nav-item{
 padding-left: 2rem;
}
.navbar-toggler-icon{
  color: rgb(118, 189, 189);
}
.user-details{
  color: aqua;
}

</style>