<template>
    <div class="row mt-5" v-if="isLoggedIn">
        <div class="col-4">
            <img v-bind:src="product.imgURL" class="w-100" alt="productImage"/>
            <b><i class="fa fa-truck"></i>free delivery</b><br>
            <b><i class="fa-solid fa-house"></i>Store pickup</b><br>
            <b><i class="fa fa-arrows-rotate"></i>Store exchanges available</b>
        </div>
        <div class="col-8">
            <h1>{{ product.prodName }}</h1>
            <h2>Product Information</h2>
            <p class="mt-4">{{ product.prodDescription }}</p>
            <h2>Product Category</h2>
            <p class="mt-4">{{ product.category }}</p>
            <h2>Price</h2>
            <p class="mt-4">R{{ product.price }}</p>

            <div class="btn btn-dark">ADD TO CART</div>
            <router-link to="/products">
                <button  type="button" class="btn btn-dark">SEE LESS</button>
            </router-link>
        </div>
    </div>
    <div v-else>
     
    </div>
</template>

<script>

export default {
    data() {
        return {
             isLoggedIn : false, // initially, the user is not logged in
    };},
 computed: {
        product() {
          return this.$store.state.product
        }
       
    },
  created() {
      this.$store.dispatch('fetchProduct', this.$route.params.id)
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
      // User is logged in
      this.isLoggedIn = true;
    } else {
      // User is not logged in
      this.$router.push('/login');
      alert('Please log in to see product details')
    }
  }
    }
    
</script>

<style  scoped> 
.row{
    padding-bottom: 1rem;
}
.col-4{
    background-color: azure;
}
.col-8{
    text-align: start;
}
.btn{
    border-radius: 0;
    margin: 1rem;
}
.w-100{
    padding-bottom: 3rem;
}

</style>