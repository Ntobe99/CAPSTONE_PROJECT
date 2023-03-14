<template>
    <div class="navcomp">
      <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <img src="https://i.postimg.cc/mDk93cjN/gadget-logo-removebg-preview.png" alt="Logo" width="70" height="50" class="d-inline-block align-text-top">
      
  
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
         <router-link to="/products">OUR GADGETS</router-link> 
        </li>
        <li class="nav-item">
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
  <li class="nav-item ">
    <RouterLink to="/user"><i class="fa-solid fa-user"></i></RouterLink>
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


    // export default {

    //   data(){
    //     return{
    //       userRole: false
    //     }
    //   }
        
    // }
</script>

<style  scoped>
.navbar{
  background-color: black !important;
  padding:15px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
}
.nav-item{
 padding-left: 2rem;
}

</style>