<template>
    <div class="container-fluid products">
  <div class="row">
    <div class="col"></div>
  <div class="col">
    <FilterComp/>
  </div>  
  </div>
  <div class="row justify-content-center " v-if="spinner">
    <SpinnerComp />
  </div>
  <div class="row gap-5">
    <div
      class="card"
      style="width: 20rem; height: 23rem"
      v-for="product in products"
      :key="product.prodID"
    >
      <img
        v-bind:src="product.imgURL"
        class="card-img-top"
        
       
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">R{{ product.price }}</p>
         
        <router-link :to="{name: 'singlep', params: {id: product.prodID}}">
        <button type="button" class="btn btn-dark">
          SEE MORE
        </button>  
        </router-link>
      
    
      </div>
    </div>
  </div>
</div>
</template>

<script>

import FilterComp from "@/components/FilterComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// import FilterProducts from "./filterProducts.vue";
export default {
components: { SpinnerComp, FilterComp },
setup() {
  const store = useStore();
  store.dispatch("fetchProducts");
  const products = computed(() => store.state.products); 
  const spinner = computed(() => store.state.showSpinner);
  
  return {
    products,
    spinner,
  };
},
};
</script>

<style  scoped>
.card{
border-radius: 0px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.row{
padding-bottom: 3rem;
}
.card {
color:black;
background-color: #ebebf3;
transition: background-color 0.5s;
}


.btn{
  border-radius: 0;
  transition: all 0.25s ease 0s
}
.btn:hover{
  scale: 1.05;
  box-shadow: 2px 2px 2px #000;
}





</style>